import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "How it Works", href: "#" },
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "FAQ", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Community", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Events", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ]
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-white">Mentor Connect</span>
            </div>
            <p className="mb-6 text-gray-400">
              Empowering education through meaningful mentoring relationships. Our platform connects students with expert mentors for personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white">
                  <i className={`fab fa-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mentor Connect. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed with ❤️ for education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
