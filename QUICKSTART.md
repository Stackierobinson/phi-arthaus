# ⚡ Quick Start - Get Running in 2 Minutes

## For Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Add Stripe test keys to .env.local
# Get keys from: https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Note: STRIPE_WEBHOOK_SECRET is optional for local dev

# 4. Run development server
npm run dev

# 5. Open browser
# Navigate to http://localhost:3000
```

## Test Stripe Donations Locally

1. Click any donation tier
2. Use test card: `4242 4242 4242 4242`
3. Any future expiry, any CVC, any ZIP
4. Complete checkout
5. You'll be redirected to success page

## Project Structure

```
phiArthause/
├── app/
│   ├── page.tsx              ← Main home page
│   ├── layout.tsx            ← Root layout
│   ├── api/
│   │   ├── checkout/         ← Stripe checkout API
│   │   └── webhooks/stripe/  ← Stripe webhooks
│   └── donation/
│       ├── success/          ← Success page
│       └── canceled/         ← Canceled page
├── components/               ← Reusable UI components
├── hooks/                    ← Custom React hooks
└── lib/                      ← Utility functions
```

## Common Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # Run linting
```

## Making Changes

### Update Content

Edit `app/page.tsx` to change:
- Hero text
- Mission statement
- Program descriptions
- Timeline milestones
- Donation tiers

### Update Colors

Edit `tailwind.config.ts` to change the color palette.

### Add New Pages

Create files in `app/` directory:
```
app/about/page.tsx  → /about
app/contact/page.tsx → /contact
```

## Next Steps

1. ✅ Get it running locally
2. 📝 Update content in `app/page.tsx`
3. 🎨 Customize colors in `tailwind.config.ts`
4. 💳 Set up Stripe account
5. 🚀 Deploy to Vercel

See `README.md` for detailed documentation.
See `DEPLOYMENT.md` for deployment instructions.
