import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for the dashboard
  const studentInfo = {
    name: "Alex Johnson",
    grade: "11th Grade",
    school: "Westview High School",
    avatar: "/api/placeholder/150/150",
    mentorName: "Dr. Sarah Williams",
    mentorSubject: "Computer Science",
    nextSession: "Feb 28, 2025 - 4:00 PM",
    completedSessions: 8,
    upcomingSessions: 3,
    goals: [
      { id: 1, title: "Complete Python course", progress: 75 },
      { id: 2, title: "Practice for Math competition", progress: 30 },
      { id: 3, title: "Research colleges", progress: 50 }
    ],
    recentMessages: [
      { id: 1, from: "Dr. Sarah Williams", preview: "Great job on your last assignment! I've reviewed...", time: "Yesterday" },
      { id: 2, from: "System", preview: "Your session for tomorrow has been confirmed", time: "2 days ago" },
      { id: 3, from: "Mr. Robert Chen", preview: "I can help with your questions about the physics project...", time: "3 days ago" }
    ],
    assignments: [
      { id: 1, title: "Algorithms Practice", due: "Feb 27", status: "In Progress", subject: "Computer Science" },
      { id: 2, title: "College Essay Draft", due: "Mar 3", status: "Not Started", subject: "English" },
      { id: 3, title: "Calculus Problem Set", due: "Feb 29", status: "Completed", subject: "Mathematics" }
    ]
  };

  // Dashboard component sections
  const DashboardHome = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Welcome & stats */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {studentInfo.name}!</h2>
              <p className="text-teal-100">{studentInfo.grade} • {studentInfo.school}</p>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{studentInfo.completedSessions}</span>
                  <span className="text-sm text-teal-100">Sessions Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{studentInfo.upcomingSessions}</span>
                  <span className="text-sm text-teal-100">Upcoming Sessions</span>
                </div>
              </div>
            </div>
            <img src={studentInfo.avatar} alt="Student profile" className="h-20 w-20 rounded-full border-4 border-white/30" />
          </div>
        </div>
        
        {/* Next session */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Next Mentoring Session</h3>
            <button className="text-teal-500 hover:text-teal-700 font-medium">View All Sessions</button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl">
            <div className="bg-teal-500 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{studentInfo.nextSession}</p>
              <p className="text-gray-600">with {studentInfo.mentorName} • {studentInfo.mentorSubject}</p>
            </div>
            <button className="ml-auto bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md transition">Join</button>
          </div>
        </div>
        
        {/* Goals tracking */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">My Goals</h3>
            <button className="text-teal-500 hover:text-teal-700 font-medium">Add Goal</button>
          </div>
          <div className="space-y-4">
            {studentInfo.goals.map(goal => (
              <div key={goal.id} className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{goal.title}</span>
                  <span className="text-teal-500 font-medium">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-teal-500 h-2.5 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right column */}
      <div className="space-y-6">
        {/* Mentor card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">My Mentor</h3>
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img src="/api/placeholder/120/120" alt="Mentor" className="rounded-full" />
              <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <h4 className="mt-4 font-semibold text-gray-800">{studentInfo.mentorName}</h4>
            <p className="text-gray-600">{studentInfo.mentorSubject}</p>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg shadow transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </button>
              <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg shadow transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Message
              </button>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
            <button className="text-teal-500 hover:text-teal-700 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {studentInfo.recentMessages.map(message => (
              <div key={message.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                <div className="bg-teal-100 text-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  {message.from.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800">{message.from}</p>
                  <p className="text-gray-500 text-sm truncate">{message.preview}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{message.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Assignments = () => (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">My Assignments</h3>
        <div className="flex gap-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search assignments..." 
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            New
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600">
              <th className="py-3 px-4 font-medium rounded-l-lg">Assignment</th>
              <th className="py-3 px-4 font-medium">Subject</th>
              <th className="py-3 px-4 font-medium">Due Date</th>
              <th className="py-3 px-4 font-medium rounded-r-lg">Status</th>
              <th className="py-3 px-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {studentInfo.assignments.map(assignment => (
              <tr key={assignment.id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-800">{assignment.title}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{assignment.subject}</td>
                <td className="py-3 px-4 text-gray-600">{assignment.due}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    assignment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                    assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-teal-500 hover:text-teal-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Resources = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Resources</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-teal-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-teal-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Study Guides</h4>
            <p className="text-gray-600 text-sm mt-1">Access subject-specific study materials</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-purple-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Practice Problems</h4>
            <p className="text-gray-600 text-sm mt-1">Test your knowledge with interactive exercises</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">College Resources</h4>
            <p className="text-gray-600 text-sm mt-1">Explore college information and applications</p>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-yellow-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l4 4-4 4"></path>
                <path d="M9 18l-4-4 4-4"></path>
                <line x1="19" y1="10" x2="5" y2="10"></line>
                <line x1="19" y1="14" x2="5" y2="14"></line>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Coding Tutorials</h4>
            <p className="text-gray-600 text-sm mt-1">Learn programming with step-by-step guides</p>
          </div>
          
          <div className="bg-red-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-red-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Video Lessons</h4>
            <p className="text-gray-600 text-sm mt-1">Watch instructional videos on key topics</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="bg-green-500 text-white p-3 rounded-lg inline-block mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Career Planning</h4>
            <p className="text-gray-600 text-sm mt-1">Explore career paths and opportunities</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended for You</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer">
            <img src="/api/placeholder/500/260" alt="Resource thumbnail" className="w-full object-cover h-32" />
            <div className="p-4">
              <span className="inline-block px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full mb-2">Computer Science</span>
              <h4 className="font-semibold text-gray-800">Introduction to Algorithms</h4>
              <p className="text-gray-600 text-sm mt-1">Learn the fundamentals of algorithmic thinking and problem solving</p>
              <div className="flex items-center mt-3">
                <div className="bg-teal-500 text-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-500 ml-2">Recommended by your mentor</span>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer">
            <img src="/api/placeholder/500/260" alt="Resource thumbnail" className="w-full object-cover h-32" />
            <div className="p-4">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">College Prep</span>
              <h4 className="font-semibold text-gray-800">College Essay Writing Guide</h4>
              <p className="text-gray-600 text-sm mt-1">Master the art of writing compelling college application essays</p>
              <div className="flex items-center mt-3">
                <div className="bg-blue-500 text-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-500 ml-2">Based on your current goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">Mentor Connect</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative mr-3">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm w-48"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
              </button>
              <div className="flex items-center ml-4">
                <img src={studentInfo.avatar} alt="Profile" className="h-8 w-8 rounded-full" />
                <span className="ml-2 font-medium text-gray-700">Alex J.</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sidebar and Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="w-64 fixed h-full bg-white shadow-md z-10">
          <div className="p-6">
            <ul className="space-y-1">
              <li>
                <button 
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-teal-50 text-teal-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="