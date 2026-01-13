import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
      <p className="text-xl md:text-2xl mb-6">Oops! Page Not Found</p>
      <p className="mb-6 text-white/70">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
