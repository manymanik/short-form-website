import { Check } from 'lucide-react';
import { offerFeatures, packageFeatures } from '../constants/offerFeatures';

export default function Offer() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <span className="text-cyan-400 mb-4 block">What you get</span>
        <h2 className="text-5xl font-bold mb-16">My offer</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {offerFeatures.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="text-cyan-400" />
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Plug-and-play landing page</h3>
            <p className="text-gray-400 mb-8">Ready to launch in 7 days</p>
            
            <div className="space-y-4">
              {packageFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-cyan-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-cyan-400 text-black font-semibold py-4 rounded-lg mt-8 hover:bg-cyan-300 transition-colors">
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}