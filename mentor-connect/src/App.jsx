import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import TeacherLogin from "./components/TeacherLogin.jsx";
import StudentLogin from "./components/StudentLogin.jsx";

export default function App() {
  const [showLogin, setShowLogin] = useState(null);

  return (
    <Router>
      <div className={showLogin ? "blur-sm bg-gray-200 w-full" : "w-full"}>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center shadow-lg fixed w-full z-10">
          <h1 className="text-3xl font-bold">Mentor Connect</h1>
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.href}
                  className="text-white hover:text-blue-600 hover:bg-white transition-all px-6 py-3 rounded-full border border-transparent font-semibold"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg hidden group-hover:block w-48 border border-blue-600 z-10">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-blue-100 text-center">
                        <button
                          onClick={() => setShowLogin(subItem.href)}
                          className="block w-full py-2 text-black hover:bg-blue-600 transition-all font-semibold"
                        >
                          {subItem.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <section id="features" className="p-16 bg-gray-100 min-h-screen flex flex-col justify-center items-center w-full">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-700">Connecting Mentors & Mentees</h2>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            An AI-powered mentoring platform designed for career growth and skill development.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center w-full max-w-6xl">
            {features.map((feature, index) => (
              <div key={index} className="p-8 border rounded-2xl shadow-xl bg-white hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chatbot Button */}
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center space-x-2">
          💬 <span className="hidden md:inline-block">Chat with AI</span>
        </button>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-90">
          <div className="bg-white p-10 rounded-2xl shadow-2xl relative flex flex-col items-center w-96">
            <button className="absolute top-3 right-3 text-lg" onClick={() => setShowLogin(null)}>✖</button>
            {showLogin === "/teacher-login" ? <TeacherLogin /> : <StudentLogin />}
          </div>
        </div>
      )}
    </Router>
  );
}

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about", dropdown: [ { title: "Our Mission", href: "/mission" }, { title: "Our Vision", href: "/vision" } ] },
  { title: "Team", href: "/team" },
  { title: "Login", href: "#", dropdown: [ { title: "Login as Teacher", href: "/teacher-login" }, { title: "Login as Student", href: "/student-login" } ] },
  { title: "Contact", href: "/contact" }
];

const features = [
  { title: "Automated Calendar Booking", description: "Schedule meetings effortlessly with our AI-powered system." },
  { title: "Embedded Video Calls & Summary", description: "Seamlessly integrate video meetings with auto-generated summaries." },
  { title: "AI-Powered Mock Interviews", description: "Get instant feedback from AI-driven mock interview sessions." },
  { title: "Real-time Forum Discussions", description: "Engage in interactive discussions with mentors and peers." },
  { title: "Web3 Rewards & Problem of the Day", description: "Earn Web3-based rewards while solving daily challenges." }
];
