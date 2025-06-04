import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    try {
      const currentUserId = localStorage.getItem('currentUserId');
      const usersJSON = localStorage.getItem('users');
      if (!currentUserId || !usersJSON) {
        throw new Error('User not logged in');
      }

      const users = JSON.parse(usersJSON);
      const userProfile = users[currentUserId];

      if (!userProfile) throw new Error('User profile not found');

      setProfile(userProfile);
    } catch (error) {
      // Redirect to login if not logged in or error
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUserId');
    navigate('/login');
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white h-[calc(100vh-2rem)] rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        {/* Header */}
        <div className="px-8 py-6 bg-gray-200 border-b border-gray-100 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Account Settings
          </h1>
          <button
            onClick={handleLogout}
            className="cursor-pointer bg-gradient-to-r outline-0 from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Logout
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            {/* Profile Avatar */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-18 h-18 rounded-full object-cover"
              />
              {/* Online Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {profile.fullName}
              </h2>
              <p className="text-gray-600 text-sm mb-0.5">
                {profile.emailAddress}
              </p>
              
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-600 text-sm leading-relaxed">
            <p>
              Welcome back, {profile.fullName}! Your account is active and ready to use. 
              Manage your settings and preferences from this dashboard.
            </p>
          </div>

          {/* Action Buttons */}
         
        </div>
      </div>
    </div>
  );
}