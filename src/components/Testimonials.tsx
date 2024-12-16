import { testimonials } from '../constants/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <span className="text-cyan-400 mb-4 block">Testimonials</span>
        <h2 className="text-5xl font-bold mb-16">Hear from my previous clients</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              {testimonial.longText && (
                <p className="text-gray-400 text-sm">{testimonial.longText}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}