// src/components/home/Latest.jsx
import { useEffect, useState } from "react";
import NewsCard from "../ui/NewsCard";

// ===================== News Images =====================
// Import images that correspond to news items to display in NewsCard
import img1 from "../../assets/img/gameplay/im23.png";
import img2 from "../../assets/img/gameplay/im30.png";
import img3 from "../../assets/img/gameplay/im13.png";
import img4 from "../../assets/img/gameplay/im18.png";
import img5 from "../../assets/img/gameplay/im16.png";
import img6 from "../../assets/img/gameplay/im3.png";
import img7 from "../../assets/img/gameplay/im7.png";

/**
 * Map of image filenames to imported image assets.
 * This allows dynamic linking of news items from JSON data to local images.
 */
const imageMap = {
  "im1.png": img1,
  "im2.png": img2,
  "im3.png": img3,
  "im4.png": img4,
  "im5.png": img5,
  "im6.png": img6,
  "im7.png": img7,
};

/**
 * Latest Component
 * ----------------
 * Displays a list of the latest news items in WARD 21 using the NewsCard component.
 * 
 * Props:
 * - language: string ("english" or "sinhala") to dynamically load the appropriate JSON data.
 * 
 * Key Features:
 * 1. Dynamic Data Loading:
 *    - Uses dynamic import() to fetch JSON data based on the selected language.
 * 2. Sorting:
 *    - News items are sorted by `id` in descending order to show the latest news first.
 * 3. Image Mapping:
 *    - Each news item links to its respective image using `imageMap`.
 * 4. Responsive Layout:
 *    - Uses Tailwind utility classes for spacing and container sizing.
 */
const Latest = ({ language }) => {
  // ===================== State =====================
  // Store news items loaded from JSON
  const [news, setNews] = useState([]);

  // ===================== Load News Data =====================
  useEffect(() => {
    const loadNews = async () => {
      try {
        // Dynamically import JSON file based on the selected language
        const data = await import(`../../data/${language}/news.json`);
        const newsData = data.default || data;

        // Sort news by id DESC (latest first)
        const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
        setNews(sortedNews);
      } catch (err) {
        console.error("Failed to load news:", err);
      }
    };

    loadNews();
  }, [language]); // Re-run whenever the language changes

  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* ===================== Render News Cards ===================== */}
        {news.map((item) => (
          <NewsCard
            key={item.id} // Unique key for React list rendering
            title={item.title} // News title
            image={imageMap[item.image]} // Map JSON image filename to imported asset
            date={item.date} // News date
            description={item.description} // Short description for preview
          />
        ))}
      </div>
    </section>
  );
};

export default Latest;
