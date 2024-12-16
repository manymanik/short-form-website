import { problems } from '../constants/problems';

export default function Services() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <span className="text-cyan-400 mb-4 block">Your landing page is your salesman</span>
        <h2 className="text-5xl font-bold mb-4">Your landing page is where you make—or lose—your money.</h2>
        <p className="text-xl text-gray-300 mb-8">
          You wouldn't tolerate a salesman who fails to earn trust from the first moment.
        </p>
        <p className="text-xl text-gray-300 mb-16">
          Hold your landing page to the same standard—it should build credibility, overcome doubts and represent you in the best light.
        </p>

        <p className="text-cyan-400 mb-4">So...</p>
        <h3 className="text-5xl font-bold mb-16">Is your landing page broken?</h3>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="space-y-4">
              <problem.icon className="text-cyan-400" size={32} />
              <h4 className="text-2xl font-bold">{problem.title}</h4>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>

        <span className="text-cyan-400 block mb-4">The case for taking action</span>
        <h3 className="text-5xl font-bold mb-12">6 reasons to fix your landing page</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-8 rounded-xl md:col-span-2">
            <h4 className="text-2xl font-bold mb-4">First impressions still matter</h4>
            <p>A strong landing page builds trust and sets the right tone—keeping visitors around and bringing them back.</p>
          </div>
          <div className="bg-white text-black p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Better ROI</h4>
            <p>Every visitor costs you time or money. Make sure they convert.</p>
          </div>
          <div className="bg-white text-black p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Ready to scale</h4>
            <p>Consistent conversions give you the confidence to scale with ads, new content, or new offers.</p>
          </div>
          <div className="bg-white text-black p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Validate your ideas</h4>
            <p>Make sure your landing page shows that your offer resonates. Prove your product's value with real conversions.</p>
          </div>
          <div className="bg-white text-black p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Focus on creating</h4>
            <p>Nail your landing page and stop worrying about performance. Focus on creating instead.</p>
          </div>
          <div className="bg-white text-black p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Build and print</h4>
            <p>Get a landing page system you can use again and again. One less piece of the puzzle to worry about.</p>
          </div>
        </div>
      </div>
    </section>
  );
}