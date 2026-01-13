import ShortSlider from "../ui/ShortSlider";
import img1 from "../../assets/img/gameplay/im1.png";
import img2 from "../../assets/img/gameplay/im2.png";
import img3 from "../../assets/img/gameplay/im3.png";
import bgImage from "../../assets/img/bg/bgs.png";

import english from "../../data/english/story.json";
import sinhala from "../../data/sinhala/story.json";

/**
 * StorySection Component
 * ----------------------
 * A section component that displays the story of the game.
 * Supports multi-language content (English/Sinhala) and includes:
 * 1. Background image with overlay gradients.
 * 2. A short image slider for game visuals.
 * 3. Story title, paragraphs, and related questions.
 *
 * Props:
 *  - language: string ("english" | "sinhala") to select language-specific JSON content.
 *
 * Features:
 *  - Multi-layer background with gradient overlays for visual depth.
 *  - ShortSlider component integration.
 *  - Story content dynamically loaded from JSON.
 *  - Styled paragraphs and highlighted text segments.
 */
const StorySection = ({ language }) => {
  // Select the appropriate language JSON data
  const data = language === "sinhala" ? sinhala : english;
  const story = data.story;

  return (
    <section
      className="w-full h-auto bg-transparent overflow-hidden bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImage})` }} // Set background image dynamically
    >
      {/* -------------------- BACKGROUND OVERLAYS -------------------- */}
      {/* Bottom-to-top gradient overlay for fading effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />
      {/* Top-to-bottom gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* -------------------- IMAGE SLIDER -------------------- */}
      {/* ShortSlider component displaying gameplay images */}
      <ShortSlider images={[ img2, img3, img1]} />

      {/* -------------------- STORY CONTENT BLOCK -------------------- */}
      <div className="relative bottom-0 xl:left-10 mb-10 -mt-20 z-10">
        <div className="relative max-w-6xl space-y-3 px-5 text-white leading-relaxed [word-spacing:0.3em] text-sm md:text-xl">

          {/* Title of the story section */}
          <h2 className="text-2xl md:text-4xl font-bold theme-color">
            {story.title}
          </h2>

          {/* -------------------- PARAGRAPH 1 -------------------- */}
          {/* Includes highlighted segments: normal text, virus name in theme color */}
          <p className="indent-30 font-semibold">
            <span className="bg-white py-1 text-black">
              {story.paragraph1.part1}
            </span>{" "}
            <span className="theme-color font-semibold bg-black py-1">
              {story.paragraph1.virus}
            </span>{" "}
            <span className="bg-white p-1 text-black">
              {story.paragraph1.part2}
            </span>
          </p>

          {/* -------------------- PARAGRAPH 2 -------------------- */}
          <p className="indent-30 font-semibold">
            <span className="bg-white p-1 text-black">
              {story.paragraph2}
            </span>
          </p>

          {/* -------------------- QUESTIONS LIST -------------------- */}
          {/* Dynamically render questions from JSON */}
          <div className="mt-5 font-semibold space-y-2">
            {story.questions.map((q, i) => (
              <div key={i}>
                <span className="inline-block bg-white p-1 text-black">
                  {q}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
