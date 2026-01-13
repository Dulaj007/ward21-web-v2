// src/components/ui/DownloadModal.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth modal animations
import { X } from "lucide-react"; // Close icon
import { ref, push } from "firebase/database"; // Firebase database references
import { database } from "../../firebase/firebase"; // Firebase configuration
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social icons

/**
 * DownloadModal Component
 * -----------------------
 * Multi-step modal that guides the user through:
 * 1. Entering personal info (Name, Email)
 * 2. Adding a comment
 * 3. Supporting the developer through social media interactions
 * 
 * Features:
 * - Step-by-step validation with error messages
 * - Social media progress bars
 * - Terms agreement checkbox
 * - Saves user data to Firebase
 * - Triggers the download link only when all steps are completed
 */
const DownloadModal = ({ isOpen, onClose }) => {
  // ===================== STATE MANAGEMENT =====================
  const [step, setStep] = useState(1); // Tracks current step in modal
  const [name, setName] = useState(""); // User's name input
  const [email, setEmail] = useState(""); // User's email input
  const [comment, setComment] = useState(""); // User's comment input
  const [errors, setErrors] = useState({}); // Input validation errors
  const [isAgreed, setIsAgreed] = useState(false); // Terms & conditions checkbox

  // Social media interaction states and progress
  const [isGitHubClicked, setIsGitHubClicked] = useState(false);
  const [isLinkedInClicked, setIsLinkedInClicked] = useState(false);
  const [isInstagramClicked, setIsInstagramClicked] = useState(false);
  const [githubProgress, setGithubProgress] = useState(0);
  const [linkedInProgress, setLinkedInProgress] = useState(0);
  const [instagramProgress, setInstagramProgress] = useState(0);

  const MAX_CHARS = 50; // Max characters for comment input

  // ===================== SOCIAL PROGRESS EFFECTS =====================
  // Each social media button increments a progress bar over time when clicked
  useEffect(() => {
    let timer;
    if (isGitHubClicked && githubProgress < 100) {
      timer = setInterval(() => {
        setGithubProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 100); // 5s total for full progress
    }
    return () => clearInterval(timer);
  }, [isGitHubClicked]);

  useEffect(() => {
    let timer;
    if (isLinkedInClicked && linkedInProgress < 100) {
      timer = setInterval(() => {
        setLinkedInProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isLinkedInClicked]);

  useEffect(() => {
    let timer;
    if (isInstagramClicked && instagramProgress < 100) {
      timer = setInterval(() => {
        setInstagramProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isInstagramClicked]);

  // ===================== VALIDATION FUNCTIONS =====================
  const validateStep1 = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!comment.trim()) newErrors.comment = "Comment is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===================== STEP HANDLERS =====================
  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  // ===================== DOWNLOAD HANDLER =====================
  const handleDownload = async () => {
    // Ensure all conditions are met before download
    if (!(isAgreed && githubProgress === 100 && linkedInProgress === 100 && instagramProgress === 100)) {
      alert("Please complete all steps first!");
      return;
    }

    // Save comment & download info to Firebase
    const commentsRef = ref(database, "comments/");
    await push(commentsRef, {
      name,
      email,
      content: comment,
      timestamp: Date.now(),
    });

    const downloadUsersRef = ref(database, "downloadUsers/");
    await push(downloadUsersRef, { name, email, timestamp: Date.now() });

    // Trigger file download
    window.open(
      "https://ward21.info.gf//Downloads/WARD21setup.zip",
      "_blank"
    );

    // Reset modal state
    onClose();
    setStep(1);
    setName("");
    setEmail("");
    setComment("");
    setIsAgreed(false);
    setIsGitHubClicked(false);
    setIsLinkedInClicked(false);
    setIsInstagramClicked(false);
    setGithubProgress(0);
    setLinkedInProgress(0);
    setInstagramProgress(0);
  };

  // ===================== MODAL RENDER =====================
  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/1 backdrop-blur-xl px-5">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white/10 backdrop-blur-3xl text-white rounded-2xl max-w-sm md:max-w-xl w-full p-6 relative shadow-4xl"
      >
        {/* ===================== CLOSE BUTTON ===================== */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-white cursor-pointer hover:text-red-500"
        >
          <X size={24} />
        </button>

        {/* ===================== STEP 1: USER INFO ===================== */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text3xl font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] tracking-widest">
              Step 1: Enter Info
            </h1>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full text-base p-3 pl-5 tracking-widest rounded-3xl border drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${
                errors.name ? "border-red-500" : "border-white/50"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.4)] text-sm">{errors.name}</p>
            )}

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 pl-5 text-base rounded-3xl tracking-widest border drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${
                errors.email ? "border-red-500" : "border-white/50"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Next Step Button */}
            <button
              onClick={handleNext}
              className="mt-4 w-[40%] text-base md:text-xl ml-auto py-3 rounded-3xl bg-white/30 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer hover:bg-white/70 hover:text-black font-semibold tracking-widest flex items-center justify-center gap-1"
            >
              <h1>Next</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* ===================== STEP 2: USER COMMENT ===================== */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text3xl font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] tracking-widest">
              Step 2: Share your thoughts
            </h1>
            <textarea
              rows={4}
              placeholder="Type your comment..."
              value={comment}
              onChange={(e) => {
                const text = e.target.value;
                if (text.length <= MAX_CHARS) setComment(text);
              }}
              className={`w-full text-base p-3 pl-5 tracking-widest rounded-3xl border drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${
                errors.comment ? "border-red-500" : "border-white/50"
              }`}
            />
            {errors.comment && (
              <p className="text-red-500 text-sm">{errors.comment}</p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="mt-4 w-[40%] text-base md:text-xl mr-auto py-3 rounded-3xl bg-white/30 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer hover:bg-white/70 hover:text-black font-semibold tracking-widest flex items-center justify-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 rotate-180"
                >
                  <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1>Back</h1>
              </button>
              <button
                onClick={handleNext}
                className="mt-4 w-[40%] text-base md:text-xl ml-auto py-3 rounded-3xl bg-white/30 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer hover:bg-white/70 hover:text-black font-semibold tracking-widest flex items-center justify-center gap-1"
              >
                <h1>Next</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ===================== STEP 3: SUPPORT DEVELOPER ===================== */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text3xl font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] tracking-widest">
              Step 3: Support Developer
            </h1>

            {/* Social Media Buttons */}
            <div className="flex flex-col gap-3">
              {/* GitHub Button */}
              <button
                onClick={() => {
                  setIsGitHubClicked(true);
                  window.open("https://github.com/Dulaj007", "_blank", "noopener,noreferrer");
                }}
                disabled={githubProgress > 0}
                className="w-full py-4 px-4 hover:scale-95 duration-500 transition rounded-lg cursor-pointer bg-black/80 hover:bg-black font-semibold flex justify-between items-center"
              >
                <div className="flex items-center gap-3 text-green-500">
                  <FaGithub size={20} />
                  <h1>GitHub</h1>
                </div>
                <div className="w-1/2 bg-gray-600 h-2 rounded">
                  <div className="bg-green-500 h-2 rounded" style={{ width: `${githubProgress}%` }}></div>
                </div>
              </button>

              {/* LinkedIn Button */}
              <button
                onClick={() => {
                  setIsLinkedInClicked(true);
                  window.open("https://www.linkedin.com/in/yasitha-dulaj/", "_blank", "noopener,noreferrer");
                }}
                disabled={linkedInProgress > 0}
                className="w-full py-4 px-4 rounded-lg hover:scale-95 duration-500 transition bg-black/80 cursor-pointer hover:bg-black font-semibold flex justify-between items-center"
              >
                <div className="flex items-center gap-3 text-blue-300">
                  <FaLinkedin size={20} />
                  <h1>LinkedIn</h1>
                </div>
                <div className="w-1/2 bg-gray-600 h-2 rounded">
                  <div className="bg-green-500 h-2 rounded" style={{ width: `${linkedInProgress}%` }}></div>
                </div>
              </button>

              {/* Instagram Button */}
              <button
                onClick={() => {
                  setIsInstagramClicked(true);
                  window.open("https://www.instagram.com/itsdulaj/", "_blank", "noopener,noreferrer");
                }}
                disabled={instagramProgress > 0}
                className="w-full py-4 px-4 rounded-lg hover:scale-95 duration-500 transition bg-black/80 cursor-pointer hover:bg-black font-semibold flex justify-between items-center"
              >
                <div className="flex items-center gap-3 text-purple-500">
                  <FaInstagram size={20} />
                  <h1>Instagram</h1>
                </div>
                <div className="w-1/2 bg-gray-600 h-2 rounded">
                  <div className="bg-green-500 h-2 rounded" style={{ width: `${instagramProgress}%` }}></div>
                </div>
              </button>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-center mt-1 mx-auto text-sm">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
                className="mr-2 h-4 w-4"
              />
              <label>
                I agree to the{" "}
                <a
                  href="https://ward21.info.gf/Terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            {/* Final Download Button */}
            <button
              onClick={handleDownload}
              disabled={
                !isAgreed || githubProgress < 100 || linkedInProgress < 100 || instagramProgress < 100
              }
              className={`mt-4 w-full py-3 rounded-lg text-lg font-semibold uppercase ${
                isAgreed &&
                githubProgress === 100 &&
                linkedInProgress === 100 &&
                instagramProgress === 100
                  ? "bg-blue-600 text-white cursor-pointer"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              <h1>Download</h1>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DownloadModal;
