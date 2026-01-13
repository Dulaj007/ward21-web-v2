// src/components/ui/CreditsRoll.jsx
import { useEffect, useRef } from "react";

/**
 * CreditsRoll Component
 * ---------------------
 * A cinematic-style scrolling credits component, commonly used at the end of a game or movie.
 * 
 * Features:
 * 1. Smooth, slow upward scroll animation mimicking movie-style credits.
 * 2. Includes a thank-you message for contributors and asset sources.
 * 3. Fully responsive and centered horizontally using flex layout.
 * 4. Fade overlay at top and bottom for cinematic effect.
 * 
 * Props:
 * - credits: Array<{ role: string, name: string }> — list of team members and roles
 */
const CreditsRoll = ({ credits }) => {
  const rollRef = useRef(null); // Reference to the rolling credits container

  /* 🎬 Cinematic Upward Scroll Animation */
  useEffect(() => {
    const el = rollRef.current;
    if (!el) return;

    // Animate credits upward with fade-in effect
    el.animate(
      [
        { transform: "translateY(-20%)", opacity: 0 }, // Start slightly above and invisible
        { opacity: 1, offset: 0.1 },                   // Fade in at 10% progress
        { transform: "translateY(-110%)", opacity: 1 }, // Scroll up past the top
      ],
      {
        duration: 60000,  // 60 seconds for slow, cinematic roll
        easing: "linear", // Smooth continuous movement
        fill: "forwards", // Retain final state after animation
      }
    );
  }, []);

  return (
    <div className="relative h-[90vh] sm:h-[70vh] overflow-hidden">

      {/* ================= FLEX CENTER LAYER ================= */}
      <div className="absolute inset-0 flex justify-center">

        {/* ================= ROLLING CREDITS ================= */}
        <div
          ref={rollRef}
          className="absolute top-full px-5 text-center space-y-14"
        >
          {/* Map each credit entry */}
          {credits.map((item, index) => (
            <div key={index} className="space-y-2">
              <p className="text-white/70 text-sm tracking-widest uppercase">
                {item.role} {/* Role in team */}
              </p>
              <p className="text-white text-xl md:text-2xl tracking-widest">
                {item.name} {/* Name of contributor */}
              </p>
            </div>
          ))}

          {/* ================= THANK YOU MESSAGE ================= */}
          <div className="max-w-3xl mx-auto">
            <p className="text-white/70 text-sm sm:text-base leading-relaxed tracking-wide">
              I would like to extend my heartfelt gratitude to{" "}
              <span className="text-white">User1 Productions (YouTube)</span> for
              inspiring and teaching me, enabling this project to come to life.
              A special thanks to{" "}
              <span className="text-white">
                Lukas Bobor, Studio New Punch, and Tensori
              </span>{" "}
              on the Unity Asset Store for providing free 3D models.
              <br /><br />
              Without their generosity and creativity, this project would not
              have been possible. I am deeply grateful to all the other 3D model
              designers whose work I used in this project.
              <br /><br />
              From the bottom of my heart, I thank every 3D designer who
              contributed—even in the smallest way—to this game.
            </p>
          </div>

        </div>
      </div>

      {/* ================= CINEMATIC FADE OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
    </div>
  );
};

export default CreditsRoll;
