import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9e4ee9] to-purple-900 flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! The page you are looking for might have been removed, renamed, or does not exist.
      </p>
      <Link to="/" className="btn btn-accent bg-white text-[#9e4ee9] hover:bg-gray-200">
        🔙 Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
