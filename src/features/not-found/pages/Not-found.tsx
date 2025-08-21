import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-red-500 rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Go Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-600 rounded-xl shadow-lg hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default memo(NotFound);
