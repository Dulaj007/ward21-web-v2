import React from "react";

// ---------------- COMPONENT IMPORTS ----------------
import StickyHero from "../components/ui/StickyHero";     // Hero banner with sticky top effect
import Nav from "../components/partials/nav";             // Navigation bar with language support
import Footer from "../components/partials/footer";       // Footer section
import Latest from "../components/sections/Latest";       // Latest news / updates section
import DownBtn from "../components/ui/DownBtn";           // Scroll down button UI

// ---------------- ASSETS ----------------
import heroBg from "../assets/img/gameplay/im16.png";    // Background image for StickyHero

/**
 * Home Page (News Section)
 * ------------------------
 * This page displays the "NEWS" section of the WARD21 website.
 * Features included:
 * 1. StickyHero banner with background image and title.
 * 2. Navigation bar with language support.
 * 3. Latest news section showing updates or announcements.
 * 4. Scroll down button for UX navigation.
 * 5. Footer section with links and contact info.
 *
 * Props:
 * - language: string representing the currently selected language.
 */
const News = ({ language }) => {
  return (
    <div>
      <div className="z-10 relative">

        {/* STICKY HERO SECTION */}
        <StickyHero
          bgImage={heroBg}
          title="NEWS"
        />

        {/* NAVIGATION BAR */}
        <Nav language={language} />

        {/* PAGE SEPARATOR */}
        <hr className="mx-[5%] text-white/50" />

        {/* LATEST NEWS SECTION */}
        <Latest language={language} />

        {/* SCROLL DOWN BUTTON */}
        <DownBtn language={language} />

        {/* PAGE SEPARATOR */}
        <hr className="mx-[5%] text-white/50" />
      </div>

      {/* FOOTER SECTION */}
      <Footer language={language} />
    </div>
  );
};

export default News;
