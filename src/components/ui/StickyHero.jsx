/* -----------------------------------------------------------
   StickyHero Component
   -----------------------------------------------------------
   A full-width sticky hero section used at the top of a page.
   Features:
     - Sticky positioning: remains visible at the top during scroll
     - Background image with dark overlay
     - Large, customizable title text
   Props:
     - bgImage (string): URL of the background image
     - title (string, optional): Hero title text (default: "WARD 21")
----------------------------------------------------------- */
const StickyHero = ({
  bgImage,
  title = "WARD 21", // Default title if not provided
}) => {
  return (
    <section
      className="sticky top-0 h-[30vh] -z-500 w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`, // Sets hero background
        backgroundSize: "cover",            // Ensures image covers entire section
        backgroundPosition: "center",       // Centers the image
      }}
    >
      {/* -------------------------------------------------------
         Dark overlay to improve text readability
         -------------------------------------------------------
         - Covers entire hero section using absolute positioning
         - Semi-transparent black layer
      ------------------------------------------------------- */}
      <div className="absolute inset-0 bg-black/60" />

      {/* -------------------------------------------------------
         Content container
         -------------------------------------------------------
         - Centers content horizontally
         - Positions content at the bottom of hero section
         - Adds horizontal padding and bottom spacing
      ------------------------------------------------------- */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-16">
        {/* ---------------------------------------------------
           Hero Title Text
           ---------------------------------------------------
           - Large font size (responsive)
           - Bold, wide letter spacing
           - White text for high contrast over overlay
        --------------------------------------------------- */}
        <h1 className="text-7xl md:text-8xl font-bold tracking-widest text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default StickyHero;
