'use client'

import { Shield, Zap, Eye, Headphones, Package, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Verified',
    description: 'We verify all suppliers and protect you from scams. Your money is safe with us.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient shipping routes ensure your goods arrive quickly and safely.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Track your shipment in real-time. No hidden fees, no surprises.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our team is always available to assist you via WhatsApp anytime.',
  },
  {
    icon: Package,
    title: 'End-to-End Service',
    description: 'From sourcing to delivery, we handle everything so you can focus on your business.',
  },
  {
    icon: Award,
    title: 'Best Rates',
    description: 'Competitive pricing for shipping and USDT exchange. Get more value.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='[w3.org](http://www.w3.org/2000/svg)'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Why CB Exchange
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-primary-100/80 max-w-2xl mx-auto">
            We're committed to making your import journey smooth, safe, and successful
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-primary-100/70 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
