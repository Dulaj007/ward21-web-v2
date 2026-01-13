// src/components/legal/DMCAInfo.jsx
import React from "react";

/**
 * DMCAInfo Component
 * ------------------
 * Displays the Digital Millennium Copyright Act (DMCA) policy for the game and website.
 * 
 * Purpose:
 * - Inform users about the use of game assets in WARD 21.
 * - Provide guidelines on reporting copyright infringement.
 * - Explain the procedure for submitting a DMCA takedown notice.
 * - Outline the process of handling and processing these notices.
 * 
 * Styling:
 * - Full width section with white text on black background (inherited from parent or global styles)
 * - Uses TailwindCSS for spacing, typography, and responsive layout.
 */
const DMCAInfo = () => {
  return (
    <section className="w-full mb-10 text-white">
      {/* Container to center content and apply max width */}
      <div className="max-w-4xl mx-auto px-6 space-y-6">

        {/* ===================== Section Title ===================== */}
        <h1 className="text-3xl uppercase tracking-widest text-center font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          DMCA Policy
        </h1>

        {/* ===================== Use of Game Assets ===================== */}
        <div>
          <h2 className="text-xl tracking-widest font-semibold mb-2">
            Use of Game Assets
          </h2>
          <p className="text-sm tracking-widest leading-relaxed text-white/80">
            All game assets utilized in <strong>WARD 21</strong>, including images,
            3D models, audio files, and other related content, are used under licenses
            that permit free use for non-commercial purposes without modification.
            Assets are credited appropriately within the game and on our website.
          </p>
        </div>

        {/* ===================== Reporting Copyright Infringement ===================== */}
        <div>
          <h2 className="text-xl tracking-widest font-semibold mb-2">
            Reporting Copyright Infringement
          </h2>
          <p className="text-sm tracking-widest leading-relaxed text-white/80">
            If you believe any content on this website or within <strong>WARD 21</strong>
            infringes your copyright, please notify us promptly. Upon receiving a valid
            notification, we will investigate and take appropriate action.
          </p>
        </div>

        {/* ===================== Submission of DMCA Takedown Notice ===================== */}
        <div>
          <h2 className="text-xl tracking-widest font-semibold mb-2">
            Submission of DMCA Takedown Notice
          </h2>
          <p className="text-sm tracking-widest text-white/80 mb-2">
            Please include the following information:
          </p>

          {/* List of required information for a valid DMCA notice */}
          <ul className="list-decimal list-inside text-sm tracking-widest space-y-2 text-white/80">
            <li>Description of the copyrighted work</li>
            <li>Description of the infringing material and its location</li>
            <li>Your contact information (address, phone, email)</li>
            <li>Good faith statement</li>
            <li>Accuracy and authority statement</li>
            <li>Physical or electronic signature</li>
          </ul>
        </div>

        {/* ===================== Processing Your Notice ===================== */}
        <div>
          <h2 className="text-xl tracking-widest font-semibold mb-2">
            Processing Your Notice
          </h2>

          {/* Step-by-step process for handling DMCA notices */}
          <ul className="list-disc list-inside text-sm tracking-widest space-y-2 text-white/80">
            <li>We review the notice for completeness</li>
            <li>We may contact you for verification or evidence</li>
            <li>Confirmed infringements are removed promptly</li>
            <li>The uploader will be notified</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default DMCAInfo;
