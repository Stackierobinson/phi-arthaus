# PHI ArtHaus - Deployment Guide

## 🚀 Quick Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: PHI ArtHaus website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/phiarthaus.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

```env
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Important:** Use `sk_live_` keys for production, not `sk_test_`

### Step 4: Configure Stripe Webhook

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set endpoint URL: `https://your-vercel-domain.vercel.app/api/webhooks/stripe`
4. Select events to listen to:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`
7. Redeploy your Vercel project for env vars to take effect

### Step 5: Add Custom Domain (Optional)

1. Go to Vercel project → Settings → Domains
2. Add your domain (e.g., `phiarthaus.org`)
3. Update DNS records as instructed:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables
5. Update Stripe webhook URL to your custom domain

---

## 🧪 Testing Payments

### Test Mode (Development)

Use Stripe test cards:
- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- **Requires Authentication:** 4000 0025 0000 3155

Any future expiry date, any 3-digit CVC, any ZIP code.

### Live Mode (Production)

1. Complete Stripe account verification
2. Switch to live API keys
3. Test with small real payment ($1)
4. Verify webhook delivery in Stripe Dashboard

---

## 🔒 Security Checklist

Before going live:

- [ ] Environment variables are set in Vercel (not in code)
- [ ] Using live Stripe keys (starts with `sk_live_`)
- [ ] Webhook secret is configured correctly
- [ ] HTTPS is enabled (Vercel does this automatically)
- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys committed to Git
- [ ] 501(c)(3) status is verified with Stripe

---

## 📊 Post-Deployment

### Monitor Payments

1. Check Stripe Dashboard daily for donations
2. Monitor webhook delivery (Dashboard → Webhooks → Events)
3. Test donation flow weekly

### Analytics

Add analytics to track:
- Page views
- Donation conversions
- Traffic sources

Recommended: [Plausible Analytics](https://plausible.io) (privacy-friendly) or Google Analytics

### Email Notifications

Set up email alerts for:
- New donations (SendGrid/Mailgun integration)
- Failed payments
- Webhook errors

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error:** "STRIPE_SECRET_KEY is not defined"
**Solution:** Environment variables are only available at runtime for API routes, not at build time. The lazy initialization in `lib/stripe.ts` handles this.

### Webhook Not Working

1. Check webhook URL is correct in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` matches Stripe Dashboard
3. Check Vercel logs for webhook delivery errors
4. Use Stripe CLI to test webhooks locally:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

### Donations Not Processing

1. Verify Stripe keys are live keys (not test)
2. Check Stripe Dashboard for payment intent status
3. Verify webhook is receiving events
4. Check Vercel function logs for errors

---

## 📈 Performance Optimization

### Image Optimization

Add images to `public/` folder and use Next.js Image component:
```jsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="PHI ArtHaus"
  width={200}
  height={100}
/>
```

### Caching

Vercel automatically handles caching for static assets. For API routes:
```typescript
export const revalidate = 3600 // Revalidate every hour
```

---

## 🔄 Continuous Deployment

Every push to `main` branch will automatically deploy to Vercel:

```bash
git add .
git commit -m "Update donation tiers"
git push origin main
```

Vercel will:
1. Build your project
2. Run type checking
3. Deploy to production
4. Update your live site

---

## 📧 Next Steps After Deployment

1. **Email Setup**
   - Configure SendGrid for tax receipts
   - Create email templates
   - Set up automated thank you emails

2. **Database Setup**
   - Add PostgreSQL/MongoDB for donor tracking
   - Create admin dashboard
   - Build donor CRM

3. **Grant Tracking**
   - Add grant application management
   - Create grant report generator
   - Build partnership tracker

4. **Student Portal**
   - Application system
   - Portfolio management
   - Remote learning platform

---

## 🆘 Support

If you encounter issues:

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Check [Vercel Documentation](https://vercel.com/docs)
3. Check [Stripe Documentation](https://stripe.com/docs)
4. Review GitHub Issues in this repository

---

**🎉 Congratulations! Your PHI ArtHaus website is live!**

Now go raise that $300,000 and transform arts education in Georgia! 🎨
