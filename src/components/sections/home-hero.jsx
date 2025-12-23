import React, { useEffect, useState } from "react";
import bgVideo from "../../assets/vid/bgrv.mp4";
import TrailerButton from "../ui/TrailerButton";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

/**
 * HeroSection Component
 * ---------------------
 * A visually rich hero section featuring:
 * 1. Fullscreen video background with gradient overlay.
 * 2. Centered game logo and a "Watch Trailer" button.
 * 3. Rotated credit text with glitch animation.
 * 4. Vertical social media icon links.
 * 
 * Props:
 * - language (string): determines the language-specific hero data to load from JSON. Default: "english".
 */
const HeroSection = ({ language = "english" }) => { 
  // State to store language-specific hero section data
  const [heroData, setHeroData] = useState(null);

  /**
   * Dynamically import hero section data based on selected language.
   * The data includes logo, trailer button text & link, credit text, and social links.
   * This allows multi-language support for the hero section.
   */
  useEffect(() => {
    import(`../../data/${language}/hero.json`).then((module) => {
      setHeroData(module.default);
    });
  }, [language]);

  // Render nothing until heroData is loaded to avoid undefined errors
  if (!heroData) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ---------------- VIDEO BACKGROUND ----------------
          Fullscreen video acting as the hero section background.
          - Opacity reduced to 60% to improve contrast for overlay content.
          - autoplay, loop, muted, playsInline ensures seamless background playback.
      */}
      <video
        className="absolute inset-0 w-full h-full opacity-60 object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ---------------- GRADIENT OVERLAY ----------------
          Overlay gradient from black to transparent to enhance readability of text
          and buttons placed over the video.
          - pointer-events-none ensures overlay does not block interactions.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

      {/* ---------------- CENTERED WATCH TRAILER BUTTON ----------------
          Positioned near the center of the screen.
          - Uses TrailerButton component with text and link from JSON data.
          - btnName, btnNameSecond, trailerLink props passed from heroData.
      */}
      <div className="absolute top-5/6 md:top-1/2 left-2/3 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <TrailerButton
          btnName={heroData.trailerButton.btnName}
          btnNameSecond={heroData.trailerButton.btnNameSecond}
          trailerLink={heroData.trailerButton.trailerLink}
        />
      </div>

      {/* ---------------- CENTER BOTTOM IMAGE / LOGO ----------------
          Main game logo positioned near the center-bottom.
          - Width adjusts responsively for small, medium, and large screens.
          - select-none ensures the image cannot be accidentally selected.
      */}
      <div className="absolute ml-5 mt-5 sm-ml-0 sm:mt-0 w-60 md:w-80 lg:w-90 top-4/6 sm:top-4/5 left-1/2 -translate-x-1/2 z-10 md:-translate-x-1/2">
        <img
          src={heroData.logo.src}
          alt={heroData.logo.alt}
          className="md:w-80 lg:w-90 select-none"
        />
      </div>

      {/* ---------------- ROTATED CREDIT TEXT ----------------
          Glitch-style rotating stack of credit text along the left side.
          - Rotated 90 degrees counter-clockwise.
          - Animation achieved using multiple stacked spans with CSS variables.
          - opacity and tracking for visual styling.
      */}
      <div className="absolute top-1/2 -left-40 sm:-left-30 transform -rotate-90 z-20">
        <div className="stack-glitch text-white opacity-70 tracking-[8px]">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ "--index": i, "--stacks": 3 }}>
              {heroData.creditText}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- SOCIAL ICONS ----------------
          Vertical column of social media icons.
          - Positioned on the left/right side depending on screen size.
          - Links open in a new tab with safe `noopener noreferrer`.
          - hero-social-btn class handles hover and sizing styling.
      */}
      <div className="absolute top-4/7 md:top-1/2 sm:left-auto left-20 sm:right-20 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        <a href={heroData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hero-social-btn">
          <FaFacebookF />
        </a>
        <a href={heroData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hero-social-btn">
          <FaInstagram />
        </a>
        <a href={heroData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hero-social-btn">
          <FaGithub />
        </a>
        <a href={heroData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-btn">
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
