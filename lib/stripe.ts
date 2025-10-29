import Stripe from 'stripe'

// Lazy initialization to avoid build-time errors
let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      typescript: true,
    })
  }
  return stripeInstance
}

// For backward compatibility
export const stripe = new Proxy({} as Stripe, {
  get: (target, prop) => {
    return getStripe()[prop as keyof Stripe]
  },
})

// Donation amount presets (in cents)
export const DONATION_AMOUNTS = {
  PATRON: 50000, // $500
  BENEFACTOR: 250000, // $2,500
  VISIONARY: 1000000, // $10,000
}

// Convert amount string to cents
export function amountToCents(amount: string): number {
  const cleanAmount = amount.replace(/[$,]/g, '')
  const numAmount = parseFloat(cleanAmount)
  return Math.round(numAmount * 100)
}

// Format cents to dollar string
export function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}
