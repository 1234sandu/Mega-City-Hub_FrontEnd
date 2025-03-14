import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A5F38] text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#FFCB05] mb-4">
              MegaCity<span className="text-white">Cab</span>
            </h3>
            <p className="mb-4 opacity-90">
              Your trusted transportation partner for safe, reliable, and
              comfortable rides across the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFCB05] transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFCB05] transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFCB05] transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFCB05] transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#FFCB05] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFCB05] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#FFCB05] transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCB05] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCB05] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCB05] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 text-[#FFCB05]" />
                <span>123 Main Street, MegaCity, MC 12345</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-[#FFCB05]" />
                <span>1-800-MEGACAB</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-[#FFCB05]" />
                <span>info@megacitycab.com</span>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-bold text-lg mb-4">Download Our App</h4>
            <p className="mb-4 opacity-90">
              Get the MegaCity Cab app for easy booking and tracking.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded flex items-center hover:bg-gray-900 transition-colors"
              >
                <div className="mr-3">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 19.874C16.14 20.728 15.03 20.2 13.86 20.2c-1.2 0-2.33.54-3.23-.31-1.49-1.39-1.24-4.04.32-5.16.92-.67 2.13-.61 3.01.13.42.35.74.35 1.16 0 1.06-.87 2.54-.66 3.33.42-1.28 1.45-1.15 2.9.6 4.59zm1.35-8.87c-.12 3.25-3.03 5.61-6.04 5.61-3.32 0-6.03-2.69-6.03-6.02 0-3.32 2.71-6.02 6.03-6.02 1.61 0 3.1.64 4.21 1.74 1.1 1.11 1.81 2.63 1.83 4.69z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded flex items-center hover:bg-gray-900 transition-colors"
              >
                <div className="mr-3">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.26 3.5c.96.58 1.93 1.14 2.9 1.71 1.37.81 2.73 1.61 4.1 2.42.79.47 1.58.94 2.37 1.4.11.07.24.12.37.12.86.01 1.72.01 2.59 0 .13 0 .26-.05.37-.12 3.25-1.92 6.5-3.83 9.76-5.74.12-.07.23-.15.35-.22v11.58c0 .59-.48 1.06-1.07 1.07h-2.7c-7.67 0-15.35 0-23.02 0-.59 0-1.07-.48-1.07-1.07V3.28c.12.07.23.15.35.22z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-sm opacity-80">
          <div className="flex flex-col md:flex-row justify-between">
            <p>
              &copy; {new Date().getFullYear()} MegaCity Cab. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <a href="#" className="mr-4 hover:text-[#FFCB05] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FFCB05] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;