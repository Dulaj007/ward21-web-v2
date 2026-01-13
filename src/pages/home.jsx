import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ---------------- COMPONENT IMPORTS ----------------
import Nav from "../components/partials/nav";          // Navigation bar with language support
import Footer from "../components/partials/footer";    // Footer section
import Hero from "../components/sections/home-hero";   // Hero section at top of the page
import About from "../components/sections/home-about"; // About section with game info
import StorySection from "../components/sections/home-story"; // Story section
import AdditionalInfo from "../components/sections/home-about-more"; // Additional game info
import Gameplay from "../components/sections/Gameplay"; // Gameplay section
import HomeFeedback from "../components/sections/Home-feedback"; // Feedback / testimonials
import HomeNews from "../components/sections/home-news"; // Latest news section
import HomeThanks from "../components/sections/home-dev"; // Developer thanks / credits section
import DownBtn from "../components/ui/DownBtn"; // Scroll down button
import WatchTrailer from "../components/sections/watch-trailer";

/**
 * Home Page Component
 * -------------------
 * Main landing page for the WARD21 website/game.
 * Features included:
 * 1. Navigation bar with language support.
 * 2. Hero section at top.
 * 3. About section with basic info.
 * 4. Story section with narrative.
 * 5. Additional game information.
 * 6. Gameplay section describing mechanics.
 * 7. Feedback and news sections.
 * 8. Scroll down button.
 * 9. Developer thanks / credits section.
 * 10. Footer section.
 *
 * Props:
 * - language: string representing the currently selected language.
 */
const Home = ({ language }) => {
  const location = useLocation();

  // Scroll to section if query parameter exists (e.g., /?scrollTo=story)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get("scrollTo");

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="z-10 relative">

        {/* HERO SECTION */}
        <section id="hero">
          <Nav language={language} />
          <Hero language={language} />
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <About language={language} />
        </section>

        {/* STORY SECTION */}
        <section id="story">
          <StorySection language={language} />
        </section>

        {/* ADDITIONAL INFO / GAME DETAILS */}
        <section id="gameplay">
          <AdditionalInfo language={language} />
        </section>

       <section>
          <WatchTrailer language={language} />
        </section>
        {/* GAMEPLAY MECHANICS SECTION */}
        <section>
          <Gameplay />
        </section>

        {/* FEEDBACK AND NEWS SECTIONS */}
        <HomeFeedback language={language} />
        <HomeNews language={language} />

        {/* SCROLL DOWN BUTTON */}
        <DownBtn language={language} />

        {/* DEVELOPER THANKS / CREDITS */}
        <HomeThanks language={language} />

        {/* PAGE SEPARATOR */}
        <hr className="mx-[5%] text-white/50" />
      </div>

      {/* FOOTER SECTION */}
      <Footer language={language} />
    </div>
  );
};

export default Home;
