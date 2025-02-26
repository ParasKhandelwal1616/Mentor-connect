import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Mentor Connect changed my academic life. I was struggling with advanced calculus until I matched with Professor Williams. His patience and teaching style was exactly what I needed.",
      author: "Sarah Johnson",
      role: "Computer Science Student",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "As a teacher, I wanted to help students beyond my classroom. This platform made it easy to connect with motivated learners and make a real difference in their educational journey.",
      author: "Dr. Michael Chen",
      role: "Physics Professor",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "The smart matching system paired me with the perfect mentor for my robotics project. We meet weekly and I've learned more in 3 months than I did in a year of self-study.",
      author: "Alex Rivera",
      role: "Engineering Student",
      avatar: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from students and mentors who have transformed their educational experiences through our platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 text-indigo-500 w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;