import React, { useState, useEffect } from "react";
import heroBg from "../../assets/img/herobg.png";
import logo from "../../assets/img/ward21-logo2.png";
import heroBtn from "../../assets/img/btns/herobtn.png";

// AgeGate component handles the age verification and initial language selection
// Props:
// - onSetLanguage: function to update the app's language in the parent component
// - onVerify: function to notify the parent component that the user has been verified as 18+
const AgeGate = ({ onSetLanguage, onVerify }) => {
  // State to store the user's birth date input
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  
  // State to store the selected language
  const [language, setLanguage] = useState("english");
  
  // State to store error messages if validation fails
  const [error, setError] = useState("");

  // useEffect runs once on component mount
  // Checks if the user has already been age-verified and retrieves saved language
  useEffect(() => {
    const verified = localStorage.getItem("ageVerified"); // Retrieve previous verification
    const lang = localStorage.getItem("language") || "english"; // Retrieve saved language or default

    setLanguage(lang); // Update local state with saved language
    onSetLanguage(lang); // Update parent component with language

    if (verified === "true") {
      onVerify(); // Automatically verify if previously validated
    }
  }, []);

  // Function to handle the confirmation of the user's birth date
  const handleSubmit = () => {
    const { day, month, year } = birthDate;

    // Validate that all fields are entered
    if (!day || !month || !year) {
      setError("Please enter your birth date.");
      return;
    }

    // Calculate user age based on entered date
    const birth = new Date(`${year}-${month}-${day}`);
    const userAge = new Date().getFullYear() - birth.getFullYear();

    // Check if user is 18 or older
    if (userAge >= 18) {
      onSetLanguage(language); // Set the selected language
      onVerify(); // Notify parent component that user is verified
    } else {
      setError("You are not allowed."); // Display error if underage
      setBirthDate({ day: "", month: "", year: "" }); // Reset input fields
    }
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center  px-20 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for darkening and styling the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60  pointer-events-none" />

      <div className="z-10 flex flex-col items-center justify-center text-center text-lg md:text-2xl tracking-widest">
        {/* Logo displayed at the top of the AgeGate */}
        <img src={logo} alt="WARD21" className="w-120 select-none mr-5" />

        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-6 items-center mb-10">
          {/* Language Selection Dropdown */}
          <div className="w-40 md:w-50 flex flex-col space-y-2">
            <label className="text-white font-semibold mb-4">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 backdrop-blur-lg text-center py-3 border border-white/30 
                         rounded-4xl bg-black/60 text-white/60  focus:outline-none"
            >
              <option className="bg-black text-white" value="english">English</option>
              <option className="bg-black text-white" value="sinhala">සිංහල</option>
            </select>
          </div>

          {/* Date of Birth Inputs */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-semibold mb-4">Date of Birth</label>
            <div className="flex w-60 md:w-90">
              {/* Day Input */}
              <input
                type="number"
                placeholder="DD"
                maxLength={2}
                value={birthDate.day}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, day: e.target.value })
                }
                className="flex-1 backdrop-blur-lg text-center w-20 md:w-30 py-2 border rounded-bl-4xl rounded-tl-4xl border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
              {/* Month Input */}
              <input
                type="number"
                placeholder="MM"
                maxLength={2}
                value={birthDate.month}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, month: e.target.value })
                }
                className="flex-1 backdrop-blur-lg text-center w-20 md:w-30 border-y border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
              {/* Year Input */}
              <input
                type="number"
                placeholder="YYYY"
                maxLength={4}
                value={birthDate.year}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, year: e.target.value })
                }
                className="flex-2 backdrop-blur-lg text-center w-20 md:w-30 border rounded-br-4xl rounded-tr-4xl border-white/30 bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleSubmit}
          className="w-full mb-5 h-15 flex items-center justify-center text-white font-semibold tracking-widest
                     bg-center bg-no-repeat bg-contain opacity-70 transition-transform hover:opacity-100"
          style={{ backgroundImage: `url(${heroBtn})` }}
        >
          Confirm
        </button>

        {/* Error Message Display */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default AgeGate;
