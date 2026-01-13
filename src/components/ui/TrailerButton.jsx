import React from "react";
import { Play } from "lucide-react";

/* -----------------------------------------------------------
   TrailerButton Component
   -----------------------------------------------------------
   A stylized button that links to a trailer video (e.g., YouTube).
   Features:
     - Animated text swap on hover
     - Ping animation on icon
     - Fully responsive and interactive
   Props:
     - btnName (string): Primary text displayed initially (default: "Watch Trailer")
     - btnNameSecond (string): Secondary text revealed on hover (default: "Youtube")
     - trailerLink (string): URL of the trailer video (default: "#")
----------------------------------------------------------- */
const TrailerButton = ({
  btnName = "Watch Trailer",
  btnNameSecond = "Youtube",
  trailerLink = "#", 
}) => {
  return (
    <a href={trailerLink} target="_blank" rel="noopener noreferrer">
      <button
        className="
          inline-flex items-center gap-2
          theme-color font-semibold text-lg
          bg-transparent border-none cursor-pointer
          group
          transform transition-all duration-300 ease-out
          scale-100 hover:scale-95
          hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]
        "
      >
        {/* Left bracket for visual styling */}
        <span>[</span>

        {/* Button content container */}
        <span className="inline-flex items-center">

          {/* ---------------------------------------------------
             Secondary text (appears on hover)
             ---------------------------------------------------
             - Initially hidden with max-width 0 and opacity 0
             - Expands and fades in on hover
             - Smooth transition for width and opacity
          --------------------------------------------------- */}
          <span
            className="
              overflow-hidden
              max-w-0 opacity-0
              whitespace-nowrap
              text-sm text-white tracking-widest
              transition-all duration-500 ease-out
              group-hover:max-w-[200px] group-hover:opacity-100
            "
          >
            {btnNameSecond}
          </span>

          {/* ---------------------------------------------------
             Ping icon animation
             ---------------------------------------------------
             - Small red dot with inner shadow
             - Outer circle has pulsating (ping) animation
             - Positioned relative to align with text
          --------------------------------------------------- */}
          <div className="relative w-4 h-4 mr-1 ml-1">
            {/* Inner solid dot */}
            <span className="absolute inset-0 w-3 h-3 bg-[#d10000] rounded-full shadow-inner"></span>
            {/* Outer ping animation */}
            <span className="absolute inset-0 w-3 h-3 rounded-full animate-ping bg-[#fd4756]/50"></span>
          </div>

          {/* ---------------------------------------------------
             Primary text (initially visible)
             ---------------------------------------------------
             - Visible by default
             - Hides and fades out on hover
             - Smooth width and opacity transition
          --------------------------------------------------- */}
          <span
            className="
              overflow-hidden
              max-w-[200px]
              whitespace-nowrap
              text-sm text-white tracking-widest
              transition-all duration-500 ease-out
              group-hover:max-w-0 group-hover:opacity-0 opacity-90
            "
          >
            {btnName}
          </span>

        </span>

        {/* Right bracket for visual styling */}
        <span>]</span>
      </button>
    </a>
  );
};

export default TrailerButton;
