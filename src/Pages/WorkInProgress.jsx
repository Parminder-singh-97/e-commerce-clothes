import React from "react";
import { Link } from "react-router";

function WorkInProgress() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <div className="max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚧 Work In Progress 🚧
        </h1>
        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          We're working hard to bring you this page! Stay tuned for updates. 🚀
        </p>
        {/* Decorative Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Under Construction"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Button */}
        <Link to={'/home'}>
        
        
        <button
          // onClick={() => window.location.href = "/home"}
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
