import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does the mentor matching process work?",
      answer: "Our AI-powered algorithm analyzes your learning style, educational goals, subject areas, and preferences to find the perfect mentor match. We consider factors like teaching style, expertise level, availability, and past success with similar students to ensure a productive relationship."
    },
    {
      question: "What qualifications do mentors have?",
      answer: "All mentors on our platform are verified professionals in their field. They include professors, industry experts, researchers, and experienced educators. Each mentor undergoes a thorough vetting process including credential verification, background checks, and teaching capability assessment."
    },
    {
      question: "How often can I meet with my mentor?",
      answer: "Meeting frequency depends on your subscription plan and mentor availability. Basic plans include 2 hours per month, while Premium and Professional plans offer more flexible options. You and your mentor can establish a schedule that works best for your learning goals."
    },
    {
      question: "Can I change my mentor if it's not a good fit?",
      answer: "Absolutely! While our matching system is highly effective, we understand that personal chemistry matters. If you feel your mentor isn't the right fit, you can request a new match at any time through your dashboard without any penalty."
    },
    {
      question: "What technology do I need for mentoring sessions?",
      answer: "You'll need a computer or tablet with a stable internet connection, microphone, and webcam. Our platform works in most modern browsers without requiring additional software. For the best experience, we recommend using Chrome or Firefox."
    },
    {
      question: "Are there group mentoring options available?",
      answer: "Yes! Our Professional plan includes access to group mentoring sessions where you can learn alongside peers with similar interests and goals. These collaborative sessions are great for networking and gaining diverse perspectives."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our mentoring platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg pr-8">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;