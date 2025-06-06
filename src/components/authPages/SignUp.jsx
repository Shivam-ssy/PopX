import React, { useState } from 'react';
import { authManager } from '../../utils/localUser';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function PopXCreateAccount() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        password: '',
        companyName: '',
        isAgency: 'yes'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRadioChange = (value) => {
        setFormData(prev => ({
            ...prev,
            isAgency: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit");

        try {
            const res = authManager.signUp(formData); // this can throw
            console.log(res);

            toast.success("Sign Up Successfully");
            navigate('/login');
        } catch (error) {
            console.error(error.message);
            toast.error(error.message || "Sign up failed");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="bg-white h-[calc(100vh-2rem)] rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
                {/* Header */}
                <div className=" mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Create your<br />
                        PopX account
                    </h1>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    {/* Full Name Field */}
                    <div className="relative">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Full Name*
                        </label>
                    </div>

                    {/* Phone Number Field */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Phone number*
                        </label>
                    </div>

                    {/* Email Address Field */}
                    <div className="relative">
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Email address*
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Password *
                        </label>
                    </div>

                    {/* Company Name Field */}
                    <div className="relative">
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                        />
                        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-purple-600">
                            Company name
                        </label>
                    </div>

                    {/* Agency Question */}
                    <div className="pt-4">
                        <p className="text-sm font-medium text-gray-700 mb-4">
                            Are you an Agency?*
                        </p>
                        <div className="flex space-x-6">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    checked={formData.isAgency === 'yes'}
                                    onChange={() => handleRadioChange('yes')}
                                    className="sr-only"
                                />
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.isAgency === 'yes'
                                        ? 'border-purple-600 bg-purple-600'
                                        : 'border-gray-300'
                                    }`}>
                                    {formData.isAgency === 'yes' && (
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    )}
                                </div>
                                <span className="ml-2 text-sm text-gray-700">Yes</span>
                            </label>

                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    checked={formData.isAgency === 'no'}
                                    onChange={() => handleRadioChange('no')}
                                    className="sr-only"
                                />
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.isAgency === 'no'
                                        ? 'border-purple-600 bg-purple-600'
                                        : 'border-gray-300'
                                    }`}>
                                    {formData.isAgency === 'no' && (
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    )}
                                </div>
                                <span className="ml-2 text-sm text-gray-700">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-8"
                    >
                        Create Account
                    </button>
                    <div className='text-center'>Already Have Account? <Link className='text-blue-500' to="/login">Login</Link></div>
                </form>
            </div>
        </div>
    );
}