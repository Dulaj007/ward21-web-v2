import { useState, useEffect } from "react";

/* -----------------------------------------------------------
   MANUAL IMAGE POSITIONS
   -----------------------------------------------------------
   Defines the layout for each image in the slider:
   - x, y: horizontal and vertical offsets
   - rotate: rotation in degrees
   - scale: size multiplier
   - opacity: visibility (0 = invisible, 1 = fully visible)
   - z: z-index for stacking order
   Each object corresponds to a position in the image carousel.
----------------------------------------------------------- */
const POSITIONS = [
  {
    x: -200,
    y: -100,
    rotate: -20,
    scale: 1.1,
    opacity: 0,
    z: 5,
  },
  {
    x: 0,
    y: 0,
    rotate: 1,
    scale: 1,
    opacity: 1,
    z: 4,
  },
  {
    x: 75,
    y: -50,
    rotate: 3,
    scale: 0.9,
    opacity: 1,
    z: 3,
  },
  {
    x: 150,
    y: -90,
    rotate: 4,
    scale: 0.8,
    opacity: 1,
    z: 2,
  },
];

/* -----------------------------------------------------------
   AnimatedImage Component
   -----------------------------------------------------------
   Renders a single image with smooth transition animations:
   - transform: translate, rotate, scale
   - opacity and z-index
   Props:
     - image: URL of the image
     - position: object containing x, y, rotate, scale, opacity, z
----------------------------------------------------------- */
const AnimatedImage = ({ image, position }) => {
  return (
    <img
      src={image}
      alt=""
      className="
        absolute top-1/2 left-1/2 lg:left-2/3
        object-cover rounded
        transition-all duration-700 ease-in-out
        pointer-events-none
        border-y-3 border-x-7 border-white/70 
        shadow-black/80 shadow-2xl
      "
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg) scale(${position.scale})`,
        opacity: position.opacity,
        zIndex: position.z,
      }}
    />
  );
};

/* -----------------------------------------------------------
   CircularProgress Component
   -----------------------------------------------------------
   Small circular progress indicator used for autoplay buttons.
   Props:
     - progress: number (0–100) representing completion percentage
----------------------------------------------------------- */
const CircularProgress = ({ progress }) => {
  const radius = 15;
  const stroke = 1;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="scale-150">
      {/* Background circle */}
      <circle
        stroke="rgba(239, 255, 255, 0.3)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Foreground progress circle */}
      <circle
        stroke="rgb(239, 68, 68)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.1s linear" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

/* -----------------------------------------------------------
   ShortSlider Component
   -----------------------------------------------------------
   Main image slider component.
   Props:
     - images: array of 3 image URLs
   Features:
     - Autoplay with back-and-forth animation (1 → 2 → 3 → 2 → 1)
     - Animated image positions based on POSITIONS array
     - Circular progress indicators for autoplay
     - Manual image selection buttons
----------------------------------------------------------- */
const ShortSlider = ({ images: propsImages }) => {
  const allImages = propsImages; // Images received via props
  const [progress, setProgress] = useState(0); // Progress for current image

  // Images array for display: [previous, current, next, next+1]
  const [images, setImages] = useState([null, ...allImages]);

  // Autoplay state
  const [currentIndex, setCurrentIndex] = useState(0); // Focused image index
  const [direction, setDirection] = useState(1); // Autoplay direction (1 = forward, -1 = backward)

  /* -----------------------------------------------------------
     focusImage
     -----------------------------------------------------------
     Rearranges images array based on focused image index.
     Sets previous and next images for carousel display.
  ----------------------------------------------------------- */
  const focusImage = (focusIndex) => {
    const focused = allImages[focusIndex];
    const before = allImages.slice(0, focusIndex);
    const after = allImages.slice(focusIndex + 1);

    setImages([before[before.length - 1] || null, focused, after[0] || null, after[1] || null]);
  };

  /* -----------------------------------------------------------
     Autoplay Effect
     -----------------------------------------------------------
     Automatically cycles through images every 3 seconds.
     Changes direction at first or last image for back-and-forth loop.
  ----------------------------------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = prev + direction;

        if (next > allImages.length - 1) {
          setDirection(-1); // reverse direction at end
          next = allImages.length - 2;
        }

        if (next < 0) {
          setDirection(1); // reverse direction at start
          next = 1;
        }

        focusImage(next); // update displayed images
        return next;
      });
    }, 3000); // Autoplay speed

    return () => clearInterval(interval);
  }, [direction, allImages]);

  /* -----------------------------------------------------------
     Progress Bar Effect
     -----------------------------------------------------------
     Animates circular progress indicator over 3 seconds
     Resets whenever currentIndex changes
  ----------------------------------------------------------- */
  useEffect(() => {
    setProgress(0);
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / 3000) * 100, 100);
      setProgress(percent);
    }, 30);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full h-[50vh] md:h-[90vh] bg-transparent overflow-hidden bg-center bg-cover relative">
     
      {/* ---------------------------------------------------------
         Manual Image Selection Buttons
         ---------------------------------------------------------
         - Circular buttons overlayed on top-right
         - Show circular progress indicator
         - Clickable to focus specific image
      --------------------------------------------------------- */}
      <div className="relative top-20 right-10 flex justify-end w-full z-20">
        <div className="py-2 flex gap-4 bg-no-repeat bg-center justify-center bg-cover">
          {allImages.map((_, i) => (
            <div key={i} className="relative w-10 h-10 flex items-center justify-center">
              {/* Circular progress indicator */}
              <CircularProgress progress={currentIndex === i ? progress : 0} />
              {/* Button to focus image */}
              <button
                onClick={() => {
                  setCurrentIndex(i);
                  focusImage(i);
                }}
                className="w-10 h-10 rounded-full bg-black/1 absolute text-white hover:opacity-60 transition z-10"
              >
                {i + 1}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------
         Image Display Area
         ---------------------------------------------------------
         - Absolute container for all images
         - Each image rendered via AnimatedImage component
      --------------------------------------------------------- */}
      <div className="relative w-[90%] h-[90%] max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          {images.map((img, index) =>
            img ? <AnimatedImage key={img} image={img} position={POSITIONS[index]} /> : null
          )}
        </div>
      </div>
    </section>
  );
};

export default ShortSlider;
