import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "Free forever",
      description: "Perfect for trying out the platform",
      features: [
        "Match with 1 mentor",
        "2 hours of sessions/month",
        "Basic progress tracking",
        "Community forum access",
        "Email support"
      ],
      buttonText: "Get Started",
      highlighted: false,
      buttonClass: "bg-white text-indigo-600 border-2 border-indigo-600"
    },
    {
      name: "Premium",
      price: "$49",
      period: "per month",
      description: "Most popular choice for serious students",
      features: [
        "Match with up to 3 mentors",
        "10 hours of sessions/month",
        "Advanced progress tracking",
        "Resource library access",
        "Priority email & chat support",
        "Skill assessments",
        "Verified certificates"
      ],
      buttonText: "Start Free Trial",
      highlighted: true,
      buttonClass: "bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Comprehensive option for intensive learning",
      features: [
        "Match with unlimited mentors",
        "Unlimited session hours",
        "Comprehensive analytics",
        "Full resource library access",
        "24/7 priority support",
        "Career guidance",
        "Verified certificates",
        "Group sessions"
      ],
      buttonText: "Start Free Trial",
      highlighted: false,
      buttonClass: "bg-white text-indigo-600 border-2 border-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your educational journey. All plans include our core matching technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 shadow-lg transition-all hover:translate-y-[-10px] ${plan.highlighted ? 'bg-gradient-to-b from-indigo-600 to-purple-700 text-white ring-4 ring-indigo-300' : 'bg-white'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`ml-2 pb-1 ${plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.description}</p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-3 ${plan.highlighted ? 'text-indigo-200' : 'text-indigo-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center font-semibold ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;