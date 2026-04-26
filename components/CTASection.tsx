'use client'

import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  'Free consultation',
  'No upfront fees',
  'Quick response time',
  '24/7 WhatsApp support',
]

const CTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Start Today
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Import from Vietnam{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-emerald-300">
                Without Stress?
              </span>
            </h2>

            <p className="text-xl text-primary-100/80 max-w-2xl mx-auto mb-8">
              Chat with us now and let's get your goods moving. No complicated forms, just a simple conversation.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent-400 mr-2" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20want%20to%20start%20importing%20from%20Vietnam)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Phone numbers */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-primary-100/70 text-sm mb-2">Or call us directly:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+2348101229792" className="text-white font-semibold hover:text-accent-300 transition-colors">
                  🇳🇬 +234 810 122 9792
                </a>
                <a href="tel:+84776273915" className="text-white font-semibold hover:text-accent-300 transition-colors">
                  🇻🇳 +84 776 273 915
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
