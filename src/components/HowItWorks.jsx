import React from 'react';
import { SmartphoneIcon, CarIcon, MapPinIcon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <SmartphoneIcon className="h-12 w-12 text-[#FFCB05]" />,
      title: 'Book Your Ride',
      description: 'Use our website or app to book a ride. Enter your pickup and drop-off locations.',
      number: '01',
    },
    {
      icon: <CarIcon className="h-12 w-12 text-[#FFCB05]" />,
      title: 'Get Picked Up',
      description: 'Our professional driver will arrive at your location in a clean, comfortable vehicle.',
      number: '02',
    },
    {
      icon: <MapPinIcon className="h-12 w-12 text-[#FFCB05]" />,
      title: 'Reach Destination',
      description: 'Relax and enjoy the ride as we take you safely to your destination.',
      number: '03',
    },
  ];

  return (
    <section className="py-16 bg-[#0A5F38] text-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Booking a ride with MegaCity Cab is quick and easy. Follow these
            simple steps to get started.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="relative">
                <div className="bg-white/10 rounded-full p-6 mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 bg-[#FFCB05] text-[#0A5F38] rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="opacity-90">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#FFCB05] hover:bg-yellow-500 text-[#0A5F38] font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;