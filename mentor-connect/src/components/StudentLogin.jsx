export default function StudentLogin() {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Student Login</h2>
      <form className="space-y-6 w-full px-8">
        <input type="email" placeholder="Email" className="border p-3 text-black rounded-xl w-full shadow-md focus:ring-2 focus:ring-blue-500" required />
        <input type="password" placeholder="Password" className="border p-3 text-black rounded-xl w-full shadow-md focus:ring-2 focus:ring-blue-500" required />
        <input type="text" placeholder="Student ID" className="border p-3 text-black rounded-xl w-full shadow-md focus:ring-2 focus:ring-blue-500" required />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md w-full hover:scale-105 transition">Login</button>
      </form>
    </div>
  );
}
