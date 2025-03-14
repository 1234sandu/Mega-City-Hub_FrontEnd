import React from 'react';
import { BookingForm } from './BookingForm';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[#0A5F38] text-white w-full">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Reliable Ride{' '}
              <span className="text-[#FFCB05]">Anytime, Anywhere</span>
            </h1>
            <p className="text-lg mb-6 max-w-lg">
              MegaCity Cab offers premium transportation services with
              professional drivers, comfortable vehicles, and competitive rates.
              Book your ride in seconds!
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#FFCB05] hover:bg-yellow-500 text-[#0A5F38] font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Download App
              </button>
              <button className="border-2 border-white hover:border-[#FFCB05] hover:text-[#FFCB05] font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;