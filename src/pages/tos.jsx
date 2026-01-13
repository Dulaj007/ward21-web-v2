import React from "react";

// ---------------- COMPONENT IMPORTS ----------------
import Nav from "../components/partials/nav";       // Navigation bar with language support
import Footer from "../components/partials/footer"; // Footer section
import TOS from "../components/sections/tos";      // Terms of Service content component

/**
 * TosPage Component
 * -----------------
 * This page displays the Terms of Service (TOS) content.
 * Features:
 * 1. Top navigation bar with language support.
 * 2. Main TOS content displayed in the middle.
 * 3. Footer section at the bottom.
 *
 * Props:
 * - language: string representing the currently selected language.
 */
const TosPage = ({ language }) => {
  return (
    <div className="min-h-screen flex flex-col z-20 bg-white dark:bg-black">
      
      {/* NAVIGATION BAR */}
      <Nav language={language} />

      {/* MAIN CONTENT SECTION */}
      <main className="flex-grow z-10 relative py-20">
        {/* Terms of Service Component */}
        <TOS />
        
        {/* SECTION SEPARATOR */}
        <hr className="mx-[5%] text-white/50" />
      </main>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default TosPage;
