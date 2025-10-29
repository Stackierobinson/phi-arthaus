'use client'

import { useState } from 'react'

export default function CryptoDonation() {
  const [showWallet, setShowWallet] = useState(false)
  const [copied, setCopied] = useState(false)

  // Replace with your actual USDC wallet address
  const usdcAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(usdcAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-8 bg-gradient-to-br from-kahlo-teal/10 to-basquiat-cyan/10 p-6 border border-kahlo-teal/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-kahlo-teal to-basquiat-cyan rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Donate with Crypto</h4>
            <p className="text-sm text-gray-600">USDC on Ethereum, Polygon, or Solana</p>
          </div>
        </div>
        <button
          onClick={() => setShowWallet(!showWallet)}
          className="text-sm text-kahlo-teal hover:text-basquiat-cyan font-medium transition-colors"
        >
          {showWallet ? 'Hide' : 'Show Wallet'}
        </button>
      </div>

      {showWallet && (
        <div className="space-y-4">
          {/* Wallet Address */}
          <div className="bg-white p-4 border border-gray-200">
            <label className="block text-xs text-gray-600 uppercase tracking-wider mb-2">
              USDC Wallet Address
            </label>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono bg-gray-50 p-2 rounded break-all">
                {usdcAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-kahlo-teal text-white text-sm hover:bg-kahlo-teal/80 transition-colors whitespace-nowrap"
                title="Copy address"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="bg-white p-4 border-2 border-gray-200 inline-block">
              <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p>QR Code</p>
                  <p className="text-xs">(Generate via wallet app)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Networks */}
          <div className="flex gap-2 justify-center flex-wrap">
            <span className="px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-700 rounded-full">
              Ethereum
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-700 rounded-full">
              Polygon
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-700 rounded-full">
              Solana
            </span>
          </div>

          {/* Instructions */}
          <div className="bg-white/50 p-4 text-sm text-gray-600 space-y-2">
            <p className="font-medium text-gray-900">How to donate with crypto:</p>
            <ol className="list-decimal list-inside space-y-1 text-xs">
              <li>Copy the wallet address above</li>
              <li>Open your crypto wallet (MetaMask, Coinbase, etc.)</li>
              <li>Send USDC to the address on any supported network</li>
              <li>Email donors@phiarthaus.org with transaction ID for tax receipt</li>
            </ol>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-500 text-center">
            Only send USDC (USD Coin). Other tokens will not be received.
            Tax receipts available upon request.
          </p>
        </div>
      )}
    </div>
  )
}
