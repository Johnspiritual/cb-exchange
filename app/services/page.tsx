'use client'

import { Ship, Search, Wallet, CheckCircle, ArrowRight, MessageCircle, Package, Shield, Truck, CreditCard, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'cargo',
    icon: Ship,
    title: 'Cargo Shipping',
    subtitle: 'Vietnam to Africa Door-to-Door',
    description: 'We handle the complete logistics of getting your goods from Vietnam manufacturers to your doorstep in Africa. Our established routes and partnerships ensure fast, safe, and cost-effective delivery.',
    features: [
      { icon: Package, text: 'Full container and LCL options' },
      { icon: Globe, text: 'Air and sea freight available' },
      { icon: Shield, text: 'Insurance coverage included' },
      { icon: Truck, text: 'Door-to-door delivery' },
    ],
    benefits: [
      'Consolidated shipping for cost savings',
      'Real-time tracking for all shipments',
      'Customs clearance assistance',
      'Warehousing in Vietnam',
      'Quality inspection before shipping',
      'Flexible payment options',
    ],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find Trusted Vietnamese Suppliers',
    description: 'Stop getting scammed by fake suppliers. We verify factories, check quality, and connect you with legitimate manufacturers in Vietnam. Our on-ground team visits facilities personally.',
    features: [
      { icon: Shield, text: 'Factory verification visits' },
      { icon: Users, text: 'Background checks on suppliers' },
      { icon: Package, text: 'Sample procurement' },
      { icon: CreditCard, text: 'Price negotiation' },
    ],
    benefits: [
      'Personal factory visits and video calls',
      'Product quality verification',
      'Price comparison across suppliers',
      'MOQ negotiation support',
      'Communication translation',
      'Ongoing supplier relationship management',
    ],
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'payments',
    icon: Wallet,
    title: 'Payment Services',
    subtitle: 'USDT & Crypto Payments',
    description: 'Pay your suppliers quickly and securely using USDT. We offer competitive exchange rates and help facilitate payments so your suppliers receive funds fast without banking delays.',
    features: [
      { icon: CreditCard, text: 'Buy USDT at best rates' },
      { icon: Shield, text: 'Secure escrow available' },
      { icon: Globe, text: 'International transfers' },
      { icon: Users, text: 'Supplier payment assistance' },
    ],
    benefits: [
      'Competitive USDT exchange rates',
      'Same-day supplier payments',
      'No international transfer delays',
      'Transaction records provided',
      'Escrow protection available',
      'Multiple payment methods accepted',
    ],
    gradient: 'from-purple-500 to-purple-700',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-emerald-300">
                Import Successfully
              </span>
            </h1>
            <p className="text-xl text-primary-100/80 max-w-3xl mx-auto">
              From finding suppliers to delivering products to your doorstep, we handle the entire import process so you can focus on growing your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-primary-600 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I)'m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </motion.div>

              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-primary-100/80 mb-8">
              Chat with us and we'll help you figure out the best solution for your import needs.
            </p>
            <a
              href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20need%20help%20understanding%20your%20services)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
