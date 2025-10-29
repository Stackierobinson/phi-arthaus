# PHI ArtHaus - Official Website

> **Cultivating the Artists of Tomorrow**
> A nonprofit fine arts homeschool academy in Georgia • Launching August 2027

![PHI ArtHaus](https://img.shields.io/badge/Status-Pre--Launch-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## 🎨 About PHI ArtHaus

PHI ArtHaus is reimagining arts education through a year-round remote fine arts academy that connects Georgia students directly with the professional art world. Through online instruction and monthly in-person experiences, we're building partnerships with galleries, working artists, and prestigious institutions like Art Basel.

**Mission:** Transform arts education by providing Georgia students with world-class instruction, professional development, and direct access to the art industry.

**Timeline:** Raising $300,000 to launch August 2027 with 30 students by Year 5.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Stripe account (for payment processing)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-org/phiarthaus.git
cd phiarthaus
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
phiArthause/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── checkout/             # Stripe checkout session creation
│   │   └── webhooks/stripe/      # Stripe webhook handler
│   ├── donation/                 # Donation flow pages
│   │   ├── success/              # Payment success page
│   │   └── canceled/             # Payment canceled page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/                   # Reusable React components
│   ├── DonationTier.tsx          # Donation tier cards
│   ├── Footer.tsx                # Site footer
│   ├── ImpactItem.tsx            # Impact section items
│   ├── Navigation.tsx            # Site navigation
│   ├── ProgramCard.tsx           # Program showcase cards
│   ├── StatItem.tsx              # Statistics display
│   └── TimelineItem.tsx          # Timeline milestones
├── hooks/                        # Custom React hooks
│   └── useStripeCheckout.ts      # Stripe checkout integration
├── lib/                          # Utility libraries
│   └── stripe.ts                 # Stripe configuration
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## 💳 Stripe Integration Setup

### 1. Create Stripe Account

1. Sign up at [stripe.com](https://stripe.com)
2. Complete business verification for 501(c)(3) status
3. Get API keys from Dashboard → Developers → API keys

### 2. Configure Webhook

1. Go to Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Set URL: `https://your-domain.com/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy webhook secret to `.env.local`

### 3. Test Payments

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

**Any future expiry date and any 3-digit CVC**

---

## 🎨 Design System

### Color Palette (Basquiat/Warhol/Kahlo Inspired)

```css
--basquiat-yellow: #FFD700
--basquiat-cyan: #00BFFF
--warhol-pink: #FF1493
--warhol-orange: #FF6347
--kahlo-teal: #008B8B
--kahlo-coral: #FF6B6B
--electric-purple: #9D00FF
```

### Typography

- **Font:** Helvetica Neue, Arial, sans-serif
- **Headers:** Light weight (300), generous letter-spacing
- **Body:** Regular weight (400), line-height 1.6-1.8

### Components

All components use Tailwind CSS with custom color palette. Key design principles:
- Clean, minimal, elegant (Juilliard aesthetic)
- Bold color accents on white backgrounds
- High contrast, readable typography
- Mobile-first responsive design

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

**Required for production:**
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret
- `NEXT_PUBLIC_SITE_URL` - Your domain (e.g., https://phiarthaus.org)

**Optional (for future features):**
- `DATABASE_URL` - Database connection string
- `SENDGRID_API_KEY` - Email service API key
- `EMAIL_FROM` - Sender email address

### Adding New Sections

1. Create component in `components/`
2. Import and use in `app/page.tsx`
3. Follow existing design patterns
4. Ensure mobile responsiveness

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in project settings
   - Deploy!

3. **Update Stripe Webhook**
   - Change webhook URL to production domain
   - Update `STRIPE_WEBHOOK_SECRET` in Vercel

### Custom Domain

1. Add domain in Vercel project settings
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` environment variable

---

## 📋 Roadmap

### Phase 1: Pre-Launch (Now - August 2027) ✅ In Progress

- [x] Landing page design
- [x] Stripe donation integration
- [ ] Donor CRM (database + admin dashboard)
- [ ] Email marketing setup (SendGrid)
- [ ] Grant application tracker
- [ ] Blog/newsletter system
- [ ] Analytics integration

### Phase 2: Launch Preparation (6 months before)

- [ ] Student application system
- [ ] Student portal (remote learning platform)
- [ ] Parent dashboard
- [ ] Curriculum management tools
- [ ] Event scheduling system

### Phase 3: Post-Launch Operations

- [ ] Gallery partnership portal
- [ ] Portfolio building tools
- [ ] Progress tracking system
- [ ] Community features

---

## 🤝 Contributing

This is a nonprofit project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Coding Standards:**
- Write clean, commented code
- Include error handling
- Build mobile-first
- Add loading states
- Test payment flows thoroughly

---

## 📞 Contact

**For Grant Inquiries:** grants@phiarthaus.org
**For Donor Relations:** donors@phiarthaus.org
**General Information:** info@phiarthaus.org

**Location:** Atlanta, Georgia

---

## 📄 License

PHI ArtHaus is a registered 501(c)(3) nonprofit organization.
© 2025 PHI ArtHaus. All rights reserved.

---

## 🎯 Key Features

### Current Features
✅ **Professional Landing Page** - Juilliard-level aesthetic
✅ **Stripe Payment Processing** - Secure donation handling
✅ **Responsive Design** - Mobile-first approach
✅ **Tax-Deductible Receipts** - 501(c)(3) compliant
✅ **Crypto Donations** - USDC support
✅ **Impact Metrics** - Transparent fundraising goals

### Coming Soon
🔄 **Donor Dashboard** - Login portal for donors
🔄 **Admin CRM** - Manage donors and grants
🔄 **Email Automation** - Welcome sequences and updates
🔄 **Student Applications** - Online enrollment system
🔄 **Event Management** - Monthly gallery visits

---

## 💡 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Hosting:** Vercel
- **Future:** PostgreSQL/MongoDB, SendGrid

---

## 🎨 Brand Voice

- **Aspirational** - Building something extraordinary
- **Professional** - Institutional quality
- **Artistic** - Bold, creative, culturally aware
- **Transparent** - Honest about goals and timeline
- **Urgent** - Raising $300k by August 2027
- **Accessible** - For Georgia families

---

## 🚨 Important Notes

1. **This is a nonprofit** - Follow 501(c)(3) compliance rules
2. **Security matters** - Payment processing and student data
3. **Georgia residency required** - Build into enrollment validation
4. **Launch is August 2027** - All features support this timeline
5. **Mobile-first** - Donors and parents use phones
6. **Professional appearance** - Competes with established institutions

---

**Built with ❤️ for Georgia's next generation of artists**

*Last Updated: October 2025*
*Fundraising Goal: $300,000*
*Launch Target: August 2027*
