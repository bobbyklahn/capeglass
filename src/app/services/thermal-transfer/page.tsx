export default function ThermalTransferPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-secondary font-bold text-charcoal-black mb-8">
            Thermal Transfer Services
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-large mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-charcoal-black mb-4">
                  Photo-Quality Reproduction
                </h2>
                <p className="text-medium-grey mb-6 leading-relaxed">
                  Achieve stunning, photographic-quality designs on your wine bottles with our advanced 
                  thermal transfer technology. Perfect for complex logos, gradients, and full-color artwork.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal-black mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-deep-forest rounded-full"></div>
                    <span>Full-color printing capability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-deep-forest rounded-full"></div>
                    <span>Complex logos with gradients</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-deep-forest rounded-full"></div>
                    <span>Photographic image reproduction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-deep-forest rounded-full"></div>
                    <span>Scratch and fade resistant finish</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-deep-forest rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-semibold mb-4">Thermal Transfer</h3>
                <p className="text-lg mb-4">Photo-quality reproduction with full-color capability</p>
                <div className="text-3xl font-bold">From $1.50</div>
                <div className="text-sm opacity-90">per bottle</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-large">
              <h3 className="text-xl font-semibold text-charcoal-black mb-4">Design Requirements</h3>
              <ul className="space-y-2 text-medium-grey">
                <li>• High-resolution files (300+ DPI)</li>
                <li>• CMYK or RGB color profiles</li>
                <li>• Vector or high-res raster formats</li>
                <li>• Complex designs welcome</li>
                <li>• Gradient and photo support</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-large">
              <h3 className="text-xl font-semibold text-charcoal-black mb-4">Material Options</h3>
              <ul className="space-y-2 text-medium-grey">
                <li>• Premium polyurethane films</li>
                <li>• UV-resistant coatings</li>
                <li>• Matte or gloss finishes</li>
                <li>• Transparent film options</li>
                <li>• Textured surface effects</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-large mb-8">
            <h2 className="text-2xl font-semibold text-charcoal-black mb-6">Perfect For:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-deep-forest rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🎨</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Complex Artwork</h4>
                <p className="text-sm text-medium-grey">Multi-color logos with intricate details and gradients</p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-deep-forest rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">📸</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Photography</h4>
                <p className="text-sm text-medium-grey">Vineyard scenes, portraits, and photographic elements</p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-deep-forest rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">⭐</div>
                <h4 className="font-semibold text-charcoal-black mb-2">Premium Brands</h4>
                <p className="text-sm text-medium-grey">High-end wine labels requiring exceptional quality</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-large">
            <h2 className="text-2xl font-semibold text-charcoal-black mb-6">Production Timeline</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-deep-forest rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Design Approval</h4>
                  <p className="text-sm text-medium-grey">1-2 days for artwork review and color matching</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-deep-forest rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Film Preparation</h4>
                  <p className="text-sm text-medium-grey">2-3 days for custom film printing and cutting</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-deep-forest rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Application</h4>
                  <p className="text-sm text-medium-grey">3-5 days for thermal transfer application</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-deep-forest text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Request Quote
              </button>
              <button className="border-2 border-charcoal-black text-charcoal-black px-6 py-3 rounded-lg hover:bg-charcoal-black hover:text-white transition-colors">
                Submit Artwork
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}