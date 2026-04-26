'use client'

import { useState } from 'react'
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Ship, Plane } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type ShipmentStatus = 'processing' | 'in-transit' | 'customs' | 'out-for-delivery' | 'delivered'

interface TrackingEvent {
  date: string
  time: string
  status: string
  location: string
  description: string
}

interface ShipmentData {
  trackingId: string
  status: ShipmentStatus
  origin: string
  destination: string
  estimatedDelivery: string
  progress: number
  currentLocation: string
  shipmentType: 'sea' | 'air'
  events: TrackingEvent[]
}

// Mock data for demonstration
const mockShipments: Record<string, ShipmentData> = {
  'CB2024001234': {
    trackingId: 'CB2024001234',
    status: 'in-transit',
    origin: 'Ho Chi Minh City, Vietnam',
    destination: 'Lagos, Nigeria',
    estimatedDelivery: 'March 25, 2024',
    progress: 65,
    currentLocation: 'Singapore Port',
    shipmentType: 'sea',
    events: [
      { date: 'Mar 18', time: '14:30', status: 'In Transit', location: 'Singapore Port', description: 'Cargo arrived at Singapore for transfer' },
      { date: 'Mar 15', time: '09:00', status: 'Departed', location: 'Ho Chi Minh Port', description: 'Vessel departed from origin port' },
      { date: 'Mar 14', time: '16:45', status: 'Loaded', location: 'Ho Chi Minh Port', description: 'Cargo loaded onto vessel' },
      { date: 'Mar 12', time: '10:00', status: 'Cleared', location: 'Vietnam Customs', description: 'Export customs clearance completed' },
      { date: 'Mar 10', time: '08:30', status: 'Received', location: 'CB Warehouse', description: 'Cargo received at our warehouse' },
    ],
  },
  'CB2024005678': {
    trackingId: 'CB2024005678',
    status: 'customs',
    origin: 'Hanoi, Vietnam',
    destination: 'Accra, Ghana',
    estimatedDelivery: 'March 22, 2024',
    progress: 80,
    currentLocation: 'Tema Port, Ghana',
    shipmentType: 'sea',
    events: [
      { date: 'Mar 19', time: '11:00', status: 'Customs', location: 'Tema Port', description: 'Import customs processing in progress' },
      { date: 'Mar 18', time: '06:30', status: 'Arrived', location: 'Tema Port', description: 'Vessel arrived at destination port' },
      { date: 'Mar 10', time: '14:00', status: 'In Transit', location: 'Indian Ocean', description: 'Cargo in transit' },
      { date: 'Mar 05', time: '09:00', status: 'Departed', location: 'Haiphong Port', description: 'Vessel departed from origin' },
    ],
  },
  'CB2024009999': {
    trackingId: 'CB2024009999',
    status: 'delivered',
    origin: 'Ho Chi Minh City, Vietnam',
    destination: 'Abuja, Nigeria',
    estimatedDelivery: 'March 15, 2024',
    progress: 100,
    currentLocation: 'Delivered',
    shipmentType: 'air',
    events: [
      { date: 'Mar 15', time: '14:00', status: 'Delivered', location: 'Abuja', description: 'Package delivered successfully' },
      { date: 'Mar 15', time: '08:00', status: 'Out for Delivery', location: 'Abuja', description: 'Package out for final delivery' },
      { date: 'Mar 14', time: '16:00', status: 'Cleared', location: 'Abuja Airport', description: 'Import customs cleared' },
      { date: 'Mar 14', time: '10:00', status: 'Arrived', location: 'Abuja Airport', description: 'Flight arrived at destination' },
      { date: 'Mar 13', time: '22:00', status: 'Departed', location: 'Ho Chi Minh Airport', description: 'Flight departed' },
    ],
  },
}

const statusConfig: Record<ShipmentStatus, { label: string; color: string; bgColor: string }> = {
  'processing': { label: 'Processing', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  'in-transit': { label: 'In Transit', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  'customs': { label: 'Customs Clearance', color: 'text-orange-600', bgColor: 'bg-orange-100' },
  'out-for-delivery': { label: 'Out for Delivery', color: 'text-purple-600', bgColor: 'bg-purple-100' },
  'delivered': { label: 'Delivered', color: 'text-green-600', bgColor: 'bg-green-100' },
}

const TrackingForm = () => {
  const [trackingId, setTrackingId] = useState('')
  const [shipment, setShipment] = useState<ShipmentData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setShipment(null)
    
    if (!trackingId.trim()) {
      setError('Please enter a tracking ID')
      return
    }

    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const result = mockShipments[trackingId.toUpperCase()]
    
    if (result) {
      setShipment(result)
    } else {
      setError('Tracking ID not found. Please check and try again, or contact support.')
    }
    
    setLoading(false)
  }

  return (
    <div className="space-y-8">
      {/* Search Form */}
      <form onSubmit={handleTrack} className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter your tracking ID (e.g., CB2024001234)"
            className="w-full px-6 py-5 pl-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-300"
          />
          <Package className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Tracking...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Track
              </>
            )}
          </button>
        </div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-500 text-center"
          >
            {error}
          </motion.p>
        )}
      </form>

      {/* Demo IDs */}
      <div className="text-center text-sm text-gray-500">
        <p>Try these demo tracking IDs:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {Object.keys(mockShipments).map((id) => (
            <button
              key={id}
              onClick={() => setTrackingId(id)}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg font-mono text-gray-700 transition-colors"
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {shipment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto"
          >
            {/* Status Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6 text-white">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-primary-100 text-sm">Tracking ID</p>
                    <p className="text-2xl font-bold font-mono">{shipment.trackingId}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full ${statusConfig[shipment.status].bgColor}`}>
                    <span className={`font-semibold ${statusConfig[shipment.status].color}`}>
                      {statusConfig[shipment.status].label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {shipment.shipmentType === 'sea' ? (
                      <Ship className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plane className="w-5 h-5 text-primary-600" />
                    )}
                    <span className="text-gray-600 capitalize">{shipment.shipmentType} Freight</span>
                  </div>
                  <span className="font-semibold text-primary-600">{shipment.progress}% Complete</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${shipment.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </div>
              </div>

              {/* Route Info */}
              <div className="px-8 py-6 grid sm:grid-cols-3 gap-6 border-b border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">From</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-gray-900">{shipment.origin}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">To</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent-500" />
                    <span className="font-medium text-gray-900">{shipment.destination}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">{shipment.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Current Location */}
              <div className="px-8 py-6 bg-primary-50 border-b border-primary-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">Current Location</p>
                    <p className="font-semibold text-primary-900">{shipment.currentLocation}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="px-8 py-6">
                <h3 className="font-semibold text-gray-900 mb-6">Shipment History</h3>
                <div className="space-y-6">
                  {shipment.events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        {index < shipment.events.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 my-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{event.status}</span>
                          <span className="text-sm text-gray-500">{event.date} at {event.time}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TrackingForm
