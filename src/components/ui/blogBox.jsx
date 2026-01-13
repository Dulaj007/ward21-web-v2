// src/components/ui/HeroMedia.jsx
import { useEffect, useRef, useState } from "react";
import TrailerButton from "./TrailerButton"; // Reusable button component for trailer actions

/**
 * HeroMedia Component
 * -------------------
 * A responsive hero section for displaying either a video or image with overlay content.
 * 
 * Features:
 * 1. Supports dynamic media types: video or image.
 * 2. Smooth transition and scaling when the section enters the viewport.
 * 3. Overlay content includes a title and interactive buttons.
 * 4. Uses IntersectionObserver to trigger animations only when visible.
 * 
 * Props:
 * - mediaType: "video" | "image" (default: "video") — determines media type
 * - mediaSrc: string — URL or path to the video/image
 * - title: string — optional overlay title text
 * - btnName: string — primary button text
 * - btnNameSecond: string — secondary button text (optional)
 * - trailerLink: string — link to trailer or related page
 */
const HeroMedia = ({ mediaType = "video", mediaSrc, title, btnName, btnNameSecond, trailerLink }) => {
  const sectionRef = useRef(null); // Reference to the section element for IntersectionObserver
  const [active, setActive] = useState(false); // Tracks whether the section is in view for animation

  // IntersectionObserver to detect when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting), // Set active state based on visibility
      { threshold: 0.7 } // Trigger when 70% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[90vh] z-10 bg-black flex items-center justify-center relative"
    >
      {/* ================= MEDIA CONTAINER ================= */}
      <div
        className={`
          aspect-square h-[70%] 
          transition-all duration-700 ease-out
          ${active ? "w-[90%]" : "w-[50%]"} 
          relative
        `}
      >
        {/* Render video or image based on mediaType */}
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <img
            src={mediaSrc}
            alt="Hero Media"
            className="w-full h-full object-cover rounded-xl"
          />
        )}

        {/* ================= OVERLAY CONTENT ================= */}
        <div className="absolute space-y-5 top-3/7 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
          {/* Optional title overlay */}
          {title && (
            <p className="md:indent-30 font-semibold">
              <span className="bg-white/50 md:bg-white text-sm px-1 md:text-base p-1 md:py-2 text-black tracking-widest">
                {title}
              </span>
            </p>
          )}

          {/* Trailer button(s) */}
          <TrailerButton
            btnName={btnName}
            btnNameSecond={btnNameSecond}
            trailerLink={trailerLink}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMedia;
