'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Package, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/tracking', label: 'Track Shipment' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary-900">CB Exchange</span>
              <span className="hidden sm:block text-xs text-gray-500">Powered by Cosbridge Nig Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20want%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Phone className="w-4 h-4 mr-2" />
              Chat Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20want%20to%20inquire%20about%20your%20services)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
