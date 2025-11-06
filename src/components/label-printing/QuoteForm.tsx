'use client'

import { useState } from 'react'
import { FileUpload } from './FileUpload'
import { CloudLinkInput } from './CloudLinkInput'

export function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [useLargeFiles, setUseLargeFiles] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/label-quote', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/label-printing/thank-you'
      } else {
        setError(result.error || 'Failed to submit quote request')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-wine-800 mb-2">Request Your Custom Quote</h2>
      <p className="text-gray-600 mb-8">Fill in the details below and we&apos;ll get back to you within 1 business day</p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Section 1: Contact Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-wine-700 mb-4 pb-2 border-b-2 border-wine-700">
          Contact Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company/Winery Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              placeholder="Your Winery Pty Ltd"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              placeholder="john@winery.com.au"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              placeholder="0400 000 000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State/Location <span className="text-red-500">*</span>
            </label>
            <select
              name="location"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select state</option>
              <option value="NSW">New South Wales</option>
              <option value="VIC">Victoria</option>
              <option value="QLD">Queensland</option>
              <option value="SA">South Australia</option>
              <option value="WA">Western Australia</option>
              <option value="TAS">Tasmania</option>
              <option value="NT">Northern Territory</option>
              <option value="ACT">Australian Capital Territory</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Label Specifications */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-wine-700 mb-4 pb-2 border-b-2 border-wine-700">
          Label Specifications
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Label Size
            </label>
            <select
              name="labelSize"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select size</option>
              <option value="80x100mm">80 x 100mm (Standard)</option>
              <option value="90x120mm">90 x 120mm (Standard)</option>
              <option value="100x100mm">100 x 100mm (Square)</option>
              <option value="custom">Custom size (specify in notes)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Label Shape
            </label>
            <select
              name="labelShape"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select shape</option>
              <option value="rectangle">Rectangle</option>
              <option value="square">Square</option>
              <option value="oval">Oval</option>
              <option value="custom-diecut">Custom die-cut</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity Required
            </label>
            <select
              name="quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select quantity</option>
              <option value="100">100 labels</option>
              <option value="250">250 labels</option>
              <option value="500">500 labels</option>
              <option value="1000">1,000 labels</option>
              <option value="2500">2,500 labels</option>
              <option value="5000">5,000 labels</option>
              <option value="10000">10,000+ labels</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Material Preference
            </label>
            <select
              name="material"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select material</option>
              <option value="Premium White Paper">Premium White Paper</option>
              <option value="Textured Paper">Textured Paper</option>
              <option value="Metallic Paper">Metallic Paper</option>
              <option value="Kraft Paper">Kraft Paper</option>
              <option value="Clear/Transparent">Clear/Transparent</option>
              <option value="Waterproof Synthetic">Waterproof Synthetic</option>
              <option value="recommend">Not sure - recommend for me</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Finish
            </label>
            <select
              name="finish"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            >
              <option value="">Select finish</option>
              <option value="Gloss Lamination">Gloss Lamination</option>
              <option value="Matte Lamination">Matte Lamination</option>
              <option value="Spot UV">Spot UV</option>
              <option value="Hot Foil Stamping">Hot Foil Stamping</option>
              <option value="Embossing/Debossing">Embossing/Debossing</option>
              <option value="No Lamination">No Lamination</option>
              <option value="recommend">Not sure - recommend for me</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adhesive Type
            </label>
            <select
              name="adhesive"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              defaultValue="Permanent"
            >
              <option value="Permanent">Permanent (Standard)</option>
              <option value="Removable">Removable</option>
              <option value="Freezer-grade">Freezer-grade</option>
              <option value="Water-resistant">Water-resistant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Design Files */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-wine-700 mb-4 pb-2 border-b-2 border-wine-700">
          Design Files
        </h3>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={useLargeFiles}
              onChange={(e) => setUseLargeFiles(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">My files are too large to upload (use cloud storage link)</span>
          </label>
        </div>

        {!useLargeFiles ? (
          <FileUpload />
        ) : (
          <CloudLinkInput />
        )}
      </div>

      {/* Section 4: Additional Details */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-wine-700 mb-4 pb-2 border-b-2 border-wine-700">
          Additional Details
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Design Status <span className="text-red-500">*</span>
          </label>
          <select
            name="designStatus"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
          >
            <option value="">Select status</option>
            <option value="Final artwork ready">Final artwork ready to print</option>
            <option value="Need review">Need design review/adjustments</option>
            <option value="Need design services">Need design services</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Timeline/Urgency <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="timeline" value="Standard (7-14 days)" required className="mr-2" />
              <span className="text-sm">Standard (7-14 business days)</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="timeline" value="Rush (4-7 days)" className="mr-2" />
              <span className="text-sm">Rush (4-7 business days) - additional fees apply</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="timeline" value="Express (3-4 days)" className="mr-2" />
              <span className="text-sm">Express (3-4 business days) - additional fees apply</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Requirements or Questions
          </label>
          <textarea
            name="additionalNotes"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
            placeholder="Tell us about any special requirements, design preferences, or questions you have..."
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <select
            name="referralSource"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
          >
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral from another winery">Referral from another winery</option>
            <option value="Industry Event">Industry Event</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Section */}
      <div className="border-t pt-6">
        <div className="mb-4 space-y-2">
          <label className="flex items-start">
            <input type="checkbox" required className="mr-2 mt-1" />
            <span className="text-sm text-gray-700">
              I agree to receive quotes and communications via email <span className="text-red-500">*</span>
            </span>
          </label>
          <label className="flex items-start">
            <input type="checkbox" required className="mr-2 mt-1" />
            <span className="text-sm text-gray-700">
              I have read and agree to the{' '}
              <a href="/terms" className="text-wine-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-wine-700 text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-wine-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Request Quote'
          )}
        </button>
      </div>
    </form>
  )
}
