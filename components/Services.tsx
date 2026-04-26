'use client'

import { Ship, Search, Wallet, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Ship,
    title: 'Cargo Shipping',
    subtitle: 'Vietnam to Africa',
    description: 'Fast and reliable door-to-door delivery from Vietnam to any African destination.',
    features: [
      'Door-to-door delivery',
      'Customs clearance assistance',
      'Freight consolidation',
      'Real-time tracking',
    ],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find Trusted Partners',
    description: 'We find, verify, and connect you with legitimate suppliers and manufacturers in Vietnam.',
    features: [
      'Factory verification',
      'Product quality checks',
      'Price negotiation',
      'Scam protection',
    ],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Wallet,
    title: 'Payment Services',
    subtitle: 'USDT Payments',
    description: 'Secure and fast crypto payment solutions to pay your suppliers without hassle.',
    features: [
      'Buy & sell USDT',
      'Supplier payments',
      'Competitive rates',
      'Instant processing',
    ],
    gradient: 'from-purple-500 to-indigo-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete end-to-end solutions for importing goods from Vietnam to Africa
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {service.subtitle}
              </p>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA FIXED */}
              <a
                href={`https://wa.me/2348101229792?text=${encodeURIComponent(
                  `Hello CB Exchange, I'm interested in your ${service.title} service`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services