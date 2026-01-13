import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

/* -----------------------------------------------------------
   Navbar Component
   -----------------------------------------------------------
   Features:
     - Sticky top navigation bar that hides on scroll down and shows on scroll up
     - Desktop menu with hover animations
     - Mobile hamburger menu with fullscreen overlay
     - Dynamic loading of navigation items based on language
     - Smooth scrolling to sections on the home page
     - External link handling (e.g., developer GitHub)
----------------------------------------------------------- */
const Navbar = ({ language }) => {
  /* ---------------- STATE ---------------- */
  const [navItems, setNavItems] = useState([]);       // Stores navigation items dynamically loaded from JSON
  const [visible, setVisible] = useState(true);      // Determines visibility of navbar on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks previous scroll position
  const [menuOpen, setMenuOpen] = useState(false);   // Mobile menu toggle state

  const navigate = useNavigate();   // React Router navigation
  const location = useLocation();   // Current URL/location

  /* ---------------- LOAD NAV ITEMS ---------------- */
  useEffect(() => {
    const loadNav = async () => {
      try {
        // Dynamically import nav items JSON based on selected language
        const data = await import(`../../data/${language}/nav.json`);
        setNavItems(data.default || data);
      } catch (err) {
        console.error("Failed to load nav data:", err);
      }
    };
    loadNav();
  }, [language]);

  /* ---------------- SCROLL VISIBILITY ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down past 80px
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------------- SECTION MAP ---------------- */
  // Maps navigation IDs to home page section IDs for smooth scrolling
  const sectionMap = {
    home: "hero",
    about: "about",
    story: "story",
    requirements: "about",
    gameplay: "gameplay",
  };

  /* ---------------- HANDLE NAV CLICK ---------------- */
  const handleClick = (item) => {
    setMenuOpen(false); // Close mobile menu on click

    // If the clicked nav item corresponds to a section on the home page
    if (sectionMap[item.id]) {
      if (location.pathname !== "/") {
        // Navigate to home with query param for scrolling
        navigate(`/?scrollTo=${sectionMap[item.id]}`);
      } else {
        // Scroll smoothly to section if already on home
        const el = document.getElementById(sectionMap[item.id]);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Handle other navigation routes or external links
    switch (item.id) {
      case "news":
        navigate("/news");
        break;
      case "credits":
        navigate("/credits");
        break;
      case "dev":
        window.open("https://github.com/Dulaj007", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full 
        transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
    >
      {/* ---------------- NAVBAR CONTAINER ---------------- */}
      <div className="w-full bg-gradient-to-b from-black/80 to-transparent px-4 py-4 md:py-10 flex justify-between md:justify-center items-center relative">
        
        {/* ---------------- DESKTOP MENU ---------------- */}
        <ul className="hidden md:flex gap-8 text-sm md:text-base tracking-widest uppercase text-white">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="
                relative cursor-pointer transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)]
                before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full
                flex items-center group
              "
              onClick={() => handleClick(item)}
            >
              {/* Notification dot for specific menu items */}
              {(item.id === "news" || item.id === "gameplay") && (
                <span className="relative w-4 h-4 mr-1 ml-0">
                  <span className="absolute inset-0 w-3 h-3 bg-[#d10000] rounded-full shadow-inner"></span>
                  <span className="absolute inset-0 w-3 h-3 rounded-full animate-ping bg-[#fd4756]/50"></span>
                </span>
              )}
              {item.label}
            </li>
          ))}
        </ul>

        {/* ---------------- HAMBURGER MENU ICON ---------------- */}
        <div
          className="md:hidden text-white cursor-pointer absolute right-5 top-5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* ---------------- MOBILE FULLSCREEN MENU ---------------- */}
        <div
          className={`
            fixed inset-0 z-40 md:hidden
            bg-black/60 backdrop-blur-md
            flex flex-col items-center justify-center min-h-screen
            transition-all duration-500 ease-in-out
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <ul className="flex flex-col gap-8 text-2xl uppercase text-white text-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer transition-all duration-300 hover:text-red-500"
                onClick={() => handleClick(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
