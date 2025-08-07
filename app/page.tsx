
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Slider from '@/components/Slider';
import Link from 'next/link';

export default function Home() {
  const heroSlides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20financial%20technology%20with%20virtual%20payment%20cards%20floating%20in%20a%20clean%20minimalist%20environment%2C%20professional%20banking%20atmosphere%20with%20soft%20lighting%20and%20geometric%20patterns%2C%20high-tech%20fintech%20visualization%20with%20blue%20and%20purple%20gradient%20backgrounds&width=1920&height=800&seq=slide1&orientation=landscape',
      title: 'Secure Virtual Cards for Worldwide Transactions',
      description: 'Experience the future of digital payments with our advanced virtual card solutions. Safe, instant, and accepted globally for all your business and personal needs.',
      buttonText: 'Get Your Virtual Card',
      buttonLink: '/products'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Global%20payment%20network%20visualization%20with%20interconnected%20nodes%20and%20digital%20money%20flow%20across%20world%20map%2C%20futuristic%20financial%20technology%20with%20glowing%20connections%20and%20data%20streams%2C%20professional%20fintech%20design&width=1920&height=800&seq=slide2&orientation=landscape',
      title: 'Global Payment Solutions',
      description: 'Connect with customers worldwide through our secure virtual card platform. Process payments in 150+ countries with bank-level security and instant settlement.',
      buttonText: 'Learn More',
      buttonLink: '/services'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Advanced%20cybersecurity%20shield%20protecting%20digital%20transactions%2C%20modern%20banking%20security%20visualization%20with%20encryption%20symbols%20and%20protected%20data%20flow%2C%20professional%20financial%20technology%20design&width=1920&height=800&seq=slide3&orientation=landscape',
      title: 'Bank-Level Security',
      description: 'Your transactions are protected by advanced encryption and fraud detection systems. Experience peace of mind with every payment you make.',
      buttonText: 'See Security Features',
      buttonLink: '/about'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
    
      
      {/* Hero Slider Section */}
      <section className="pt-16 sm:pt-20 pb-4 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
            <Slider 
              slides={heroSlides}
              autoplay={true}
              interval={6000}
              showDots={true}
              showArrows={true}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                Why Choose VirtualPay?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
                Experience the perfect blend of security, convenience, and global accessibility with our cutting-edge virtual card technology.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: 'ri-shield-check-fill',
                title: 'Bank-Level Security',
                description: 'Advanced encryption and fraud protection keep your transactions safe worldwide.',
                color: 'text-green-600 bg-green-100'
              },
              {
                icon: 'ri-flashlight-fill',
                title: 'Instant Activation',
                description: 'Get your virtual card ready in seconds. No waiting, no delays, just instant access.',
                color: 'text-orange-600 bg-orange-100'
              },
              {
                icon: 'ri-global-fill',
                title: 'Global Acceptance',
                description: 'Use anywhere worldwide. Compatible with all major payment processors and merchants.',
                color: 'text-blue-600 bg-blue-100'
              }
            ].map((feature, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6`}>
                    <i className={`${feature.icon} text-xl sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center text-white">
            {[
              { number: '500K+', label: 'Active Users' },
              { number: '$2B+', label: 'Transactions Processed' },
              { number: '150+', label: 'Countries Supported' },
              { number: '99.9%', label: 'Uptime Guarantee' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="py-4 sm:py-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base lg:text-xl opacity-90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 px-4">
              Join thousands of businesses and individuals who trust VirtualPay for their worldwide payment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/signup" className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Start Free Trial
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact Sales
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
