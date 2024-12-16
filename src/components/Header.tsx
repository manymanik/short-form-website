import { Play } from 'lucide-react';

export default function Header() {
  return (
    <header className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-cyan-400">Short-Form</span> Content Into Revenue
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We help brands create viral short-form videos that convert viewers into customers
          </p>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all">
            <Play size={20} />
            Start Your Journey
          </button>
        </div>
      </div>
    </header>
  );
}