import Link from 'next/link'

export default function DonationCanceled() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl text-center">
        {/* Canceled Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-light tracking-wider mb-6">
          Donation Canceled
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your donation was not processed. No charges were made to your account.
        </p>

        <p className="text-gray-600 mb-8">
          If you experienced any issues or have questions about donating, please don't hesitate to contact us at{' '}
          <a href="mailto:donors@phiarthaus.org" className="text-warhol-pink hover:underline">
            donors@phiarthaus.org
          </a>
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/#donate"
            className="bg-gray-900 text-white px-12 py-4 tracking-widest uppercase hover:bg-gray-700 transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="bg-white text-gray-900 px-12 py-4 tracking-widest uppercase border-2 border-gray-900 hover:bg-gray-50 transition-colors"
          >
            Return Home
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50">
          <h3 className="text-lg font-light mb-3">Other Ways to Support PHI ArtHaus</h3>
          <p className="text-gray-600 text-sm">
            We accept donations via bank transfer, cryptocurrency (USDC), and check.
            Contact us for alternative donation methods.
          </p>
        </div>
      </div>
    </div>
  )
}
