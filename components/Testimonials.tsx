'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Chukwuemeka Okonkwo',
    location: 'Lagos, Nigeria',
    business: 'Electronics Importer',
    image: '/testimonials/user1.jpg',
    rating: 5,
    text: 'CB Exchange changed my business completely. I was scammed twice before I found them. Now I import phones from Vietnam with zero stress. Their supplier verification is top-notch!',
  },
  {
    name: 'Amina Bello',
    location: 'Kano, Nigeria',
    business: 'Fashion Retailer',
    image: '/testimonials/user2.jpg',
    rating: 5,
    text: 'The USDT payment service is a game changer! I used to struggle with international transfers. Now my suppliers get paid within hours. Highly recommend!',
  },
  {
    name: 'Daniel Asante',
    location: 'Accra, Ghana',
    business: 'Auto Parts Dealer',
    image: '/testimonials/user3.jpg',
    rating: 5,
    text: 'Fast shipping, great communication, and the tracking feature keeps me updated always. My customers are happy because I can tell them exactly when stock arrives.',
  },
  {
    name: 'Blessing Eze',
    location: 'Port Harcourt, Nigeria',
    business: 'Hair & Beauty',
    image: '/testimonials/user4.jpg',
    rating: 5,
    text: 'I started with a small order to test them. Now I ship containers every month! Their team on WhatsApp responds within minutes, even at night.',
  },
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real importers who trust CB Exchange
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                  <div className="text-sm text-primary-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
