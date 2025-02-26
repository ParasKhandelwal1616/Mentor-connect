import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, setShowLogin }) => {
  const navItems = [
    { title: "Home", href: "/", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
    { title: "About", href: "/about", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>, dropdown: [ { title: "Our Mission", href: "/mission" }, { title: "Our Vision", href: "/vision" } ] },
    { title: "Team", href: "/team", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { title: "Login", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>, dropdown: [ { title: "Login as Teacher", href: "/teacher-login" }, { title: "Login as Student", href: "/student-login" } ] },
    { title: "Contact", href: "/contact", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> }
  ];

  return (
    <nav className={`${isScrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-indigo-700 to-purple-700'} py-4 px-8 flex justify-between items-center fixed w-full z-10 transition-all duration-300`}>
      <div className="flex items-center">
        <div className="text-3xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mr-2 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span className={isScrolled ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text' : 'text-white'}>Mentor Connect</span>
        </div>
      </div>

      <ul className="hidden md:flex gap-6 items-center">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.href}
              className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-all px-4 py-2 rounded-full flex items-center gap-2 font-medium`}
            >
              {item.icon}
              {item.title}
              {item.dropdown && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              )}
            </Link>
            {item.dropdown && (
              <ul className="absolute left-0 mt-0 bg-white shadow-xl rounded-xl hidden group-hover:block w-48 border border-gray-100 overflow-hidden z-10">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="hover:bg-gray-50">
                    <button
                      onClick={() => setShowLogin(subItem.href)}
                      className="block w-full py-3 px-4 text-left text-gray-700 hover:text-indigo-600 transition-all font-medium"
                    >
                      {subItem.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <button className={`${isScrolled ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white' : 'bg-white text-indigo-700'} px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all ml-4`}>
          Get Started
        </button>
      </ul>

      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;