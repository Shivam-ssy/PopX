import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../authPages/Login';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white h-[calc(100vh-2rem)] items-center flex flex-col justify-end rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-center leading-relaxed">
            Lorem ipsum dolor sit amet,
            consectetur <br /> adipiscing elit,
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4 flex flex-col w-full">
          <Link to={'/signup'} className="w-full bg-gradient-to-r text-center from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Create Account
          </Link>
          
          <Link to="/login" className="w-full bg-gradient-to-r text-center from-purple-200 to-purple-300 hover:from-purple-300 hover:to-purple-400 text-purple-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}