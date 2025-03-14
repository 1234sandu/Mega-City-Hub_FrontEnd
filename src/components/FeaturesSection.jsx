import React from 'react';
import {
  ShieldCheckIcon,
  ClockIcon,
  CreditCardIcon,
  MapIcon,
  StarIcon,
  PhoneIcon,
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ClockIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: '24/7 Service',
      description: 'Available round the clock for your transportation needs, whenever you need us.',
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: 'Safe & Secure',
      description: 'All our drivers are background-checked and vehicles regularly maintained.',
    },
    {
      icon: <CreditCardIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: 'Easy Payment',
      description: 'Multiple payment options including card, cash, and digital wallets.',
    },
    {
      icon: <MapIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: 'GPS Tracking',
      description: 'Track your ride in real-time and share your journey with loved ones.',
    },
    {
      icon: <StarIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: 'Professional Drivers',
      description: 'Experienced, courteous, and professionally trained drivers.',
    },
    {
      icon: <PhoneIcon className="h-10 w-10 text-[#0A5F38]" />,
      title: '24/7 Support',
      description: 'Our customer service team is always available to help with any issues.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F38] mb-4">
            Why Choose MegaCity Cab
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best in urban transportation with our premium
            services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0A5F38] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;