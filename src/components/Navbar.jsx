import React, { useState } from "react";
import { MenuIcon, XIcon, UserIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#004D40] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-[#FFDE59] font-bold text-xl">Mega</span>
              <span className="text-white font-bold text-xl">City</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] transition-colors"
            >
              Book a Car
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] transition-colors"
            >
              Contact
            </a>
            <a href="/LoginForm">
            <button className="bg-[#FFDE59] text-[#004D40] px-4 py-2 rounded-md font-medium flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              Login
            </button>
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FFDE59]"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#004D40] pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] py-2 transition-colors"
            >
              Book a Car
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] py-2 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] py-2 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFDE59] py-2 transition-colors"
            >
              Contact
            </a>
            <button className="bg-[#FFDE59] text-[#004D40] px-4 py-2 rounded-md font-medium flex items-center w-full justify-center">
              <UserIcon className="w-4 h-4 mr-2" />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;