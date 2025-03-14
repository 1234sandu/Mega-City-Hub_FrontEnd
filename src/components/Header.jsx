import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A5F38] text-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-[#FFCB05]">
            MegaCity<span className="text-white">Cab</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-[#FFCB05] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFCB05] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#FFCB05] transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FFCB05] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFCB05] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFCB05] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 text-[#FFCB05] mr-2" />
            <span className="font-medium">1-800-MEGACAB</span>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A5F38] py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-[#FFCB05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-3 border-t border-gray-700">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-[#FFCB05] mr-2" />
                  <span>1-800-MEGACAB</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;