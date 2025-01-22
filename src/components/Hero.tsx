import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-blue-600 text-white flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering Excellence Without Borders
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            We provide software engineering services to startups and agencies, combining technical leadership in the US with nearshore development in Mexico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#services"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </div>
  );
}