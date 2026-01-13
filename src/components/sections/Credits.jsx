// src/components/home/Credits.jsx
import CreditsRoll from "../ui/CreditsRoll";

/**
 * Credits Data Array
 * ------------------
 * Contains the list of all contributors for the game, including:
 * - Role: The position or contribution in the project
 * - Name: The person or tool responsible for that role
 * 
 * Notes:
 * - Multiple roles are handled by the same contributor.
 * - Includes both human contributors and AI/tools used in production.
 */
const creditsData = [
  { role: "Director & Story Writer", name: "Yasitha Dulaj" },
  { role: "Lead Game Designer & Lead Developer", name: "Yasitha Dulaj" },
  { role: "Concept Artist", name: "Yasitha Dulaj" },
  { role: "Game Designer", name: "Yasitha Dulaj" },
  { role: "UI Designer", name: "Yasitha Dulaj" },
  { role: "Motion Animator", name: "Yasitha Dulaj" },
  { role: "Animation Library", name: "Mixamo" },
  { role: "Game Programmer", name: "Yasitha Dulaj" },
  { role: "Tester", name: "Yasitha Dulaj" },
  { role: "Video Editor", name: "Yasitha Dulaj" },
  { role: "Sound Designer & Composer", name: "Yasitha Dulaj" },
  { role: "Voice Actor", name: "play.ht" },
  { role: "Music", name: "Suno AI" },
  { role: "Logo Designer", name: "Yasitha Dulaj" },
];

/**
 * Credits Component
 * -----------------
 * Renders a full-page credits section for the game.
 * 
 * Features:
 * 1. Full viewport height with black background to emphasize the credits.
 * 2. Section title centered at the top with uppercase styling and tracking.
 * 3. Uses `CreditsRoll` component to scroll the credits data vertically.
 * 4. Responsive container with max width to maintain design consistency.
 */
const Credits = () => {
  return (
    <section className="h-screen bg-black py-30 overflow-hidden">
      {/* Container to center content and apply max width */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="relative z-30 text-center uppercase text-white text-4xl font-semibold tracking-widest mb-10">
          Credits
        </h2>

        {/* CreditsRoll Component */}
        {/*
          Props:
          - credits: Array of objects containing role and name
          - Handles vertical scrolling animation for all credits
        */}
        <CreditsRoll credits={creditsData} />
      </div>
    </section>
  );
};

export default Credits;
