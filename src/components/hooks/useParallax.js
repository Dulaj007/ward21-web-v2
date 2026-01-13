import { useEffect } from "react";

/**
 * useParallax Hook
 * ----------------
 * Adds a vertical parallax scrolling effect to one or multiple DOM elements.
 *
 * Parameters:
 *  - refs: Array of React refs pointing to DOM elements to apply parallax on.
 *  - factor: Multiplier for scroll offset to control parallax intensity (default 0.05).
 *  - clamp: Maximum offset (in pixels) to limit element movement (default 30).
 *
 * Features:
 *  - Listens to window scroll events.
 *  - Calculates each element's vertical offset based on its position in viewport.
 *  - Smoothly transforms elements along Y-axis with optional scaling.
 *  - Automatically cleans up event listeners on unmount.
 *
 * Usage:
 *  const ref1 = useRef(null);
 *  const ref2 = useRef(null);
 *  useParallax([ref1, ref2], 0.05, 30);
 */
const useParallax = (refs = [], factor = 0.05, clamp = 30) => {
  useEffect(() => {
    if (!refs.length) return; // Exit early if no refs provided

    /* -------------------- SCROLL HANDLER -------------------- */
    const handleScroll = () => {
      refs.forEach((ref) => {
        if (!ref.current) return; // Skip if ref is not attached

        // Get element's position relative to viewport
        const rect = ref.current.getBoundingClientRect();

        // Calculate vertical offset with factor, clamped to [-clamp, clamp]
        const offset = Math.min(Math.max(rect.top * -factor, -clamp), clamp);

        // Apply parallax transform with optional scaling
        ref.current.style.transform = `translateY(${offset}px) scale(1.05)`;
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs, factor, clamp]);
};

export default useParallax;
