'use client'

import { motion } from 'framer-motion'
import { MessageCircle, HelpCircle } from 'lucide-react'
import TrackingForm from '@/components/TrackingForm'

export default function TrackingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Real-Time Tracking
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Track Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-emerald-300">
                Shipment
              </span>
            </h1>
            <p className="text-xl text-primary-100/80 max-w-2xl mx-auto">
              Enter your tracking ID to see real-time updates on your cargo's journey from Vietnam to Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="section-padding bg-gray-50">
        <TrackingForm />
      </section>

      {/* Help Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Can't Find Your Tracking ID?
                </h2>
                <p className="text-gray-600 mb-4">
                  Your tracking ID was sent to you via WhatsApp when your shipment was confirmed. If you can't find it, just message us and we'll help you locate your cargo.
                </p>
                <a
                  href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20need%20help%20with%20my%20tracking%20ID)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
