'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export interface CheckoutData {
  amount: string
  donorEmail?: string
  donorName?: string
}

export function useStripeCheckout() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createCheckoutSession = async (data: CheckoutData) => {
    setIsLoading(true)
    setError(null)

    try {
      // Call API to create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const session = await response.json()

      if (!response.ok) {
        throw new Error(session.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe checkout
      const stripe = await stripePromise

      if (!stripe) {
        throw new Error('Stripe failed to initialize')
      }

      // Redirect to Stripe hosted checkout page
      if (session.url) {
        window.location.href = session.url
      } else if (session.sessionId) {
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        })

        if (stripeError) {
          throw stripeError
        }
      }
    } catch (err: any) {
      console.error('Checkout error:', err)
      setError(err.message || 'An error occurred during checkout')
      setIsLoading(false)
    }
  }

  return {
    createCheckoutSession,
    isLoading,
    error,
  }
}
