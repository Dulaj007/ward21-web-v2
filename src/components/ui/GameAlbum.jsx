import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* ============================================================
   🔧 MANUAL IMAGE POSITIONS
   ============================================================
   Each object defines the position, rotation, scale, opacity,
   and zIndex for a specific image slot in the slider.
   The order is LEFT ➜ MAIN ➜ RIGHT ➜ Far right / hidden.
============================================================ */
const POSITIONS = [
  // 1️⃣ Far left – completely hidden offscreen
  { x: -1600, y: 0, rotate: -6, scale: 0.8, opacity: 1, z: 7 },

  // 2️⃣ Slightly visible (peek from left)
  { x: 900, y: 0, rotate: -2, scale: 1.1, opacity: 1, z: 2 },

  // 3️⃣ MAIN FOCUS (centered, big & clear)
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, z: 5 },

  // 4️⃣ Small image visible on right
  { x: 900, y: 0, rotate: 4, scale: 1, opacity: 1, z: 3 },

  // 5️⃣ Far right – mostly hidden offscreen
  { x: 1400, y: 0, rotate: 6, scale: 0.8, opacity: 0, z: 1 },
];

/* ============================================================
   🎞 AnimatedImage Component
   ============================================================
   A single image in the slider with absolute positioning,
   smooth transitions, borders, shadows, and 3D transforms.
============================================================ */
const AnimatedImage = ({ image, position }) => (
  <img
    src={image}
    alt=""
    className="
      absolute top-1/2 left-1/2
      object-cover rounded
      transition-all duration-700 ease-in-out
      pointer-events-none
      border-y-3 border-x-7 border-white/70
      shadow-black/80 shadow-2xl
    "
    style={{
      transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)
        rotate(${position.rotate}deg) scale(${position.scale})`,
      opacity: position.opacity,
      zIndex: position.z,
    }}
  />
);

/* ============================================================
   🧩 ShortSlider Component
   ============================================================
   A horizontal, multi-image slider with:
   - Manual 3D-style positions for a cinematic effect
   - Smooth transitions
   - Left / Right navigation buttons
   - Dynamic main focus image
============================================================ */
const ShortSlider = ({ images: allImages }) => {
  // -------------------- STATE --------------------
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the currently focused image

  /* ============================================================
     Helper function to get the 5 visible images around the main
     image for mapping with POSITIONS array.
     Returns null for indexes out of bounds.
  ============================================================ */
  const getVisibleImages = () => {
    return [
      allImages[currentIndex - 1] || null, // Left peek
      allImages[currentIndex] || null,     // Main focus
      allImages[currentIndex + 1] || null, // Right small
      allImages[currentIndex + 2] || null, // Far right
      allImages[currentIndex + 3] || null, // Far right hidden
    ];
  };

  return (
    <section className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[120vh] bg-transparent relative z-50">

      {/* ============================================================
         ⬅️➡️ Navigation Buttons
         ============================================================
         Positioned below the slider, centered horizontally.
         Includes hover effects, scaling, and drop-shadow for UX.
      ============================================================ */}
      <div className="md:sticky -mb-10 md:mb-10 top-[90%] z-50">
        <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center z-50 pb-5 sm:p-0">
          <div className="flex gap-2 px-10 md:px-20 bg-white/5 backdrop-blur-md py-2 md:py-3 rounded-full">

            {/* PREVIOUS BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              className="px-5 py-2 rounded-full bg-white/20 text-white hover:scale-110 duration-500
                         hover:bg-white/20 transition flex items-center justify-center hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
            >
              <FaArrowLeft size={20} />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, allImages.length - 1))}
              className="px-5 py-2 rounded-full bg-white/20 text-white hover:scale-110 duration-500
                         hover:bg-white/20 transition flex items-center justify-center hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
            >
              <FaArrowRight size={20} />
            </button>

          </div>
        </div>
      </div>

      {/* ============================================================
         🎨 IMAGE CONTAINER
         ============================================================
         Contains the currently visible images with absolute 
         positioning to enable 3D-style layering and smooth transitions.
      ============================================================ */}
      <div className="h-[100%] overflow-hidden">
        <div className="relative w-[90%] h-[90%] mx-auto">
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            {getVisibleImages().map(
              (img, index) =>
                img && (
                  <AnimatedImage
                    key={img}
                    image={img}
                    position={POSITIONS[index]}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortSlider;
