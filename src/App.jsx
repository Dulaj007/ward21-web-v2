import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import AgeGate from "./components/front/AgeGate";
import LangSwitch from "./components/partials/LangSwitch";

const App = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified") === "true";
    const lang = localStorage.getItem("language") || "english";
    setAgeVerified(verified);
    setLanguage(lang);
  }, []);

  return (
    <div>
      <LangSwitch language={language} setLanguage={setLanguage} />
      {!ageVerified ? (
        <AgeGate onSetLanguage={setLanguage} onVerify={() => setAgeVerified(true)} />
      ) : (
        <Home language={language} />
      )}
    </div>
  );
};

export default App;
