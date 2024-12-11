import React from "react";
import { Link } from "react-router";

function WorkInProgress() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <div className="max-w-md">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Work In Progress 🚧
        </h1>
        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          We're working hard to bring you this page! Stay tuned for updates. 🚀
        </p>
        {/* Decorative Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/400x300?text=Under+Construction"
            alt="Under Construction"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Button */}
        <Link to={'/'}>
        
        <button
          onClick={() => window.location.href = "/"}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Go Back to Homepage
        </button>
        </Link>
      </div>
    </div>
  );
}

export default WorkInProgress;
