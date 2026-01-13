import { useEffect, useRef, useState } from "react";
import Location from "../../assets/img/gameplay/im4.png";
import Gameplay from "../../assets/img/gameplay/im5.png";

import useTypewriter from "../hooks/useTypewriter";
import useParallax from "../hooks/useParallax";

import english from "../../data/english/about.json";
import sinhala from "../../data/sinhala/about.json";

/**
 * AdditionalInfo Component
 * ------------------------
 * Displays additional information about the game, including:
 * 1. Gameplay section with image and typewriter text.
 * 2. Location section with image and typewriter text.
 * 3. Scroll-based reveal animations.
 * 4. Parallax effects for images.
 * 
 * Props:
 *  - language: string ("english" | "sinhala") to select language-specific JSON content.
 * 
 * Features:
 *  - Intersection Observer for scroll-triggered reveal.
 *  - Typewriter text animation with configurable speed.
 *  - Parallax effect on images using custom hook.
 */
const AdditionalInfo = ({ language }) => {
  const sectionRef = useRef(null); // Reference to section for scroll observer
  const imageRef = useRef(null);   // Reference to first image for parallax
  const imageRef2 = useRef(null);  // Reference to second image for parallax

  const [show, setShow] = useState(false); // Controls scroll-triggered reveal

  /* 🌍 Language Data */
  const data = language === "sinhala" ? sinhala : english;
  const info = data.additionalInfo;

  /* 👀 Reveal on scroll using Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true); // Reveal section when 40% visible
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔁 Reset reveal effect on language change */
  useEffect(() => {
    setShow(false); // Hide temporarily
    const timer = setTimeout(() => setShow(true), 50); // Show after small delay
    return () => clearTimeout(timer);
  }, [language]);

  /* ⌨️ Typewriter effect for gameplay and location text */
  const gameplayText = useTypewriter(info.gameplay.text, 60, show);
  const locationText = useTypewriter(info.location.text, 60, show);

  /* 🌀 Parallax effect on images */
  useParallax([imageRef, imageRef2]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-30 px-6 md:px-16 bg-black text-white overflow-hidden"
    >
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* -------------------- GAMEPLAY IMAGE + TEXT -------------------- */}
        <div className="space-y-10">
          {/* Gameplay Image with reveal & parallax */}
          <div className="relative h-[50vh] overflow-hidden">
            <img
              ref={imageRef}
              src={Gameplay}
              alt="Ward 21 Gameplay"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out scale-105
                ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
              `}
            />
          </div>

          {/* Gameplay Title + Typewriter Text */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold theme-color mb-6 transition-all duration-700 text-right
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {info.gameplay.title}
            </h2>

            <p className="text-lg leading-relaxed text-white/80 min-h-[160px] [word-spacing:0.3em] text-right">
              {gameplayText}
            </p>
          </div>
        </div>

        {/* -------------------- LOCATION IMAGE + TEXT -------------------- */}
        <div className="space-y-10">
          {/* Location Title + Typewriter Text */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold theme-color mb-6 transition-all duration-700
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {info.location.title}
            </h2>

            <p className="text-lg leading-relaxed text-white/80 min-h-[160px] [word-spacing:0.3em]">
              {locationText}
            </p>
          </div>

          {/* Location Image with reveal & parallax */}
          <div className="relative h-[50vh] overflow-hidden">
            <img
              ref={imageRef2}
              src={Location}
              alt="Ward 21 Location"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out scale-105
                ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
              `}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdditionalInfo;
