import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for the dashboard
  const teacherInfo = {
    name: "Dr. Sarah Williams",
    department: "Computer Science",
    school: "Westview High School",
    avatar: "/api/placeholder/150/150",
    totalStudents: 18,
    upcomingSessions: 5,
    nextSession: "Feb 28, 2025 - 4:00 PM",
    studentName: "Alex Johnson",
    studentGrade: "11th Grade",
    goals: [
      { id: 1, title: "Complete mid-term evaluations", progress: 65 },
      { id: 2, title: "Prepare college recommendation letters", progress: 40 },
      { id: 3, title: "Develop advanced Python curriculum", progress: 85 }
    ],
    recentMessages: [
      { id: 1, from: "Alex Johnson", preview: "Thank you for the feedback on my assignment! I've revised...", time: "Yesterday", avatar: "A" },
      { id: 2, from: "System", preview: "Your session for tomorrow has been confirmed", time: "2 days ago", avatar: "S" },
      { id: 3, from: "Principal Roberts", preview: "Can we discuss the upcoming STEM fair participation?", time: "3 days ago", avatar: "P" }
    ],
    assignments: [
      { id: 1, title: "Algorithms Practice", dueDate: "Feb 27", assignedTo: 12, submitted: 8, subject: "Computer Science" },
      { id: 2, title: "College Essay Review", dueDate: "Mar 3", assignedTo: 5, submitted: 2, subject: "College Prep" },
      { id: 3, title: "Python Project Proposals", dueDate: "Feb 29", assignedTo: 15, submitted: 15, subject: "Computer Science" }
    ],
    students: [
      { id: 1, name: "Alex Johnson", grade: "11th", progress: 85, lastActive: "Today", subjects: ["Computer Science", "Mathematics"] },
      { id: 2, name: "Maya Rodriguez", grade: "12th", progress: 92, lastActive: "Yesterday", subjects: ["Computer Science"] },
      { id: 3, name: "Ethan Williams", grade: "11th", progress: 78, lastActive: "3 days ago", subjects: ["Computer Science", "Physics"] },
      { id: 4, name: "Sophia Chen", grade: "10th", progress: 95, lastActive: "Today", subjects: ["Computer Science", "Mathematics"] },
      { id: 5, name: "Lucas Kim", grade: "12th", progress: 65, lastActive: "1 week ago", subjects: ["Computer Science"] }
    ]
  };

  // Dashboard component sections
  const DashboardHome = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Welcome & stats */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {teacherInfo.name}!</h2>
              <p className="text-indigo-100">{teacherInfo.department} • {teacherInfo.school}</p>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{teacherInfo.totalStudents}</span>
                  <span className="text-sm text-indigo-100">Mentored Students</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{teacherInfo.upcomingSessions}</span>
                  <span className="text-sm text-indigo-100">Upcoming Sessions</span>
                </div>
              </div>
            </div>
            <img src={teacherInfo.avatar} alt="Teacher profile" className="h-20 w-20 rounded-full border-4 border-white/30" />
          </div>
        </div>
        
        {/* Next session */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Next Mentoring Session</h3>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All Sessions</button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl">
            <div className="bg-indigo-600 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{teacherInfo.nextSession}</p>
              <p className="text-gray-600">with {teacherInfo.studentName} • {teacherInfo.studentGrade}</p>
            </div>
            <button className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition">Join</button>
          </div>
        </div>
        
        {/* Active students summary */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Student Progress Overview</h3>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All Students</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2 px-3">Student</th>
                  <th className="py-2 px-3">Grade</th>
                  <th className="py-2 px-3">Progress</th>
                  <th className="py-2 px-3">Last Active</th>
                  <th className="py-2 px-3"></th>
                </tr>
              </thead>
              <tbody>
                {teacherInfo.students.map((student) => (
                  <tr key={student.id} className="border-t border-gray-100">
                    <td className="py-3 px-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold mr-3">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-800">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-gray-600">{student.grade}</td>
                    <td className="py-3 px-3">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2 max-w-[100px]">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-gray-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-gray-600">{student.lastActive}</td>
                    <td className="py-3 px-3">
                      <button className="text-indigo-600 hover:text-indigo-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Right column */}
      <div className="space-y-6">
        {/* Goals */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">My Goals</h3>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">Add Goal</button>
          </div>
          <div className="space-y-4">
            {teacherInfo.goals.map(goal => (
              <div key={goal.id} className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{goal.title}</span>
                  <span className="text-indigo-600 font-medium">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Messages */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {teacherInfo.recentMessages.map(message => (
              <div key={message.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  {message.avatar}
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
        
        {/* Quick actions */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              <span className="text-sm font-medium text-gray-700">Add Student</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-sm font-medium text-gray-700">Schedule</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1"></path>
                <path d="M16 21h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path>
                <path d="M9 3v13"></path>
              </svg>
              <span className="text-sm font-medium text-gray-700">Resources</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="text-sm font-medium text-gray-700">Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AssignmentsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Assignment Management</h3>
          <div className="flex gap-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search assignments..." 
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Create Assignment
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
                <th className="py-3 px-4 font-medium">Assigned</th>
                <th className="py-3 px-4 font-medium">Submitted</th>
                <th className="py-3 px-4 font-medium rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teacherInfo.assignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-800">{assignment.title}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{assignment.subject}</td>
                  <td className="py-3 px-4 text-gray-600">{assignment.dueDate}</td>
                  <td className="py-3 px-4 text-gray-600">{assignment.assignedTo} students</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${(assignment.submitted / assignment.assignedTo) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{assignment.submitted}/{assignment.assignedTo}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-md transition" title="View Submissions">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-md transition" title="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button className="p-1 text-red-500 hover:bg-red-50 rounded-md transition" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent submissions */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Submissions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="bg-green-100 text-green-600 p-2 rounded-full h-10 w-10 flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-gray-800">Alex Johnson</span>
                <span className="ml-2 text-sm text-gray-500">submitted</span>
                <span className="ml-2 font-medium text-gray-800">Algorithms Practice</span>
              </div>
              <p className="text-sm text-gray-600">Submitted 2 hours ago</p>
            </div>
            <button className="ml-auto text-indigo-600 hover:text-indigo-800 font-medium">Review</button>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="bg-green-100 text-green-600 p-2 rounded-full h-10 w-10 flex items-center justify-center font-semibold">
              M
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-gray-800">Maya Rodriguez</span>
                <span className="ml-2 text-sm text-gray-500">submitted</span>
                <span className="ml-2 font-medium text-gray-800">College Essay Review</span>
              </div>
              <p className="text-sm text-gray-600">Submitted yesterday</p>
            </div>
            <button className="ml-auto text-indigo-600 hover:text-indigo-800 font-medium">Review</button>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div className="bg-orange-100 text-orange-600 p-2 rounded-full h-10 w-10 flex items-center justify-center font-semibold">
              L
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-gray-800">Lucas Kim</span>
                <span className="ml-2 text-sm text-gray-500">assignment</span>
                <span className="ml-2 font-medium text-gray-800">Python Project Proposals</span>
              </div>
              <p className="text-sm text-orange-600">Due in 3 days - Not started</p>
            </div>
            <button className="ml-auto text-indigo-600 hover:text-indigo-800 font-medium">Remind</button>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">My Students</h3>
          <div className="flex gap-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search students..." 
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Student
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teacherInfo.students.map((student) => (
            <div key={student.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full h-12 w-12 flex items-center justify-center font-semibold text-lg mr-3">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{student.name}</h4>
                    <p className="text-gray-500 text-sm">{student.grade}</p>
                  </div>
                </div>
                <div className="flex">
                  <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-md transition" title="Message">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                  <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-md transition ml-1" title="View Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none