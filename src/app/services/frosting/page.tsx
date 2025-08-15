export default function CustomFrostingPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-secondary font-bold text-charcoal-black mb-8">
            Custom Frosting Services
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-large mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-charcoal-black mb-4">
                  Eco-Friendly Frosting Techniques
                </h2>
                <p className="text-medium-grey mb-6 leading-relaxed">
                  Transform your wine bottles with our premium frosting services. We offer various techniques 
                  to create elegant, sophisticated finishes that enhance your brand presentation.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal-black mb-4">Our Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cape-green rounded-full"></div>
                    <span>Full bottle frosting for complete coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cape-green rounded-full"></div>
                    <span>Partial frosting patterns for unique designs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cape-green rounded-full"></div>
                    <span>Custom logos and text frosting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cape-green rounded-full"></div>
                    <span>Environmentally conscious processes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cape-green rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-semibold mb-4">Custom Frosting</h3>
                <p className="text-lg mb-4">Professional frosting service for premium wine bottles</p>
                <div className="text-3xl font-bold">From $0.50</div>
                <div className="text-sm opacity-90">per bottle</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-large">
            <h2 className="text-2xl font-semibold text-charcoal-black mb-6">Get a Custom Quote</h2>
            <p className="text-medium-grey mb-6">
              Contact our team to discuss your specific frosting requirements and get a detailed quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cape-green text-white px-6 py-3 rounded-lg hover:bg-deep-forest transition-colors">
                Request Quote
              </button>
              <button className="border-2 border-charcoal-black text-charcoal-black px-6 py-3 rounded-lg hover:bg-charcoal-black hover:text-white transition-colors">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}