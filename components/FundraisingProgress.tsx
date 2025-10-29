'use client'

import { useEffect, useState } from 'react'

interface DonationData {
  total: number
  goal: number
  percentage: string
  donorCount: number
  formatted: string
}

export default function FundraisingProgress() {
  const [data, setData] = useState<DonationData>({
    total: 0,
    goal: 300000,
    percentage: '0',
    donorCount: 0,
    formatted: '$0.00',
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/donations/total')
        if (response.ok) {
          const result = await response.json()
          setData(result)
        } else {
          setError(true)
        }
      } catch (err) {
        console.error('Error fetching donation data:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Refresh every 30 seconds to show live updates
    const interval = setInterval(fetchData, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-white p-8 border-l-4 border-basquiat-yellow animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-16 bg-gray-200 rounded"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white p-8 border-l-4 border-kahlo-coral">
        <p className="text-gray-600">Unable to load fundraising data. Check back soon!</p>
      </div>
    )
  }

  const percentage = parseFloat(data.percentage)

  return (
    <div className="bg-white p-8 border-l-4 border-basquiat-yellow shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-light tracking-wide mb-2">
            Live Fundraising Progress
          </h3>
          <p className="text-gray-600 text-sm">Updated in real-time</p>
        </div>
        <div className="w-3 h-3 bg-warhol-pink rounded-full animate-pulse"></div>
      </div>

      {/* Amount Raised */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-5xl font-bold text-warhol-pink">
            {data.formatted}
          </span>
          <span className="text-2xl text-gray-500">
            / ${data.goal.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          {data.donorCount} {data.donorCount === 1 ? 'donor' : 'donors'} • {percentage.toFixed(1)}% of goal
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-basquiat-yellow via-warhol-pink to-electric-purple transition-all duration-1000 ease-out relative"
            style={{ width: `${percentage}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Percentage Label */}
        {percentage > 5 && (
          <div
            className="absolute top-0 h-4 flex items-center"
            style={{ left: `${percentage}%` }}
          >
            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded -translate-x-1/2 -translate-y-6 font-bold">
              {percentage.toFixed(1)}%
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-gray-700 text-sm leading-relaxed">
          Every dollar brings us closer to launching PHI ArtHaus in August 2027.
          Your donation transforms lives through arts education.
        </p>
      </div>
    </div>
  )
}
