import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 to-purple-700 text-transparent bg-clip-text leading-tight">
            Connect, Learn & Grow Together
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            An AI-powered mentoring platform that connects students with mentors, enhances learning experiences, and builds lasting professional relationships.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all font-semibold flex items-center">
              <span>Find a Mentor</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
            <button className="bg-white text-indigo-700 border-2 border-indigo-600 px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all font-semibold flex items-center">
              <span>Become a Mentor</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl"></div>
            <img src="/api/placeholder/500/400" className="relative z-10 rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;