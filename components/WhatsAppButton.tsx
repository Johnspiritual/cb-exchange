'use client'

import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <a
      href="[wa.me](https://wa.me/2348101229792?text=Hello%20CB%20Exchange,%20I%20want%20to%20inquire%20about%20your%20services)"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
      </div>
    </a>
  )
}

export default WhatsAppButton
