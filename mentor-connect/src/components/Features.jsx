import React from 'react';

const Features = () => {
  const featuresList = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <circle cx="12" cy="8" r="3"></circle>
        </svg>
      ),
      title: "Smart Matching",
      description: "Our AI-powered algorithm connects students with the perfect mentor based on skills, goals, and learning style."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Video Sessions",
      description: "Connect with mentors through high-quality video meetings designed specifically for learning and collaboration."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics, milestone tracking, and performance insights."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      ),
      title: "Personalized Learning",
      description: "Customized learning plans and resources tailored to your unique educational needs and goals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: "Instant Messaging",
      description: "Stay connected between sessions with our secure messaging system for quick questions and feedback."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      title: "Certification",
      description: "Earn verified certificates to showcase your achievements and skills on professional platforms."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Effective Mentoring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our platform combines cutting-edge technology with thoughtful design to create meaningful learning experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]"
            >
              <div className="bg-indigo-50 p-3 rounded-full w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;