
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{fontFamily: 'Pacifico, serif'}}>VirtualPay</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Leading virtual card provider offering secure, worldwide transactions with advanced financial technology solutions for businesses and individuals.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm sm:text-base"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-sm sm:text-base"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-sm sm:text-base"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Virtual Cards</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Payment Processing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Business Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">API Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Products</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">&copy; 2025 VirtualPay. All rights reserved. Secure worldwide virtual card solutions.</p>
        </div>
      </div>
    </footer>
  );
}
