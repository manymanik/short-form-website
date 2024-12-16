import { Star } from 'lucide-react';
import { reviews } from '../constants/reviews';

export default function About() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-xl text-gray-300 mb-12">
            We're a team of content creators, strategists, and growth hackers who understand
            the science behind viral content. With over 5 years of experience in short-form
            video production, we've helped hundreds of brands find their voice on social media.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{review.text}</p>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}