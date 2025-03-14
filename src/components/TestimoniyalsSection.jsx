import React from 'react';
import { StarIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      quote: 'MegaCity Cab has been my go-to for business trips. Their drivers are always punctual and professional, and the vehicles are immaculate.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Frequent Traveler',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: "I've used many cab services, but MegaCity stands out for their reliability and customer service. The app makes booking so convenient!",
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Tourist',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'As a tourist, I felt safe and well-taken care of. The driver was knowledgeable about the city and suggested great places to visit.',
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F38] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied
            customers have to say about their experience with MegaCity Cab.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#FFCB05]' : 'text-gray-300'}`}
                    fill={i < testimonial.rating ? '#FFCB05' : 'none'}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="text-[#0A5F38] font-semibold hover:text-[#084a2c] inline-flex items-center"
          >
            View More Testimonials
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;