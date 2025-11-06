import Link from 'next/link'

export const metadata = {
  title: 'Thank You - Quote Request Received | Cape Glass',
  description: 'Thank you for your wine label quote request. We will get back to you within 1 business day.',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-wine-800 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          We&apos;ve received your wine label quote request and will review your specifications.
        </p>

        <div className="bg-wine-50 border border-wine-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-wine-800">
            <strong>What happens next?</strong><br/>
            Our team will send you a detailed quote within <strong>1 business day</strong>.
            Check your email (including spam folder) for our response.
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          A confirmation email has been sent to the address you provided.
        </p>

        <div className="space-y-3">
          <Link
            href="/label-printing"
            className="block w-full bg-wine-700 text-white py-2 px-4 rounded hover:bg-wine-800 transition"
          >
            Back to Label Printing
          </Link>
          <Link
            href="/"
            className="block w-full border border-wine-700 text-wine-700 py-2 px-4 rounded hover:bg-wine-50 transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
