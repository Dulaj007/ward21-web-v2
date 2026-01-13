import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ---------------- PAGE IMPORTS ----------------
import Home from "./pages/home";             // Main landing page
import News from "./pages/news";             // News page
import Credits from "./pages/credits";       // Credits page
import Dmca from "./pages/dmca";             // DMCA page
import ReportPage from "./pages/report";     // Bug/Report submission page
import Tos from "./pages/tos";               // Terms of Service page
import NotFound from "./pages/NotFound";

// ---------------- COMPONENT IMPORTS ----------------
import AgeGate from "./components/front/AgeGate";     // Age verification modal
import LangSwitch from "./components/partials/LangSwitch"; // Language switcher component

/**
 * App Component
 * -------------
 * Main application component that handles:
 * 1. Age verification before showing the main app content.
 * 2. Language selection and persistence via localStorage.
 * 3. Routing to all main pages using React Router.
 */
const App = () => {
  // ---------------- STATE ----------------
  const [ageVerified, setAgeVerified] = useState(false); // Tracks if age gate has been passed
  const [language, setLanguage] = useState("english");   // Tracks current language selection

  // ---------------- EFFECT: Load from localStorage ----------------
  useEffect(() => {
    const verified = localStorage.getItem("ageVerified") === "true";
    const lang = localStorage.getItem("language") || "english";
    setAgeVerified(verified);
    setLanguage(lang);
  }, []);

  // ---------------- AGE VERIFICATION ----------------
  if (!ageVerified) {
    // Show AgeGate first before allowing access to main content
    return (
      <div>
        {/* Language switcher for AgeGate */}
        <LangSwitch language={language} setLanguage={setLanguage} />

        {/* Age verification modal */}
        <AgeGate
          onSetLanguage={setLanguage}
          onVerify={() => setAgeVerified(true)}
        />
      </div>
    );
  }

  // ---------------- MAIN APP ROUTES ----------------
  return (
    <Router>
      {/* Global language switcher */}
      <LangSwitch language={language} setLanguage={setLanguage} />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/news" element={<News language={language} />} />
        <Route path="/credits" element={<Credits language={language} />} />
        <Route path="/dmca" element={<Dmca language={language} />} />
        <Route path="/report_bugs" element={<ReportPage language={language} />} />
        <Route path="/terms" element={<Tos language={language} />} />

         {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
