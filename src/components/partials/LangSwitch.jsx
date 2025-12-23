import React from "react";

// LangSwitch component handles the language toggle between English and Sinhala
// Props:
// - language: current selected language (string: "english" or "sinhala")
// - setLanguage: function to update the selected language in parent state
const LangSwitch = ({ language, setLanguage }) => {
  
  // switchTo function updates the selected language both in state and localStorage
  // This ensures language preference persists across page reloads
  const switchTo = (lang) => {
    setLanguage(lang); // Update state in parent component
    localStorage.setItem("language", lang); // Persist selection in local storage
  };

  return (
    // Wrapper div for the language switch UI
    // Positioned fixed at the top-left corner with styling for visibility and blur effect
    <div className="fixed top-4 left-3 z-500 px-2 py-[3px] flex items-center gap-1 text-sm md:text-base tracking-widest drop-shadow-[0_0_8px_rgba(0,0,0,1)]  backdrop-blur-sm rounded-2xl border-white/0">

      {/* English language button */}
      {/* Highlights when selected and slightly faded when not */}
      <button
        onClick={() => switchTo("english")}
        className={`transition-opacity ${
          language === "english"
            ? "text-white opacity-100"
            : "text-white/50 hover:opacity-100"
        }`}
      >
        En
      </button>

      {/* Separator between language options */}
      <span className="text-white/70">/</span>

      {/* Sinhala language button */}
      {/* Highlights when selected and slightly faded when not */}
      <button
        onClick={() => switchTo("sinhala")}
        className={`transition-opacity ${
          language === "sinhala"
            ? "text-white opacity-100"
            : "text-white/50 hover:opacity-100"
        }`}
      >
        සිං
      </button>
    </div>
  );
};

export default LangSwitch; 
