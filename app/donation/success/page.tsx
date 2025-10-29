'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-basquiat-yellow to-warhol-pink rounded-full mx-auto flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-light tracking-wider mb-6">
          Thank You for Your Generosity!
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your donation is transforming the lives of young artists in Georgia. You're helping us build
          a world-class arts education program that will empower students for generations to come.
        </p>

        <div className="bg-gray-50 p-8 mb-8 border-l-4 border-basquiat-yellow">
          <h2 className="text-2xl font-light mb-4">What Happens Next?</h2>
          <ul className="text-left text-gray-600 space-y-3 leading-relaxed">
            <li>✓ You'll receive a tax receipt via email within 24 hours</li>
            <li>✓ Your donation will be added to our fundraising progress</li>
            <li>✓ You'll receive quarterly updates on student progress and milestones</li>
            <li>✓ You're now part of the PHI ArtHaus founding donor community</li>
          </ul>
        </div>

        {sessionId && (
          <p className="text-sm text-gray-500 mb-8">
            Reference ID: {sessionId}
          </p>
        )}

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-gray-900 text-white px-12 py-4 tracking-widest uppercase hover:bg-gray-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="#donate"
            className="bg-white text-gray-900 px-12 py-4 tracking-widest uppercase border-2 border-gray-900 hover:bg-gray-50 transition-colors"
          >
            Share With Friends
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-br from-basquiat-cyan/10 to-warhol-pink/10">
          <p className="text-gray-600 italic">
            "The purpose of art is washing the dust of daily life off our souls." — Pablo Picasso
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DonationSuccess() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
