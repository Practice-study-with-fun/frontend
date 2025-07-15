
'use client';

import Header from '@/components/Header';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-sm sm:text-base text-gray-600">Sign in to your VirtualPay account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base pr-10 sm:pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <i className={`ri-${showPassword ? 'eye-off' : 'eye'}-line text-base sm:text-lg`}></i>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-700">
                    Forgot password?
                  </Link>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 sm:mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <i className="ri-google-fill text-base sm:text-xl text-red-500 mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">Google</span>
                  </button>
                  <button className="w-full inline-flex justify-center py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <i className="ri-github-fill text-base sm:text-xl mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">GitHub</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
