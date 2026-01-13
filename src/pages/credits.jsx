import React from "react";

// ---------------- COMPONENT IMPORTS ----------------
import Credit from "../components/sections/Credits"; // Credits section content
import Nav from "../components/partials/nav";        // Navigation bar
import DownBtn from "../components/ui/DownBtn";      // Scroll down button
import Footer from "../components/partials/footer";  // Footer component

/**
 * Credits Page Component
 * ----------------------
 * Renders the Credits page for the WARD21 website/game.
 * Features included:
 * 1. Credits section with content passed dynamically based on language.
 * 2. Navigation bar with language support.
 * 3. Scroll-down button for easy navigation within the page.
 * 4. Footer with links and contact information.
 *
 * Props:
 * - language: string representing the current language selection.
 */
const Credits = ({ language }) => {
  return (
    <div>
      {/* Main page container with z-index for layering */}
      <div className="z-10 relative">

        {/* Credits section */}
        <Credit language={language} />

        {/* Navigation bar */}
        <Nav language={language} />

        {/* Scroll down button */}
        <DownBtn language={language} />

        {/* Decorative horizontal separator */}
        <hr className="mx-[5%] text-white/50" />
      </div>

      {/* Footer section */}
      <Footer language={language} />
    </div>
  );
};

export default Credits;
