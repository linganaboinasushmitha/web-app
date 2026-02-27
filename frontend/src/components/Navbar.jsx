import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Navbar = () => {
    const {user} = useAuth()
  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide">
        <Link to="/" className="hover:text-blue-400 transition">
          NoteApp
        </Link>
      </div>

      {/* Search */}
      <input
        type="text"
        className="w-64 bg-gray-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        placeholder="Search notes..."
      />

      
      <div className="flex items-center">
         {!user? (
            <> 
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mr-3 text-sm transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mr-3 text-sm transition"
        >
          Signup
        </Link>
         </>
         )
         :
         (
         <>
         <span className="mr-4 text-sm text-gray-300">
         {user.name}
        </span>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition">
          Logout
        </button>
        </>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
