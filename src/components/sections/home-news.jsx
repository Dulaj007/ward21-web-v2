// src/components/home/HomeNews.jsx
import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/img/gameplay/im29.png";


import HeroMedia from "../ui/blogBox";

import english from "../../data/english/blog.json";
import sinhala from "../../data/sinhala/blog.json";

/**
 * HomeNews Component
 * ------------------
 * Displays news/blog items on the homepage with accompanying media (images/videos).
 * 
 * Features:
 * 1. Supports multi-language content (English/Sinhala) based on `language` prop.
 * 2. Dynamically renders news items using data from JSON files.
 * 3. Uses `HeroMedia` component for media display with titles, descriptions, and buttons.
 * 4. Maintains consistent design with black background and text styling.
 */
const HomeNews = ({ language }) => {
  // ================= LANGUAGE DATA =================
  // Select data based on language prop
  const data = language === "sinhala" ? sinhala : english;
  const news = data.news; // Array of news/blog items

  // ================= MEDIA IMAGES =================
  // Predefined images mapped to news items
  const images = [ img1];

  return (
    <section className="relative bg-black ">

      {/* ================= NEWS ITEMS ================= */}
      {news.map((item, index) => (
        <div key={index}>

          {/* Optional Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold 
            drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-white text-center uppercase tracking-widest"
          >
            {item.title}
          </h2>

          {/* HeroMedia Component */}
          {/*
            Props:
            - mediaType: Type of media to display ("image" or "video")
            - mediaSrc: Source path of media
            - title: Title of the news/blog item
            - description: Short description or summary
            - btnName: Primary button label
            - btnNameSecond: Secondary button label (optional, e.g., "Play")
            - trailerLink: Optional link for trailer or external media
          */}
          <HeroMedia
            mediaType="image"
            mediaSrc={images[index]}
            title={item.description}
            description={item.description}
            btnName={item.btn}
            btnNameSecond="Play"
            trailerLink={item.link}
          />
        </div>
      ))}
    </section>
  );
};

export default HomeNews;
