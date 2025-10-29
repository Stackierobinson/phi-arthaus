import { NextRequest, NextResponse } from 'next/server'
import { stripe, amountToCents } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { amount, donorEmail, donorName } = await req.json()

    if (!amount) {
      return NextResponse.json(
        { error: 'Donation amount is required' },
        { status: 400 }
      )
    }

    // Convert amount to cents
    const amountInCents = amountToCents(amount)

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to PHI ArtHaus',
              description: 'Supporting arts education for Georgia students',
              images: [], // Add your logo URL here
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/donation/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/donation/canceled`,
      customer_email: donorEmail,
      metadata: {
        donorName: donorName || 'Anonymous',
        donationType: 'one-time',
      },
      // Enable tax ID collection for 501(c)(3) compliance
      tax_id_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
