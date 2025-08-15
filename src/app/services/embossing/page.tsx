export default function EmbossingPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-secondary font-bold text-charcoal-black mb-8">
            Embossing Services
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-large mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-charcoal-black mb-4">
                  Premium Raised & Debossed Designs
                </h2>
                <p className="text-medium-grey mb-6 leading-relaxed">
                  Create sophisticated, tactile branding with our professional embossing services. 
                  Add depth and luxury to your wine bottles with raised or recessed designs.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal-black mb-4">Embossing Options:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-champagne-gold rounded-full"></div>
                    <span>Raised embossing for premium effect</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-champagne-gold rounded-full"></div>
                    <span>Debossed (recessed) designs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-champagne-gold rounded-full"></div>
                    <span>Logo and text embossing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-champagne-gold rounded-full"></div>
                    <span>Decorative pattern embossing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-champagne-gold rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-semibold mb-4">Embossing</h3>
                <p className="text-lg mb-4">Raised and debossed designs for premium branding</p>
                <div className="text-3xl font-bold">From $1.25</div>
                <div className="text-sm opacity-90">per bottle</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-large">
              <h3 className="text-xl font-semibold text-charcoal-black mb-4">Technical Specifications</h3>
              <ul className="space-y-2 text-medium-grey">
                <li>• Minimum line width: 0.5mm</li>
                <li>• Maximum emboss depth: 0.8mm</li>
                <li>• Design size: Up to 100mm x 150mm</li>
                <li>• Lead time: 2-3 weeks for die creation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-large">
              <h3 className="text-xl font-semibold text-charcoal-black mb-4">Design Guidelines</h3>
              <ul className="space-y-2 text-medium-grey">
                <li>• Bold, simple designs work best</li>
                <li>• Avoid fine details and thin lines</li>
                <li>• Consider bottle curvature</li>
                <li>• Vector artwork required</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-large">
            <h2 className="text-2xl font-semibold text-charcoal-black mb-6">Production Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-champagne-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Design Review</h4>
                <p className="text-sm text-medium-grey">We review your artwork and provide optimization suggestions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-champagne-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Die Creation</h4>
                <p className="text-sm text-medium-grey">Custom embossing dies are precision-manufactured</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-champagne-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Production</h4>
                <p className="text-sm text-medium-grey">Your bottles are embossed with precision and care</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-champagne-gold text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Request Quote
              </button>
              <button className="border-2 border-charcoal-black text-charcoal-black px-6 py-3 rounded-lg hover:bg-charcoal-black hover:text-white transition-colors">
                View Sample Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}