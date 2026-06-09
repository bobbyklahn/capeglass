import { QuoteForm } from '@/components/label-printing/QuoteForm'

export const metadata = {
  title: 'Premium Wine Label Printing | Australian Wineries | Cape Glass',
  description: 'High-quality wine label printing for Australian wineries. Custom sizes, premium materials, fast turnaround. From 100 labels to 100,000+. Get your free quote today.',
  keywords: 'wine label printing, wine labels Australia, custom wine labels, winery labels, label printing services, Adelaide wine labels',
}

export default function LabelPrintingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-wine-900 via-wine-800 to-wine-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Wine Label Printing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-wine-100 leading-relaxed">
              Professional label solutions for Australian wineries. From boutique runs to large production.
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-white text-wine-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-wine-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Key Features - Simple Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and finishes for stunning labels</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600">7-14 day production with rush options available</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Quantities</h3>
              <p className="text-gray-600">From 100 to 100,000+ labels - no minimum hassles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-wine-200 to-transparent" />
      </div>

      {/* Materials & Options - Simplified */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Materials & Finishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium materials and finishes to create the perfect label for your wine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Materials Card */}
            <div className="bg-gradient-to-br from-wine-50 to-wine-100 p-8 rounded-2xl border border-wine-200">
              <h3 className="text-2xl font-bold mb-6 text-wine-900">Paper Options</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Premium White & Textured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Metallic & Kraft Paper</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Clear & Waterproof Synthetic</span>
                </div>
              </div>
            </div>

            {/* Finishes Card */}
            <div className="bg-gradient-to-br from-wine-50 to-wine-100 p-8 rounded-2xl border border-wine-200">
              <h3 className="text-2xl font-bold mb-6 text-wine-900">Finish Options</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Gloss & Matte Lamination</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Spot UV & Foil Stamping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine-600 rounded-full" />
                  <span className="text-gray-700">Embossing & Debossing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">Not sure which option is right for you? We&apos;ll recommend the best solution for your needs.</p>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Simple Process
            </h2>
            <p className="text-lg text-gray-600">Get your labels in four easy steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Submit Design', desc: 'Upload files or share a link' },
              { num: '2', title: 'Get Quote', desc: 'Receive pricing in 1 business day' },
              { num: '3', title: 'Approve', desc: 'Review proof and confirm order' },
              { num: '4', title: 'Receive', desc: 'Labels delivered to your door' }
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-700 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simplified */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">Starting prices for standard sizes</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-wine-500 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-wine-700 mb-2">$95</div>
              <div className="text-gray-600 mb-1">100 labels</div>
              <div className="text-sm text-gray-500">80x100mm</div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-wine-500 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-wine-700 mb-2">$250</div>
              <div className="text-gray-600 mb-1">500 labels</div>
              <div className="text-sm text-gray-500">80x100mm</div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-wine-500 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-wine-700 mb-2">$420</div>
              <div className="text-gray-600 mb-1">1,000 labels</div>
              <div className="text-sm text-gray-500">80x100mm</div>
            </div>

            <div className="bg-gradient-to-br from-wine-700 to-wine-800 text-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold mb-2">Volume?</div>
              <div className="text-wine-100 mb-1">10,000+ labels</div>
              <div className="text-sm text-wine-200">Contact us</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Prices in AUD, excluding GST and shipping</p>
            <p className="text-gray-700 mt-2">Custom sizes and finishes available - request a quote below</p>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-wine-200 to-transparent" />
      </div>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get Your Quote
            </h2>
            <p className="text-lg text-gray-600">Fill out the form below and we&apos;ll get back to you within 1 business day</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
