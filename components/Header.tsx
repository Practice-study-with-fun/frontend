
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuthStatus = () => {
      const userToken = localStorage.getItem('userToken');
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      setIsLoggedIn(userToken && isAuthenticated === 'true');
    };
    
    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-indigo-600" style={{fontFamily: 'Pacifico, serif'}}>
            VirtualPay
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">Services</Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">Contact</Link>
            {isLoggedIn && (
              <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm xl:text-base">Dashboard</Link>
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer text-sm xl:text-base"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/signin" className="text-gray-700 hover:text-indigo-600 transition-colors whitespace-nowrap text-sm xl:text-base">Sign In</Link>
                <Link href="/signup" className="bg-indigo-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer text-sm xl:text-base">Sign Up</Link>
              </>
            )}
          </div>

          <button 
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-lg mx-4">
            <div className="flex flex-col space-y-3 pt-4 px-4">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Services</Link>
              <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Contact</Link>
              {isLoggedIn && (
                <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Dashboard</Link>
              )}
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors text-center whitespace-nowrap cursor-pointer"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link href="/signin" className="text-gray-700 hover:text-indigo-600 transition-colors py-2 text-center">Sign In</Link>
                    <Link href="/signup" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors text-center whitespace-nowrap cursor-pointer">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
