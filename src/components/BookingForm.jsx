import React, { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserIcon,
  CarIcon,
} from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: 'sedan',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Booking request submitted!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-bold text-[#0A5F38] mb-4">Book Your Ride</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Pickup Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Enter pickup address"
                className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Dropoff Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dropoff Location
            </label>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Enter destination address"
                className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Date and Time Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Date Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Time Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <div className="relative">
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Passengers and Vehicle Type Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Passengers Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passengers
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent appearance-none"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vehicle Type Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Type
              </label>
              <div className="relative">
                <CarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0A5F38] focus:border-transparent appearance-none"
                  required
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                  <option value="van">Van</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0A5F38] hover:bg-[#084a2c] text-white py-3 px-4 rounded font-medium transition-colors duration-300"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;