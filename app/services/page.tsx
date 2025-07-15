'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive virtual card solutions designed to meet all your payment needs with unmatched security and global reach.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollAnimation animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Virtual Card Solutions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Generate instant virtual cards for online purchases, subscriptions, and business expenses. 
                  Each card comes with customizable spending limits and enhanced security features.
                </p>
                <ul className="space-y-4">
                  {[
                    'Instant card generation in seconds',
                    'Customizable spending limits and controls',
                    'Real-time transaction monitoring',
                    'Temporary and permanent card options',
                    'Multi-currency support for global transactions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-sm"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInRight">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20virtual%20credit%20card%20interface%20on%20modern%20smartphone%20screen%20with%20digital%20payment%20dashboard%2C%20sleek%20fintech%20app%20design%20showing%20card%20management%20features%20and%20transaction%20history%20in%20clean%20minimalist%20style&width=600&height=500&seq=service1&orientation=landscape"
                alt="Virtual Card Interface"
                className="w-full h-auto rounded-2xl shadow-xl object-top"
              />
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollAnimation animation="fadeInLeft">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20payment%20processing%20system%20with%20global%20network%20visualization%2C%20secure%20transaction%20flow%20diagram%20with%20encryption%20symbols%20and%20worldwide%20connectivity%2C%20professional%20fintech%20infrastructure%20illustration&width=600&height=500&seq=service2&orientation=landscape"
                alt="Payment Processing"
                className="w-full h-auto rounded-2xl shadow-xl object-top lg:order-2"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInRight">
              <div className="lg:order-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Payment Processing</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Advanced payment processing infrastructure that handles millions of transactions securely. 
                  Compatible with all major payment networks worldwide.
                </p>
                <ul className="space-y-4">
                  {[
                    '99.9% uptime with redundant systems',
                    'Sub-second transaction processing',
                    'Advanced fraud detection and prevention',
                    'PCI DSS Level 1 compliance',
                    'Real-time settlement and reporting'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-sm"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Categories</h2>
              <p className="text-xl text-gray-600">Choose the perfect solution for your specific needs</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-building-line',
                title: 'Business Solutions',
                description: 'Corporate virtual cards with advanced expense management, team controls, and detailed reporting.',
                features: ['Team card management', 'Expense tracking', 'Budget controls', 'Integration APIs'],
                color: 'border-blue-200 hover:border-blue-400'
              },
              {
                icon: 'ri-user-line',
                title: 'Personal Cards',
                description: 'Individual virtual cards for personal online shopping, subscriptions, and secure transactions.',
                features: ['Personal spending limits', 'Transaction alerts', 'Merchant blocking', 'Mobile app access'],
                color: 'border-green-200 hover:border-green-400'
              },
              {
                icon: 'ri-code-line',
                title: 'Developer API',
                description: 'Comprehensive API for developers to integrate virtual card functionality into their applications.',
                features: ['RESTful API', 'SDK libraries', 'Webhook support', '24/7 developer support'],
                color: 'border-purple-200 hover:border-purple-400'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Security Services',
                description: 'Advanced security features including fraud detection, risk management, and compliance tools.',
                features: ['Real-time monitoring', 'Fraud prevention', 'Risk scoring', 'Compliance reporting'],
                color: 'border-red-200 hover:border-red-400'
              },
              {
                icon: 'ri-global-line',
                title: 'Multi-Currency',
                description: 'Support for multiple currencies with competitive exchange rates and global acceptance.',
                features: ['150+ currencies', 'Real-time rates', 'Currency conversion', 'Global acceptance'],
                color: 'border-orange-200 hover:border-orange-400'
              },
              {
                icon: 'ri-customer-service-line',
                title: '24/7 Support',
                description: 'Round-the-clock customer support with dedicated account managers for enterprise clients.',
                features: ['Live chat support', 'Phone assistance', 'Email support', 'Dedicated managers'],
                color: 'border-indigo-200 hover:border-indigo-400'
              }
            ].map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className={`bg-white p-8 rounded-2xl border-2 ${service.color} transition-all duration-300 hover:shadow-lg`}>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-2xl text-gray-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          <i className="ri-check-line text-xs text-gray-600"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose the service that best fits your needs and start using virtual cards today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                View Products
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}