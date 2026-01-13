import { useEffect, useRef, useState } from "react";

/* ============================================================
   📰 NewsCard Component
   ============================================================
   Renders a single news or blog card with:
   - Title, image, date, and description.
   - Scroll-triggered reveal animation.
   - Subtle parallax/3D depth effect on image.
   - Responsive grid layout (1-column on mobile, 3-column on desktop)
============================================================ */
const NewsCard = ({ title, image, date, description }) => {
  /* ==========================================================
     🔹 Refs
     ==========================================================
     sectionRef: Reference to the whole card section for 
     scroll-triggered reveal.
     imageRef: Reference to the image for applying parallax
     movement on scroll.
  ========================================================== */
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  /* ==========================================================
     🔹 State
     ==========================================================
     show: Tracks if the card is visible on the viewport.
  ========================================================== */
  const [show, setShow] = useState(false);

  /* ==========================================================
     👀 Reveal on Scroll
     ==========================================================
     Uses IntersectionObserver to detect when the card enters
     the viewport and triggers fade-in/translate animations.
  ========================================================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.4 } // Trigger when 40% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect(); // Clean up observer
  }, []);

  /* ==========================================================
     🌀 3D Depth / Parallax Movement
     ==========================================================
     Adjusts image Y-position slightly as user scrolls for
     a subtle parallax effect. Limits offset to [-25px, 25px].
  ========================================================== */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const offset = Math.min(Math.max(rect.top * -0.06, -25), 25);

      imageRef.current.style.transform = `
        translateY(${offset}px)
        scale(1)
      `;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    /* ==========================================================
       🌐 Grid Container
       ==========================================================
       Responsive layout:
       - 1 column for small screens
       - 3 columns for medium+ screens
       Gap between columns and tracking applied
    ========================================================== */
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start tracking-widest"
    >
      
      {/* ==========================================================
         📌 LEFT COLUMN — Title & Date
         ==========================================================
         - Right-aligned text
         - Vertical alignment to bottom
         - Subtle border separator
      ========================================================== */}
      <div className="md:col-span-1 flex flex-col justify-end text-right p-5 border-r-2 border-white/70">
        <h2 className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-3xl md:text-4xl font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-sm text-white/50">
          {date}
        </p>
      </div>

      {/* ==========================================================
         📌 RIGHT COLUMN — Image & Description
         ========================================================== */}
      <div className="md:col-span-2 text-left">
        
        {/* ======================================================
           🖼 IMAGE with Parallax
           ======================================================
           - Absolute positioning inside relative container
           - Scale and translate transitions
           - Visibility animation triggered by scroll
        ====================================================== */}
        <div className="relative w-full h-[420px] overflow-hidden">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-1000 ease-out scale-110
              ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
            `}
          />

          {/* Optional cinematic overlay can be added here */}
        </div>

        {/* ======================================================
           📝 DESCRIPTION TEXT
           ======================================================
           - Max width for readability
           - Leading and text color for cinematic effect
        ====================================================== */}
        <p className="mt-4 text-base text-white/80 leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
