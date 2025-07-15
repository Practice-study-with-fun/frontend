'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About VirtualPay
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading the future of digital payments with secure, innovative virtual card solutions trusted by businesses and individuals worldwide.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollAnimation animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe financial technology should be accessible, secure, and seamless for everyone. 
                  Our mission is to revolutionize digital payments by providing cutting-edge virtual card solutions 
                  that empower businesses and individuals to transact safely across the globe.
                </p>
                <p className="text-lg text-gray-600">
                  Since our founding in 2018, we've processed over $2 billion in transactions and served 
                  more than 500,000 customers worldwide, making us one of the fastest-growing fintech companies.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInRight">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20diverse%20business%20team%20working%20together%20in%20a%20bright%20contemporary%20office%20space%20with%20financial%20technology%20displays%20and%20virtual%20payment%20systems%2C%20professional%20collaborative%20atmosphere%20with%20people%20of%20different%20backgrounds&width=600&height=500&seq=about1&orientation=landscape"
                alt="Our Team"
                className="w-full h-auto rounded-2xl shadow-xl object-top"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Security First',
                description: 'We prioritize the security and privacy of our users above all else, implementing bank-level encryption and fraud protection.',
                color: 'text-green-600 bg-green-100'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Innovation',
                description: 'We continuously push the boundaries of financial technology to create solutions that anticipate and meet evolving needs.',
                color: 'text-orange-600 bg-orange-100'
              },
              {
                icon: 'ri-heart-line',
                title: 'Customer Centric',
                description: 'Every decision we make is guided by our commitment to providing exceptional service and user experience.',
                color: 'text-red-600 bg-red-100'
              }
            ].map((value, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${value.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600">Meet the visionaries behind VirtualPay</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Co-Founder',
                bio: 'Former VP of Product at PayPal with 15+ years in fintech. Led teams that processed over $100B in transactions.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20headshot%20in%20modern%20office%20setting%2C%20confident%20female%20executive%20leader%20in%20business%20attire%20with%20warm%20approachable%20expression%2C%20corporate%20portrait%20photography&width=400&height=400&seq=ceo1&orientation=squarish'
              },
              {
                name: 'Michael Chen',
                role: 'CTO & Co-Founder',
                bio: 'Ex-Google engineer specializing in payment systems and security. Built scalable platforms serving millions of users.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20technology%20executive%20male%20headshot%20in%20modern%20tech%20office%2C%20experienced%20CTO%20with%20confident%20expression%20wearing%20business%20casual%20attire%2C%20corporate%20leadership%20portrait&width=400&height=400&seq=cto1&orientation=squarish'
              },
              {
                name: 'Emma Rodriguez',
                role: 'VP of Operations',
                bio: 'Operations expert from Goldman Sachs with deep expertise in financial compliance and risk management.',
                image: 'https://readdy.ai/api/search-image?query=Professional%20female%20business%20executive%20headshot%20in%20financial%20office%20environment%2C%20VP%20operations%20leader%20with%20professional%20attire%20and%20confident%20demeanor%2C%20corporate%20executive%20portrait&width=400&height=400&seq=vp1&orientation=squarish'
              }
            ].map((member, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
              <p className="text-xl text-white/90">Numbers that showcase our growth and commitment</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '500K+', label: 'Active Users', icon: 'ri-user-line' },
              { number: '$2B+', label: 'Transactions Processed', icon: 'ri-money-dollar-circle-line' },
              { number: '150+', label: 'Countries Supported', icon: 'ri-global-line' },
              { number: '99.9%', label: 'Uptime', icon: 'ri-shield-check-line' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${stat.icon} text-2xl`}></i>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our company history</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              {
                year: '2018',
                title: 'Company Founded',
                description: 'VirtualPay was founded with the vision to revolutionize digital payments through secure virtual card technology.'
              },
              {
                year: '2019',
                title: 'First Million Processed',
                description: 'Reached our first million dollars in transaction volume and launched our mobile app for iOS and Android.'
              },
              {
                year: '2020',
                title: 'Series A Funding',
                description: 'Raised $15M in Series A funding to expand our team and enhance our platform capabilities.'
              },
              {
                year: '2021',
                title: 'Global Expansion',
                description: 'Launched in 50+ countries and introduced multi-currency support for international transactions.'
              },
              {
                year: '2022',
                title: 'Enterprise Solutions',
                description: 'Launched comprehensive business solutions with advanced team management and API integration.'
              },
              {
                year: '2023',
                title: 'AI-Powered Security',
                description: 'Introduced machine learning-based fraud detection system, reducing fraudulent transactions by 95%.'
              },
              {
                year: '2024',
                title: 'Market Leadership',
                description: 'Achieved market leadership position with 500K+ users and $2B+ in processed transactions.'
              }
            ].map((milestone, index) => (
              <ScrollAnimation key={index} animation="fadeInLeft" delay={index * 100}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}