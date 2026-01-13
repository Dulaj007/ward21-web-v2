import React from "react";

// ---------------- COMPONENT IMPORTS ----------------
import Nav from "../components/partials/nav";         // Navigation bar with language support
import Footer from "../components/partials/footer";   // Footer section
import Report from "../components/sections/report";   // Bug/DMCA report submission component

/**
 * ReportPage Component
 * --------------------
 * This page provides a form for users to submit bug reports.
 * Features:
 * 1. Navigation bar at the top with language support.
 * 2. Bug report form using the Report component.
 * 3. Footer section at the bottom.
 *
 * Props:
 * - language: string representing the currently selected language.
 */
const ReportPage = ({ language }) => {
  return (
    <>
      {/* NAVIGATION BAR */}
      <Nav language={language} />

      <div className="z-10 relative">
        {/* BUG REPORT FORM */}
        <Report
          title="Bug Report"
          reportType="bugReports"
        />

        {/* PAGE SEPARATOR */}
        <hr className="mx-[5%] text-white/50" />
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default ReportPage;
