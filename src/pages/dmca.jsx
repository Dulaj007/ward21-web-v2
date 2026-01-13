import React from "react";

// ---------------- COMPONENT IMPORTS ----------------
import Nav from "../components/partials/nav";       // Navigation bar with language support
import Footer from "../components/partials/footer"; // Footer section
import Report from "../components/sections/report"; // DMCA report submission form

/**
 * DMCA Page Component
 * -------------------
 * Renders the DMCA Takedown Notice page for the WARD21 website/game.
 * Features included:
 * 1. Navigation bar with language support.
 * 2. DMCA report submission form for users to submit takedown notices.
 * 3. Horizontal separator for visual separation.
 * 4. Footer with links and contact information.
 *
 * Props:
 * - language: string representing the current language selection.
 */
const DMCA = ({ language }) => {
  return (
    <>
      {/* Navigation bar at the top */}
      <Nav language={language} />

      {/* Main page container with z-index layering */}
      <div className="z-10 relative bg-black">
        
        {/* DMCA Report Submission Section */}
        <Report
          title="Submit DMCA Takedown Notice"
          reportType="dmcaReports"
        />

        {/* Decorative horizontal separator */}
        <hr className="mx-[5%] text-white/50" />
      </div>

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default DMCA;
