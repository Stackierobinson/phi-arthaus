import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const dynamic = 'force-dynamic' // Always fetch fresh data

export async function GET() {
  try {
    // Fetch all successful payment intents
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100, // Adjust as needed, or paginate for more
    })

    // Sum up all successful payments (in cents)
    const totalCents = paymentIntents.data
      .filter((pi) => pi.status === 'succeeded')
      .reduce((sum, pi) => sum + pi.amount, 0)

    // Convert to dollars
    const totalDollars = totalCents / 100

    // Calculate progress toward $300,000 goal
    const goal = 300000
    const percentage = Math.min((totalDollars / goal) * 100, 100)

    return NextResponse.json({
      total: totalDollars,
      goal: goal,
      percentage: percentage.toFixed(2),
      donorCount: paymentIntents.data.filter((pi) => pi.status === 'succeeded').length,
      formatted: `$${totalDollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    })
  } catch (error: any) {
    console.error('Error fetching donation total:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donation data', total: 0, goal: 300000, percentage: 0 },
      { status: 500 }
    )
  }
}
