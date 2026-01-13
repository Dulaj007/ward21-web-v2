import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/* -----------------------------------------------------------
   SmoothScroll Component
   -----------------------------------------------------------
   Wraps children components and enables smooth, inertia-based
   scrolling using the Lenis library.

   Features:
     - Smooth scrolling with configurable duration and easing
     - Uses requestAnimationFrame for high-performance updates
     - Cleans up Lenis instance on unmount to prevent memory leaks

   Props:
     - children: React nodes to be wrapped by smooth scrolling
----------------------------------------------------------- */
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis instance
    const lenis = new Lenis({
      duration: 1.2,           // Duration of scroll animation (seconds)
      smooth: true,             // Enable smooth scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function (easeOutCubic)
    });

    /* -----------------------------------------------------------
       Recursive animation frame function
       -----------------------------------------------------------
       - Passes the current time to Lenis for smooth updates
       - Calls requestAnimationFrame to continue animation loop
    ----------------------------------------------------------- */
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    /* -----------------------------------------------------------
       Cleanup on unmount
       -----------------------------------------------------------
       - Destroy Lenis instance to free resources
       - Prevents memory leaks when component is removed
    ----------------------------------------------------------- */
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures effect runs once on mount

  // Render wrapped children without modifying them
  return children;
};

export default SmoothScroll;
