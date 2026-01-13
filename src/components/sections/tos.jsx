// src/components/legal/TOS.jsx
import React from "react";

/**
 * TOS Component
 * ----------------
 * This component renders the Terms & Conditions (TOS) for the "Ward 21" website and game.
 * It provides detailed rules and guidelines for users accessing the website and downloading the game.
 *
 * Features:
 * 1. Clearly structured sections numbered 1-10 for easy reading.
 * 2. Highlights user responsibilities, limitations, and intellectual property rights.
 * 3. Specifies privacy practices for both the website and the game.
 * 4. Uses semantic HTML for accessibility and SEO (headings, paragraphs, lists).
 * 5. Tailwind CSS styling ensures readability and responsive layout.
 */
const TOS = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-8 font-montserrat">

        {/* ==================== Main Title ==================== */}
        <h1 className="text-3xl md:text-4xl uppercase tracking-widest font-semibold text-center">
          Terms & Conditions
        </h1>

        {/* ==================== 1. Introduction ==================== */}
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to the official website for <strong>“Ward 21”</strong> (the
          "Website"). This platform is dedicated solely to promoting "Ward 21," a
          free-to-download and free-to-play indie first-person shooter horror
          game developed using the Unity game engine.
        </p>

        {/* ==================== 2. Acceptance of Terms ==================== */}
        <h2 className="text-2xl font-semibold">2. Acceptance of Terms</h2>
        <p>
          By accessing or using this Website, you confirm that you have read,
          understood, and agree to be bound by these Terms and Conditions. If you
          do not agree, please discontinue use immediately.
        </p>

        {/* ==================== 3. Website Content Disclaimer ==================== */}
        <h2 className="text-2xl font-semibold">3. Website Content Disclaimer</h2>
        <p>
          All images, videos, audio files, and related content are derived from
          "Ward 21." Unauthorized sale, distribution, or commercial exploitation
          without written permission is strictly prohibited.
        </p>

        {/* ==================== 4. Downloading and Use of Game Setup ==================== */}
        <h2 className="text-2xl font-semibold">
          4. Downloading and Use of Game Setup
        </h2>
        <p className="font-semibold">Game Download and Usage Policy</p>
        <p>By downloading "Ward 21" from this Website, you agree to:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Not modify, rebrand, or alter game files</li>
          <li>Not sell or commercially distribute the game</li>
        </ul>

        {/* ==================== 5. "Ward 21" Game Terms and Services ==================== */}
        <h2 className="text-2xl font-semibold">
          5. "Ward 21" Game Terms and Services
        </h2>
        <p>
          "Ward 21" is a completely free indie FPS horror game. No user data is
          collected. All progress is stored locally on your device.
        </p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Game data is saved locally</li>
          <li>No file modification or decompilation</li>
          <li>No resale or redistribution</li>
        </ul>

        {/* ==================== 6. Intellectual Property Rights ==================== */}
        <h2 className="text-2xl font-semibold">6. Intellectual Property Rights</h2>
        <p className="font-semibold">Game Functionality</p>
        <p>
          All core mechanics and code are the exclusive property of the "Ward 21"
          development team.
        </p>
        <p className="font-semibold">Game Assets</p>
        <p>
          Assets used in "Ward 21" are licensed for non-commercial use. Use
          outside the game requires permission from the original creators. A
          full credit list is available on the Credits page.
        </p>

        {/* ==================== 7. Limitation of Liability ==================== */}
        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>The game is provided “as is”</li>
          <li>No guarantee of error-free operation</li>
          <li>No liability for damages or data loss</li>
        </ul>

        {/* ==================== 8. Privacy Policy ==================== */}
        <h2 className="text-2xl font-semibold">8. Privacy Policy</h2>
        <p className="font-semibold">Website Privacy</p>
        <p>
          We collect names and emails only for comments, bug reports, and
          download tracking. This data is never shared with third parties.
        </p>
        <p className="font-semibold">Game Privacy</p>
        <p>
          "Ward 21" collects no personal data. All game data remains on your
          device.
        </p>

        {/* ==================== 9. Changes to Terms ==================== */}
        <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
        <p>
          These Terms may be updated at any time. Continued use of the Website or
          game implies acceptance of the updated terms.
        </p>

        {/* ==================== 10. Contact Information ==================== */}
        <h2 className="text-2xl font-semibold">10. Contact Information</h2>
        <p>
          For questions regarding these Terms:
          <br />
          <strong>Email:</strong> agydulaj@gmail.com
        </p>

      </div>
    </section>
  );
};

export default TOS;
