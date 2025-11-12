import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-gray-800">GROUP DE LA RÉUSSITE</span>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/group-de-reussite/">Home</Link>
            <Link to="/group-de-reussite/about">About</Link>
            <Link to="/group-de-reussite/emplois">Emplois</Link>
            <Link to="/group-de-reussite/formation">Formation</Link>
          </nav>

          {/* Boutons desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-[#003cff] font-semibold">Login</button>
            <button className="bg-[#21bf73] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1aa863]">
              Join Us
            </button>
          </div>

          {/* Hamburger mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile avec animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ${
            isOpen ? "max-h-[500px] mt-2" : "max-h-0 mt-0"
          }`}
        >
          <div className="px-2 pb-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link to="/emplois" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Emplois
            </Link>
            <Link to="/formation" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Formation
            </Link>

            <div className="flex flex-col gap-2 mt-2">
              <button className="text-[#003cff] font-semibold">Login</button>
              <button className="bg-[#21bf73] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1aa863]">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
