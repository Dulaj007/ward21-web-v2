import english from "../../data/english/about.json";
import sinhala from "../../data/sinhala/about.json";
import React, { useState } from "react"; 
import { Download } from "lucide-react";
import DownloadModal from "../ui/DownloadModal"; 

/**
 * AboutHero Component
 * ------------------
 * A responsive section component that displays detailed information 
 * about the game. Supports multi-language content (English/Sinhala), 
 * system requirements, general info, and a download button with a modal.
 * 
 * Props:
 *  - language: string ("english" | "sinhala") to select the appropriate language JSON.
 * 
 * Features:
 * 1. Multi-language support.
 * 2. Glitch-styled download button effect.
 * 3. Detailed game info: release, update, genre.
 * 4. System requirements: minimum and recommended.
 * 5. Download modal handling.
 */

const AboutHero = ({ language }) => {
  // Select language-specific data
  const data = language === "sinhala" ? sinhala : english;
  const about = data.about;

  // Number of glitch layers for download button animation
  const stacks = 3;

  // State to manage the visibility of the download modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handler to open the modal
  const handleOpen = () => setIsModalOpen(true);
  // Handler to close the modal
  const handleClose = () => setIsModalOpen(false);

  return (
    <section className="relative h-auto pt-5 pb-10 w-full overflow-hidden items-center justify-center tracking-widest bg-black">
      
      {/* -------------------- INTRODUCTION BLOCK -------------------- */}
      <div className="relative z-10 max-w-4xl space-y-6 px-5 text-white leading-relaxed [word-spacing:0.3em] mx-auto text-sm md:text-base">
        
        {/* Paragraph with game name and intro */}
        <p className="indent-30">
          {/* Part 1 of the introduction */}
          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] pl-3">
            {about.intro_part1}
          </span>

          {/* Game name highlighted */}
          <span className="theme-color font-semibold drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] px-2">
            {about.game_name}
          </span>

          {/* Part 2 of the introduction */}
          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] px-2">
            {about.intro_part2}
          </span>

          {/* Country, if exists */}
          {about.country && (
            <span className="theme-color font-semibold drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] px-2">
              {about.country}
            </span>
          )}

          {/* Part 3 of the introduction */}
          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] px-2">
            {about.intro_part3}
          </span>
        </p>

        {/* Additional paragraph */}
        <p className="leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          {about.paragraph2}
        </p>
      </div>

      {/* -------------------- GENERAL INFO BLOCK -------------------- */}
      <div className="text-center">
        <hr className="my-15 mx-[5%] text-white/50" />

        <div className="max-w-6xl mx-10 flex flex-col md:flex-row gap-20 text-white text-base tracking-widest uppercase">
          
          {/* Left label column */}
          <div className="flex-1 theme-color font-semibold tracking-[3px] drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] text-right">
            General Info
          </div>

          {/* Right info column */}
          <div className="flex-1">
            <div className="flex flex-col text-left">

              {/* Release info */}
              <span className="text-white/60 text-sm">Release </span>
              <div className="flex flex-row gap-2 mt-1">
                <span className="text-white normal-case drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> FEB 11, 2025 | </span>
                <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] normal-case">0.01v</span> 
              </div>

              {/* Last update info */}
              <span className="text-white/60 text-sm mt-10">Last Update</span>
              <div className="flex flex-row gap-2 mt-1">
                <span className="text-white normal-case drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> JUN 11, 2025 | </span>
                <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] normal-case">0.04v</span> 
              </div>
            </div>
          </div>

          {/* Genre info */}
          <div className="flex flex-col text-left">
            <span className="text-white/60 text-sm">Genre </span>
            <div className="flex flex-row gap-2 mt-1">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Survival Horror | </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] normal-case">Indie</span> 
            </div>
          </div>
        </div>
        <hr className="my-15 mx-[5%] text-white/50" />

        {/* -------------------- SYSTEM REQUIREMENTS BLOCK -------------------- */}
        <div className="max-w-7xl mx-10 flex flex-col md:flex-row gap-20 text-white text-base tracking-widest uppercase">
          
          {/* Left label column */}
          <div className="flex-1 theme-color font-semibold tracking-[3px] drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] text-right">
            system requirements
          </div>

          {/* Minimum requirements */}
          <div className="flex-1 flex-col text-left space-y-2 text-lg">
            <span className="text-white/60 text-sm">Minimum </span>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> RAM  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">4 GB</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Size  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">2 GB</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Cpu  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">Intel Core i3</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Gpu  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">NVIDIA Geforce GTX 470</span> 
            </div>
          </div>

          {/* Recommended requirements */}
          <div className="flex-1 flex-col text-left space-y-2 text-lg">
            <span className="text-white/60 text-sm">Recommended </span>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> RAM  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">8 GB</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Size  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">4 GB</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Cpu  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">Intel core I5</span> 
            </div>
            <div className="flex flex-row gap-2 mt-1 ml-5">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"> Gpu  </span>
              <span className="font-semibold theme-color drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] ">NVIDIA Geforce GTX 780</span> 
            </div>
          </div>
        </div>
        <hr className="my-15 mx-[5%] text-white/50" />
      </div>

      {/* -------------------- DOWNLOAD BUTTON -------------------- */}
      <button
        onClick={handleOpen}
        className="items-center justify-center flex duration-500 transion border-1 border-white/50
        py-2 px-5 rounded-4xl tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer 
        shadow-lg shadow-black/50 hover:shadow-black/30 hover:bg-white/90 hover:border-white gap-2 mx-auto flex-row hover:scale-97
        text-white hover:text-black"
      >
        <Download size={25} />
        <h2 className=" text-lg py-1 uppercase tracking-widest stack-glitch">
          {[...Array(stacks)].map((_, i) => (
            <span key={i} style={{ "--index": i, "--stacks": stacks }}>
              Free Download For Windows Pc
            </span>
          ))}
        </h2>
      </button>

      {/* -------------------- DOWNLOAD MODAL -------------------- */}
      <DownloadModal isOpen={isModalOpen} onClose={handleClose} />
    </section>
  );
};

export default AboutHero;
