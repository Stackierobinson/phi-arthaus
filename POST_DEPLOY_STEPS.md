# PHI ArtHaus - Post-Deployment Steps

## 🎉 Your Site is Live!

**Production URL:** https://phi-arthaus-my5vmi4d1-stackierobinsons-projects.vercel.app

---

## ⚠️ CRITICAL: Set Up Stripe Webhook

### Step 1: Create Webhook in Stripe Dashboard

1. Go to: https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://phi-arthaus-my5vmi4d1-stackierobinsons-projects.vercel.app/api/webhooks/stripe`
4. Select events:
   - ✅ checkout.session.completed
   - ✅ payment_intent.succeeded
   - ✅ payment_intent.payment_failed
5. Click "Add endpoint"

### Step 2: Add Webhook Secret to Vercel

1. Copy the webhook signing secret (starts with `whsec_`)
2. Run this command in terminal:

```bash
vercel env add STRIPE_WEBHOOK_SECRET production
# Paste your webhook secret when prompted (starts with whsec_)
```

3. Redeploy:
```bash
vercel --prod
```

---

## 🔧 Update Crypto Wallet Address

Edit: `components/CryptoDonation.tsx` line 9

Replace:
```typescript
const usdcAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
```

With your actual USDC wallet address, then:

```bash
git add .
git commit -m "Update USDC wallet address"
git push origin main
vercel --prod
```

---

## 🎯 Add Custom Domain (Optional)

### Option 1: Buy Domain through Vercel
1. Go to: https://vercel.com/stackierobinsons-projects/phi-arthaus/settings/domains
2. Click "Add" → Buy domain
3. Purchase phiarthaus.org or phiarthaus.com

### Option 2: Use Existing Domain
1. Go to domain registrar (GoDaddy, Namecheap, etc.)
2. Add these DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com
3. Go to Vercel domains settings
4. Add your domain
5. Wait for DNS propagation (can take 24-48 hours)

---

## 📊 Test Everything

### Test Donations
1. Visit your live site
2. Click a donation tier
3. Use a real credit card (remember: LIVE mode!)
4. Complete checkout
5. Verify success page appears
6. Check Stripe Dashboard: https://dashboard.stripe.com/payments

### Test Live Tracker
1. After donation, wait 30 seconds
2. Refresh donation page
3. Tracker should update with new amount

### Test Small Donations
1. Click "Prefer a smaller donation amount?"
2. Enter $25
3. Complete checkout

### Test Crypto Display
1. Click "Show Wallet" in crypto section
2. Verify wallet address displays
3. Update with your real address

---

## 📝 Update Content

Replace placeholders:

1. **Tax ID / EIN**
   - Edit `app/page.tsx` line ~351
   - Replace `[Your EIN Here]` with actual EIN

2. **Email Addresses** (if not already set up)
   - grants@phiarthaus.org
   - donors@phiarthaus.org
   - info@phiarthaus.org

3. **Update Mission Statement** (optional)
   - Edit `app/page.tsx` to customize any text

---

## 🚀 Share Your Site!

Your site is live! Share it:

- 📧 Email donors and supporters
- 📱 Post on social media
- 💼 Add to grant applications
- 🎨 Send to potential partners (galleries, Art Basel contacts)

---

## 📊 Monitor Performance

### Vercel Dashboard
https://vercel.com/stackierobinsons-projects/phi-arthaus

- View deployment logs
- Monitor traffic
- Check build status

### Stripe Dashboard
https://dashboard.stripe.com/

- View donations in real-time
- Generate reports
- Manage donors

---

## 🎯 Next Features to Build

1. **Donor CRM** - Track donors in database
2. **Email Automation** - Thank you emails, receipts
3. **Grant Tracker** - Manage grant applications
4. **Student Portal** - For enrolled students (Phase 2)
5. **Blog/Newsletter** - Content marketing

---

## 🆘 Troubleshooting

### Donations Not Working
- Check Stripe keys in Vercel env vars
- Verify keys are LIVE keys (not test)
- Check browser console for errors

### Live Tracker Not Updating
- Verify Stripe API is working
- Check `/api/donations/total` endpoint
- Confirm Stripe keys have proper permissions

### Webhook Failures
- Verify webhook URL is correct
- Check webhook secret is set in Vercel
- View webhook logs in Stripe Dashboard

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Stripe Docs:** https://stripe.com/docs
- **Next.js Docs:** https://nextjs.org/docs

---

**🎨 Congratulations! You're live and ready to raise $300,000!**
