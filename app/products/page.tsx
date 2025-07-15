'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Slider from '@/components/Slider';
import Link from 'next/link';

export default function Products() {
  const productSlides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Elegant%20personal%20virtual%20credit%20card%20design%20with%20modern%20minimalist%20style%2C%20individual%20user%20focused%20financial%20product%2C%20clean%20professional%20appearance%20with%20personal%20branding%20elements&width=1920&height=600&seq=personal-card&orientation=landscape',
      title: 'Personal Virtual Cards',
      description: 'Perfect for individuals who want secure online shopping and subscription management with full control over their spending.',
      buttonText: 'Get Personal Card',
      buttonLink: '/signup'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Business%20virtual%20card%20with%20team%20management%20dashboard%20visualization%2C%20corporate%20financial%20tools%20and%20expense%20tracking%2C%20professional%20business%20payment%20solution%20design&width=1920&height=600&seq=business-card&orientation=landscape',
      title: 'Business Solutions',
      description: 'Streamline your business expenses with team management, advanced controls, and comprehensive reporting tools.',
      buttonText: 'Start Business Trial',
      buttonLink: '/signup'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Enterprise-level%20virtual%20payment%20system%20with%20advanced%20analytics%20and%20corporate%20integrations%2C%20large-scale%20financial%20management%20platform%2C%20professional%20enterprise%20design&width=1920&height=600&seq=enterprise-card&orientation=landscape',
      title: 'Enterprise Platform',
      description: 'Complete enterprise solution with unlimited cards, custom integrations, and dedicated support for large organizations.',
      buttonText: 'Contact Sales',
      buttonLink: '/contact'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Virtual Card Products
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of virtual card products designed for different needs and budgets. All cards come with worldwide acceptance and bank-level security.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Slider */}
      <section className="pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <Slider 
              slides={productSlides}
              autoplay={true}
              interval={7000}
              showDots={true}
              showArrows={true}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Personal Card',
                price: '$5',
                period: 'per month',
                description: 'Perfect for individuals who want secure online shopping and subscription management.',
                features: [
                  '1 Virtual Card',
                  'Unlimited transactions',
                  'Mobile app access',
                  'Basic spending controls',
                  '24/7 email support',
                  'Transaction notifications'
                ],
                popular: false,
                buttonText: 'Get Personal Card',
                color: 'border-gray-200 hover:border-indigo-300'
              },
              {
                name: 'Business Card',
                price: '$25',
                period: 'per month',
                description: 'Ideal for small to medium businesses with team expense management needs.',
                features: [
                  '5 Virtual Cards',
                  'Team management dashboard',
                  'Advanced spending controls',
                  'Expense reporting',
                  'API access',
                  'Priority phone support',
                  'Custom card limits',
                  'Multi-currency support'
                ],
                popular: true,
                buttonText: 'Get Business Card',
                color: 'border-indigo-500 ring-4 ring-indigo-100'
              },
              {
                name: 'Enterprise Card',
                price: '$99',
                period: 'per month',
                description: 'Comprehensive solution for large organizations with advanced requirements.',
                features: [
                  'Unlimited Virtual Cards',
                  'Advanced team management',
                  'Custom integrations',
                  'Dedicated account manager',
                  'White-label options',
                  '24/7 priority support',
                  'Advanced analytics',
                  'Custom approval workflows',
                  'SLA guarantee'
                ],
                popular: false,
                buttonText: 'Contact Sales',
                color: 'border-gray-200 hover:border-purple-300'
              }
            ].map((product, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className={`bg-white p-8 rounded-2xl border-2 ${product.color} transition-all duration-300 hover:shadow-xl relative`}>
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-gray-500 ml-2">{product.period}</span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-check-line text-sm"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    product.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {product.buttonText}
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Features Comparison</h2>
              <p className="text-xl text-gray-600">Compare all features across our virtual card products</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-gray-900">Personal</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-indigo-600">Business</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { feature: 'Number of Virtual Cards', personal: '1', business: '5', enterprise: 'Unlimited' },
                      { feature: 'Transaction Limits', personal: '$5,000/month', business: '$50,000/month', enterprise: 'Custom' },
                      { feature: 'Team Management', personal: '✗', business: '✓', enterprise: '✓' },
                      { feature: 'API Access', personal: '✗', business: '✓', enterprise: '✓' },
                      { feature: 'Custom Integrations', personal: '✗', business: 'Limited', enterprise: '✓' },
                      { feature: 'Dedicated Support', personal: '✗', business: '✗', enterprise: '✓' },
                      { feature: 'Advanced Analytics', personal: '✗', business: 'Basic', enterprise: 'Advanced' },
                      { feature: 'White-label Options', personal: '✗', business: '✗', enterprise: '✓' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.personal}</td>
                        <td className="px-6 py-4 text-center text-indigo-600 font-semibold">{row.business}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Using Virtual Cards Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get instant access to secure virtual cards with worldwide acceptance. No setup fees, no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Start Free Trial
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap cursor-pointer">
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