import { useState, useEffect } from "react";

/**
 * useTypewriter Hook
 * ------------------
 * Simulates a typewriter effect by progressively revealing words of a given text.
 *
 * Parameters:
 *  - text: string to display with typewriter animation (default: "").
 *  - delay: number, delay in milliseconds between typing each word (default: 60).
 *  - trigger: boolean, when true starts the typewriter animation (default: true).
 *
 * Returns:
 *  - typedText: string containing the progressively typed text.
 *
 * Features:
 *  - Automatically resets typed text when `text` or `trigger` changes.
 *  - Cleans up interval on unmount to prevent memory leaks.
 *  - Word-based typing (adds one word at a time).
 *
 * Usage:
 *  const typed = useTypewriter("Hello world", 100, showText);
 */
const useTypewriter = (text = "", delay = 60, trigger = true) => {
  const [typedText, setTypedText] = useState(""); // Holds current typed content

  useEffect(() => {
    if (!trigger) return; // Do nothing if animation is not triggered

    // Reset typed text whenever text or trigger changes
    setTypedText("");

    const words = text.split(" "); // Split text into words
    let index = 0;

    // Interval to progressively append words
    const interval = setInterval(() => {
      setTypedText((prev) => prev + words[index] + " "); // Append next word
      index++;

      // Clear interval when all words are typed
      if (index >= words.length) clearInterval(interval);
    }, delay);

    // Cleanup interval on unmount or dependency change
    return () => clearInterval(interval);
  }, [trigger, text, delay]);

  return typedText;
};

export default useTypewriter;
