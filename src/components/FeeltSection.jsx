import React, { useState } from 'react';
import { CheckCircleIcon } from 'lucide-react';

const FleetSection = () => {
  const [activeTab, setActiveTab] = useState('sedan');
  
  const fleetTypes = [
    { id: 'sedan', name: 'Sedan' },
    { id: 'suv', name: 'SUV' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'van', name: 'Minivan' },
  ];

  const fleetDetails = {
    sedan: {
      title: 'Comfortable Sedans',
      description: 'Perfect for 1-3 passengers, our sedans offer comfort and reliability for your daily commute or airport transfers.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Up to 3 passengers',
        'Free WiFi',
        'Air conditioning',
        'Luggage space for 2 bags',
      ],
    },
    suv: {
      title: 'Spacious SUVs',
      description: 'Ideal for groups of 4-5 passengers with extra luggage, our SUVs provide comfort and space for your journey.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Up to 5 passengers',
        'Free WiFi',
        'Air conditioning',
        'Luggage space for 4 bags',
        'Child seats available',
      ],
    },
    luxury: {
      title: 'Premium Luxury Cars',
      description: 'Experience the ultimate in comfort and style with our luxury fleet, perfect for special occasions or executive travel.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      features: [
        'Up to 3 passengers',
        'Premium leather seats',
        'Complimentary refreshments',
        'Professional chauffeur',
        'Priority service',
      ],
    },
    van: {
      title: 'Spacious Minivans',
      description: 'Perfect for larger groups or families, our minivans offer ample space for passengers and luggage alike.',
      image: 'https://images.unsplash.com/photo-1609520505218-7421df2df396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      features: [
        'Up to 7 passengers',
        'Free WiFi',
        'Air conditioning',
        'Luggage space for 6 bags',
        'Child seats available',
      ],
    },
  };

  const activeFleet = fleetDetails[activeTab];

  return (
    <section id="fleet" className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F38] mb-4">
            Our Fleet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of well-maintained vehicles to suit
            your needs and preferences
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {fleetTypes.map((type) => (
              <button
                key={type.id}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${activeTab === type.id ? 'bg-[#0A5F38] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab(type.id)}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="md:w-1/2">
            <img
              src={activeFleet.image}
              alt={activeFleet.title}
              className="h-64 md:h-full w-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#0A5F38] mb-3">
              {activeFleet.title}
            </h3>
            <p className="text-gray-600 mb-6">{activeFleet.description}</p>
            
            <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
            <ul className="space-y-2">
              {activeFleet.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#FFCB05] mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 bg-[#0A5F38] hover:bg-[#084a2c] text-white py-2 px-6 rounded-lg transition-colors duration-300">
              Book This Vehicle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;