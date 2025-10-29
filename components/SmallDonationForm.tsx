'use client'

import { useState } from 'react'

interface SmallDonationFormProps {
  onSubmit: (amount: string) => void
}

export default function SmallDonationForm({ onSubmit }: SmallDonationFormProps) {
  const [amount, setAmount] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const quickAmounts = ['5', '10', '25', '50', '100']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (amount && parseFloat(amount) >= 5) {
      onSubmit(amount)
    }
  }

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors underline"
        >
          Prefer a smaller donation amount?
        </button>
      ) : (
        <div className="bg-gray-50 p-6 rounded">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Custom Donation Amount
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Amount Buttons */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`px-4 py-2 text-sm border transition-all ${
                  amount === amt
                    ? 'border-warhol-pink bg-warhol-pink text-white'
                    : 'border-gray-300 hover:border-warhol-pink'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="custom-amount" className="block text-sm text-gray-600 mb-2">
                Or enter custom amount (minimum $5)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  id="custom-amount"
                  type="number"
                  min="5"
                  step="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="25"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 focus:border-warhol-pink focus:outline-none focus:ring-1 focus:ring-warhol-pink"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!amount || parseFloat(amount) < 5}
              className="w-full bg-gray-900 text-white py-3 px-6 text-sm uppercase tracking-widest hover:bg-gray-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Donate ${amount || '0'}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Every donation helps, no matter the size. Tax-deductible receipt provided.
          </p>
        </div>
      )}
    </div>
  )
}
