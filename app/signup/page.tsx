
'use client';

import Header from '@/components/Header';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-sm sm:text-base text-gray-600">Join VirtualPay and start using secure virtual cards</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>

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
                      placeholder="Create a strong password"
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input 
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base pr-10 sm:pr-12"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <i className={`ri-${showConfirmPassword ? 'eye-off' : 'eye'}-line text-base sm:text-lg`}></i>
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="ml-3">
                    <p className="text-xs sm:text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-indigo-600 hover:text-indigo-700">Terms of Service</Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</Link>
                    </p>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="w-full bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Create Account
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
                  Already have an account?{' '}
                  <Link href="/signin" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Sign in
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
