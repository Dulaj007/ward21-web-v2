// src/components/home/HomeThanks.jsx
import React from "react";
import { FaInstagram, FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

import english from "../../data/english/dev.json";
import sinhala from "../../data/sinhala/dev.json";

/**
 * HomeDev Component
 * -----------------
 * Displays the developer's personal message and social media links.
 *
 * Props:
 *  - language: string ("english" | "sinhala") to select language-specific JSON content.
 *
 * Features:
 *  - Quote-style personal message with highlights for game name and role.
 *  - Supports multi-part paragraphs with highlighted text spans.
 *  - Social media icons with hover effects and links that open in new tabs.
 *
 * Usage:
 *  <HomeDev language="english" />
 */
const HomeDev = ({ language }) => {
  // 🌍 Select language-specific data
  const data = language === "sinhala" ? sinhala : english;
  const dev = data.dev;

  return (
    <section className="w-full relative flex items-center justify-center bg-black text-white px-6 py-20">
      <div className="max-w-4xl text-left space-y-12 tracking-widest">

        {/* -------------------- PERSONAL MESSAGE / QUOTE -------------------- */}
        <blockquote className="text-sm md:text-xl italic leading-relaxed border-l-4 border-white/20 pl-6 md:pl-8">
          {dev.paragraph1}

          <br /><br />

          {/* Paragraph with highlighted text */}
          {dev.paragraph2_part1}{" "}
          <span className="bg-white text-black px-1">
            {dev.paragraph2_highlight}
          </span>{" "}
          {dev.paragraph2_part2}{" "}
          <span className="theme-color italic">{dev.game_name}</span>

          <br /><br />

          {dev.paragraph3}

          <br /><br />

          {/* Developer position and name */}
          <span className="theme-color italic">{dev.position}</span>
          <br />
          <span className="text-white/70 italic">{dev.name}</span>
        </blockquote>

        {/* -------------------- SOCIAL MEDIA ICONS -------------------- */}
        <div className="flex items-center gap-6 pl-6 md:pl-8">

          {/* Instagram */}
          {dev.social.instagram && (
            <a
              href={dev.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/10 rounded-2xl p-3 hover:scale-90 hover:text-purple-600 duration-500 transition"
            >
              <FaInstagram size={30} />
            </a>
          )}

          {/* discord */}
          {dev.social.discord && (
            <a
              href={dev.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/10 rounded-2xl p-3 hover:scale-90 hover:text-blue-400 duration-500 transition"
            >
              <FaDiscord size={30} />
            </a>
          )}

          {/* GitHub */}
          {dev.social.github && (
            <a
              href={dev.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/10 rounded-2xl p-3 hover:scale-90 hover:text-green-500 duration-500 transition"
            >
              <FaGithub size={30} />
            </a>
          )}

          {/* LinkedIn */}
          {dev.social.linkedin && (
            <a
              href={dev.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/10 rounded-2xl p-3 hover:scale-90 hover:text-blue-700 duration-500 transition"
            >
              <FaLinkedinIn size={30} />
            </a>
          )}

        </div>
      </div>
    </section>
  );
};

export default HomeDev;
