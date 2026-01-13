// src/components/ui/DownBtn.jsx
import React, { useState } from "react"; 
import { Download } from "lucide-react"; // Icon for download button
import DownloadModal from "./DownloadModal"; // Modal component that appears on click

/**
 * DownBtn Component
 * -----------------
 * A fixed-position "Free Download" button with a glitch text effect.
 * 
 * Features:
 * 1. Positioned at the bottom-right corner of the screen for easy access.
 * 2. Glitch text animation using multiple layers (stack-glitch effect).
 * 3. Opens a DownloadModal when clicked.
 * 4. Fully responsive and styled for hover effects.
 */
const DownBtn = () => {
  const stacks = 3; // Number of glitch layers for the text effect
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Open the download modal
  const handleOpen = () => setIsModalOpen(true);

  // Close the download modal
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="fixed bottom-6 right-4 z-50">
      {/* ================= DOWNLOAD BUTTON ================= */}
      <button
        onClick={handleOpen}
        className="gradient-button flex-row hover:scale-97 text-white hover:text-[#d10000]"
      >
        {/* Icon on the left */}
        <Download size={25} />

        {/* Glitch-style text */}
        <h2 className="text-lg py-1 uppercase tracking-widest stack-glitch">
          {[...Array(stacks)].map((_, i) => (
            <span 
              key={i} 
              style={{ "--index": i, "--stacks": stacks }} // CSS variables for glitch layers
            >
              Free Download
            </span>
          ))}
        </h2>
      </button>

      {/* ================= DOWNLOAD MODAL ================= */}
      <DownloadModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
};

export default DownBtn;
