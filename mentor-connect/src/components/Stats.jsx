import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text">15K+</h3>
            <p className="text-gray-600 mt-2">Active Students</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">2.5K+</h3>
            <p className="text-gray-600 mt-2">Expert Mentors</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text">35K+</h3>
            <p className="text-gray-600 mt-2">Mentoring Hours</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">98%</h3>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;