'use client'

import Link from 'next/link'
import { Package, MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">CB Exchange</span>
                <span className="block text-xs text-primary-300">Powered by Cosbridge Nig Ltd</span>
              </div>
            </div>
            <p className="text-primary-200/70 leading-relaxed">
              Your trusted partner for cargo shipping, supplier sourcing, and payment services from Vietnam to Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Track Shipment', href: '/tracking' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-200/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Cargo Shipping',
                'Supplier Sourcing',
                'Factory Verification',
                'USDT Payments',
                'Customs Clearance',
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-primary-200/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-primary-200/70">Lagos, Nigeria & Ho Chi Minh, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <div className="text-primary-200/70">
                  <a href="tel:+2348101229792" className="hover:text-white transition-colors block">+234 810 122 9792</a>
                  <a href="tel:+84776273915" className="hover:text-white transition-colors block">+84 776 273 915</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:info@cbexchange.com" className="text-primary-200/70 hover:text-white transition-colors">
                  info@cbexchange.com
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="[wa.me](https://wa.me/2348101229792)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-200/60 text-sm">
              © {currentYear} CB Exchange (Cosbridge Nig Ltd). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-200/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-200/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
