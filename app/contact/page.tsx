'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        { label: 'Nigeria', value: '+234 810 122 9792', href: 'tel:+2348101229792' },
        { label: 'Vietnam', value: '+84 776 273 915', href: 'tel:+84776273915' },
      ],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: [
        { label: 'Quick Chat', value: '+234 810 122 9792', href: '[wa.me](https://wa.me/2348101229792)' },
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { label: 'General Inquiries', value: 'info@cbexchange.com', href: 'mailto:info@cbexchange.com' },
      ],
    },
    {
      icon: MapPin,
      title: 'Locations',
      details: [
        { label: 'Nigeria Office', value: 'Lagos, Nigeria', href: '#' },
        { label: 'Vietnam Office', value: 'Ho Chi Minh City', href: '#' },
      ],
    },
  ]

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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-emerald-300">
                Us
              </span>
            </h1>
            <p className="text-xl text-primary-100/80 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out via WhatsApp for the fastest response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick WhatsApp CTA */}
      <section className="bg-green-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-medium">Get a response within minutes on WhatsApp!</span>
            </div>
            <a
              href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20have%20an%20inquiry)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Reach Out to Us
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We're available 24/7 to assist you with your import needs. Choose your preferred method of contact below.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <div className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <div key={idx}>
                          <p className="text-sm text-gray-500">{detail.label}</p>
                          <a
                            href={detail.href}
                            target={detail.href.startsWith('http') ? '_blank' : undefined}
                            rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                          >
                            {detail.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <a
                      href="[wa.me](https://wa.me/2348101229792)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp for Faster Response
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                            placeholder="+234..."
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="cargo">Cargo Shipping</option>
                          <option value="sourcing">Supplier Sourcing</option>
                          <option value="payment">USDT Payment Services</option>
                          <option value="all">All Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <p className="text-gray-500 text-sm mb-3">
                        Prefer instant communication?
                      </p>
                      <a
                        href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20have%20an%20inquiry)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
