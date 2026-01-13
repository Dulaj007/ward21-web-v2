// src/components/home/WatchTrailer.jsx
import { useRef, useEffect, useState } from "react";
import trailerVideo from "../../assets/vid/T1.mp4"; // Local video file used for trailer playback

import TrailerMedia from "../../components/ui/blogBox"; 
// Reusable UI component to render media (image/video) with title, description, and buttons

import english from "../../data/english/blog.json"; // English language content
import sinhala from "../../data/sinhala/blog.json"; // Sinhala language content

/**
 * WatchTrailer Component
 * -----------------------
 * This component renders the "Watch Trailer" section for the website.
 * It displays a full-screen trailer video using the reusable TrailerMedia component.
 * 
 * Props:
 * - language: "english" or "sinhala" to determine which language content to display.
 * 
 * Features:
 * 1. Dynamic content: Uses selected language JSON data for title, description, and button texts.
 * 2. Video playback: Integrates a local MP4 video as the trailer source.
 * 3. Responsive full-screen section: Ensures the trailer is centered and visually prominent.
 * 4. Reusable UI: TrailerMedia component handles rendering of media, buttons, and layout.
 */
const WatchTrailer = ({ language }) => {
  // Select the appropriate language content
  const data = language === "sinhala" ? sinhala : english;
  const trailerData = data.Trailer; // Extract trailer-specific content

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center relative">
      {/* 
        TrailerMedia Component Usage
        -----------------------------
        Props:
        - mediaType: "video" indicates a video media type
        - mediaSrc: local video file for playback
        - title: trailer title or main description
        - description: detailed description of trailer
        - btnName: primary button text (e.g., "Watch Now")
        - btnNameSecond: secondary button text (e.g., "More Info")
        - trailerLink: optional link for external trailer or video page
      */}
      <TrailerMedia
        mediaType="video"
        mediaSrc={trailerVideo}
        title={trailerData.description}
        description={trailerData.description}
        btnName={trailerData.btnPrimary}
        btnNameSecond={trailerData.btnSecondary}
        trailerLink={trailerData.trailerLink}
      />
    </section>
  );
};

export default WatchTrailer;
