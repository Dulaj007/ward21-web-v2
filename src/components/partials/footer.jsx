import wardLogo from "../../assets/img/ward21-logo2.png";
import { FaInstagram, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

/* -----------------------------------------------------------
   Footer Component
   -----------------------------------------------------------
   Renders the website footer for WARD21 game.

   Features:
     - Logo and tagline section
     - Quick navigation links to game sections
     - Legal and support links (DMCA, Terms, Bug Reporting)
     - Social/contact links with external icons
     - Copyright notice

   Structure:
     1. Logo & Game Info
     2. Game Section Links
     3. Legal / Support Links
     4. Contact / Social Icons
     5. Footer bottom copyright
----------------------------------------------------------- */
const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-5 h-auto bg-black text-white">
      <div className="h-full py-10 max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* ---------------- GRID: 4 MAIN SECTIONS ---------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm tracking-widest">
          
          {/* 1️⃣ LOGO SECTION */}
          <div>
            {/* Game logo */}
            <img src={wardLogo} alt="WARD21 Logo" className="w-36" />
            {/* Tagline / description */}
            <p className="text-white/60 leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Sri Lanka’s first indie horror game.
            </p>
          </div>

          {/* 2️⃣ GAME INFORMATION LINKS */}
          <div>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link to="/" className="hover:underline transition duration-300">Story</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition duration-300">Requirements</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition duration-300">Gameplay</Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ LEGAL & SUPPORT LINKS */}
          <div>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link to="/dmca" className="hover:underline transition duration-300">DMCA</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline transition duration-300">Terms & Service</Link>
              </li>
              <li>
                <Link to="/report_bugs" className="hover:underline transition duration-300">Report Bugs</Link>
              </li>
            </ul>
          </div>

          {/* 4️⃣ CONTACT / SOCIAL ICONS */}
          <div>
            {/* Section title */}
            <h4 className="theme-color mb-4">CONTACT US</h4>
            {/* Social icons row */}
            <div className="flex items-center gap-4 text-white/60 text-lg">
              <a
                href="https://www.instagram.com/itsdulaj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:underline hover:text-white transition" />
              </a>
              <a
                href="https://discord.gg/GddycnXKb3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="hover:underline hover:text-white transition" />
              </a>
              <a
                href="https://github.com/Dulaj007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:underline hover:text-white transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/yasitha-dulaj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:underline hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- COPYRIGHT SECTION ---------------- */}
        <div className="mt-20 pt-6 border-t border-white/10 text-center text-xs text-white/40 tracking-widest">
          <span className="text-xl">©</span> 2025 WARD21. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
