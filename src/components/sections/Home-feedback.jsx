// src/components/home/HomeFeedback.jsx
import { useEffect, useState } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "../../firebase/firebase";
import bgImage from "../../assets/img/herobg.png";

/**
 * HomeFeedback Component
 * ----------------------
 * Allows users to view feedback from other players and submit their own comments.
 * 
 * Features:
 * 1. Displays scrolling "marquee" sections highlighting user comments.
 * 2. Connects to Firebase Realtime Database to fetch and push comments.
 * 3. Form validation for empty fields.
 * 4. Success and error feedback for users.
 * 5. Background image with multiple gradient overlays for visual depth.
 */
const HomeFeedback = () => {
  // ================= STATE VARIABLES =================
  const [comments, setComments] = useState([]);   // Holds all fetched comments
  const [name, setName] = useState("");           // Form input: Name
  const [email, setEmail] = useState("");         // Form input: Email
  const [content, setContent] = useState("");     // Form input: Comment text
  const [error, setError] = useState("");         // Error messages
  const [success, setSuccess] = useState("");     // Success messages

  // ================= FETCH COMMENTS FROM FIREBASE =================
  useEffect(() => {
    const commentsRef = ref(database, "comments/");
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const commentsArray = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setComments(commentsArray);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // ================= SUBMIT NEW COMMENT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate all fields
    if (!name || !email || !content) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    try {
      const commentsRef = ref(database, "comments/");
      await push(commentsRef, {
        name,
        email,
        content,
        timestamp: Date.now(),
      });

      // Clear form inputs
      setName("");
      setEmail("");
      setContent("");
      setSuccess("Your comment has been posted successfully!");
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("Failed to submit comment. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-black py-20 overflow-hidden">

      {/* ================= MARQUEES ================= */}
      {/* Decorative scrolling text highlighting player feedback */}
      <div className="home-feedback my-10">

        {/* Top marquee (right-to-left) */}
        <div className="marquee marquee-right">
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-1 text-white/50 text-lg uppercase italic">
                <h1 className="theme-color">
                  what players say? <span className="text-white/50">what players say?</span>
                </h1>
              </span>
            ))}
          </div>
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-1 text-white/50 text-lg uppercase italic">
                <h1 className="theme-color">
                  what players say? <span className="text-white/50">what players say?</span>
                </h1>
              </span>
            ))}
          </div>
        </div>

        {/* Main comments marquee */}
        <div className="marquee marquee-right pt-10">
          <div className="marquee-track">
            {comments.map((item, index) => (
              <div
                key={index}
                className="mx-6 text-white text-3xl md:text-5xl font-semibold flex items-center gap-4 tracking-widest"
              >
                <span className="text-white/40">{item.name} ●</span>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
          {/* Duplicate track for seamless scrolling */}
          <div className="marquee-track">
            {comments.map((item, index) => (
              <div
                key={`dup-${index}`}
                className="mx-6 text-white text-3xl md:text-5xl font-semibold flex items-center gap-4 tracking-widest"
              >
                <span className="text-white/40">{item.name} ●</span>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee (left-to-right) */}
        <div className="marquee marquee-left py-10">
          <div className="marquee-track">
            {comments.map((item, index) => (
              <div
                key={index}
                className="mx-6 text-white text-3xl md:text-5xl font-semibold flex items-center gap-4 tracking-widest"
              >
                <span className="text-white/40">{item.name} ●</span>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
          <div className="marquee-track">
            {comments.map((item, index) => (
              <div
                key={`dup-${index}`}
                className="mx-6 text-white text-3xl md:text-5xl font-semibold flex items-center gap-4 tracking-widest"
              >
                <span className="text-white/40">{item.name} ●</span>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional decorative marquee */}
        <div className="marquee marquee-right">
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-2 text-white/50 text-lg uppercase tracking-[0.4em] italic"
              >
                <h1>
                  what players say? <span className="theme-color">what players say?</span>
                </h1>
              </span>
            ))}
          </div>
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-2 text-white/50 text-lg uppercase tracking-[0.4em] italic"
              >
                <h1>
                  what players say? <span className="theme-color">what players say?</span>
                </h1>
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ================= COMMENT BOX ================= */}
      {/* User input form with Firebase integration */}
      <div
        className="h-[70vh] items-center justify-end px-4 tracking-widest text-left relative bg-cover bg-start"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl h-full flex mx-auto items-center justify-end">
          <div className="w-full max-w-xl p-8 shadow-lg">

            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-left mb-8 theme-color">
              Share your thoughts
            </h2>

            {/* Comment Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-end items-end px-5 gap-6"
            >
              {/* Name Input */}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white/20 rounded-4xl px-4 py-3 text-white outline-none focus:border-white/50 transition"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white/20 rounded-4xl px-4 py-3 text-white outline-none focus:border-white/50 transition"
              />

              {/* Comment Textarea */}
              <textarea
                rows="4"
                placeholder="Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-white/20 rounded-4xl px-4 py-3 text-white outline-none resize-none focus:border-white/50 transition"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-30 py-3 rounded-xl bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition"
              >
                Submit
              </button>

              {/* Display Error & Success Messages */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeedback;
