'use client'

import { MessageCircle, Package, CreditCard, Truck, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Contact Us',
    description: 'Reach out via WhatsApp with your requirements. Tell us what you want to buy.',
  },
  {
    icon: Package,
    number: '02',
    title: 'We Source & Verify',
    description: 'We find trusted suppliers, verify the factory, and negotiate the best price.',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Make Payment',
    description: 'Pay securely using USDT or your preferred method. We assist with the process.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'We Ship to You',
    description: 'Your goods are shipped directly to your doorstep with full tracking.',
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Receive & Enjoy',
    description: 'Receive your goods, inspect, and start selling. We\'re here for support.',
  },
]

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Five simple steps to get your goods from Vietnam to your doorstep
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-300 to-primary-200" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 relative z-10">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg z-20">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20want%20to%20start%20importing)"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Your Order Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
