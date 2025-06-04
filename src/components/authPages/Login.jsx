import React, { useState } from 'react';
import {toast} from 'react-hot-toast';
import { authManager } from '../../utils/localUser';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const res = authManager.login(email, password);
            console.log("Login success:", res);

            toast.success("Logged in successfully");
            navigate('/profile'); 
        } catch (error) {
            console.error(error.message);
            toast.error(error.message || "Login failed! Please Enter the correct Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="bg-white h-[calc(100vh-2rem)] rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Signin to your<br />
                        PopX account
                    </h1>
                    <p className="text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    {/* Email Field */}
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Email Address
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Password
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full cursor-pointer bg-gray-400 hover:bg-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-8"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}