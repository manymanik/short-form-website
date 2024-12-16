import { useEffect, useRef, useState } from 'react';
import { processSteps } from '../constants/processSteps';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      
      const steps = stepsRef.current.children;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < steps.length; i++) {
        const step = steps[i] as HTMLElement;
        if (scrollPosition >= step.offsetTop) {
          setActiveStep(i);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="sticky top-20 h-fit">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-300">
              Our proven process ensures consistent results and scalable growth
            </p>
          </div>
          
          <div ref={stepsRef} className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  activeStep === index ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}