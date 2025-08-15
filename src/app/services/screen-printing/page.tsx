export default function ScreenPrintingPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-secondary font-bold text-charcoal-black mb-8">
            Screen Printing Services
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-large mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-charcoal-black mb-4">
                  Multi-Color Printing Excellence
                </h2>
                <p className="text-medium-grey mb-6 leading-relaxed">
                  Professional screen printing services with precise logo placement and vibrant colors. 
                  Perfect for creating branded wine bottles that stand out on the shelf.
                </p>
                
                <h3 className="text-xl font-semibold text-charcoal-black mb-4">Our Capabilities:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine-burgundy rounded-full"></div>
                    <span>Up to 4 colors in one design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine-burgundy rounded-full"></div>
                    <span>Multiple logo placement options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine-burgundy rounded-full"></div>
                    <span>Custom color matching service</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine-burgundy rounded-full"></div>
                    <span>High-resolution artwork support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-wine-burgundy rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-semibold mb-4">Screen Printing</h3>
                <p className="text-lg mb-4">Multi-color printing with precise logo placement</p>
                <div className="text-3xl font-bold">From $0.75</div>
                <div className="text-sm opacity-90">per bottle</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-large">
            <h2 className="text-2xl font-semibold text-charcoal-black mb-6">Design Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-charcoal-black mb-3">File Formats</h3>
                <ul className="text-medium-grey space-y-1">
                  <li>• Vector files (AI, EPS, PDF)</li>
                  <li>• High-resolution raster (PNG, TIFF)</li>
                  <li>• Minimum 300 DPI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-charcoal-black mb-3">Color Specifications</h3>
                <ul className="text-medium-grey space-y-1">
                  <li>• Pantone color matching available</li>
                  <li>• CMYK and spot colors supported</li>
                  <li>• Color proofs provided</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-wine-burgundy text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Request Quote
              </button>
              <button className="border-2 border-charcoal-black text-charcoal-black px-6 py-3 rounded-lg hover:bg-charcoal-black hover:text-white transition-colors">
                Upload Artwork
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}