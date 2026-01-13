// src/components/feedback/Report.jsx
import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase/firebase";
import DMCAInfo from "./dmcainfo";

/**
 * Report Component
 * ----------------
 * A reusable form component for submitting various types of reports to Firebase.
 * Can handle DMCA reports or general user feedback based on the `reportType` prop.
 *
 * Props:
 * - title: string → The form title displayed to the user.
 * - reportType: string → Firebase node where the report will be stored (e.g., "dmcaReports").
 *
 * Features:
 * 1. Form Validation:
 *    - Checks that name, email, and description fields are filled.
 *    - Validates email format using a simple regex.
 * 2. Firebase Integration:
 *    - Submits validated reports to the specified Firebase database reference.
 * 3. Conditional DMCA Info:
 *    - If `reportType` is "dmcaReports", displays additional DMCA guidance using the DMCAInfo component.
 * 4. Feedback:
 *    - Displays inline error messages for each invalid field.
 *    - Shows success message upon successful submission.
 * 5. Responsive & Styled:
 *    - Tailwind CSS provides responsive styling, spacing, and visual hierarchy.
 */
const Report = ({ title, reportType }) => {
  // ===================== Form State =====================
  const [name, setName] = useState(""); // User's name
  const [email, setEmail] = useState(""); // User's email
  const [description, setDescription] = useState(""); // Report description
  const [success, setSuccess] = useState(false); // Success feedback

  // ===================== Error State =====================
  // Stores validation error messages for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  /**
   * handleSubmit
   * ----------------
   * Form submission handler.
   * 1. Validates form fields.
   * 2. Shows error messages for invalid inputs.
   * 3. Pushes valid report data to Firebase under the given reportType node.
   * 4. Resets the form and shows a success message for 3 seconds.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({ name: "", email: "", description: "" });

    let hasError = false;
    const newErrors = { name: "", email: "", description: "" };

    // -------------------- Name Validation --------------------
    if (!name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }

    // -------------------- Email Validation --------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      hasError = true;
    }

    // -------------------- Description Validation --------------------
    if (!description.trim()) {
      newErrors.description = "Description is required";
      hasError = true;
    }

    // If any validation fails, update errors and stop submission
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // -------------------- Firebase Submission --------------------
    const reportsRef = ref(database, reportType); // Dynamic node based on reportType
    push(reportsRef, {
      name,
      email,
      description,
      timestamp: Date.now(),
    });

    // Clear form fields
    setName("");
    setEmail("");
    setDescription("");
    setSuccess(true);

    // Remove success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* -------------------- Conditional DMCA Info -------------------- */}
        {reportType === "dmcaReports" && <DMCAInfo />}

        {/* -------------------- Form Container -------------------- */}
        <div className="bg-white/5 max-w-2xl mx-auto backdrop-blur rounded-xl p-6 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          <h2 className="text-2xl tracking-widest text-center mb-6">
            {title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name Input */}
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-white/30 tracking-widest"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-white/30 tracking-widest"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Description Textarea */}
            <textarea
              rows={4}
              placeholder="Describe the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-white/30 tracking-widest"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-lg uppercase tracking-widest
                bg-white/20 hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              Submit
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-400 text-center tracking-widest">
                Report submitted successfully
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Report;
