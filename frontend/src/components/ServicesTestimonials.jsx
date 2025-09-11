import React from 'react';
import TestimonialCard from './TestimonialCard';

const ServicesTestimonials = () => {
  const testimonials = [
    {
      quote: "EduNova's support was a game-changer for my thesis. The team was responsive and the quality exceeded my expectations.",
      author: "Jessica Lee",
      role: "MSc Student, University of Manchester",
      initials: "J",
      bgColor: "bg-blue-400"
    },
    {
      quote: "I got help with my coding assignment and not only did I pass, but I learned a lot from the feedback provided.",
      author: "Ahmed Patel",
      role: "BSc Computer Science, University of Birmingham",
      initials: "A",
      bgColor: "bg-green-400"
    },
    {
      quote: "The finance project support was detailed and professional. Highly recommend EduNova for any academic work!",
      author: "Sophie Turner",
      role: "MBA Student, University of Leeds",
      initials: "S",
      bgColor: "bg-purple-400"
    },
    {
      quote: "Quick turnaround and excellent communication. My literature review was top-notch.",
      author: "Liam O'Connor",
      role: "PhD Candidate, University of Glasgow",
      initials: "L",
      bgColor: "bg-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;