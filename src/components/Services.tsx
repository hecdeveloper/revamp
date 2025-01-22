import { ChevronRight as ChessKnight, Brain, Eye, Code2, Smartphone, RefreshCw } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    icon: 'ChessKnight',
    title: 'Strategic Planning',
    description: 'Align people, process, and technology to achieve your business goals',
    question: 'How do I align people, process, and technology to achieve my business goals?'
  },
  {
    icon: 'Brain',
    title: 'Product Development',
    description: 'Speed time to value and rapidly iterate to deliver more value',
    question: 'How do I speed time to value and rapidly iterate to deliver more value?'
  },
  {
    icon: 'Eye',
    title: 'Creative Design',
    description: 'Deliver a compelling customer and end user experience',
    question: 'How do I deliver a compelling customer and end user experience?'
  },
  {
    icon: 'Code2',
    title: 'Web Development',
    description: 'Build a scalable, reliable platform to deliver your vision',
    question: 'How do I build a scalable, reliable platform to deliver my vision?'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile & IoT Development',
    description: 'Engage users across channels, on mobile and connected devices',
    question: 'How do I engage users across channels, on mobile and connected devices?'
  },
  {
    icon: 'RefreshCw',
    title: 'Integration Development',
    description: 'Integrate data across systems for improved customer experience and operations',
    question: 'How do I integrate data across systems for improved customer experience and operations?'
  }
];

const IconComponent = ({ name }: { name: string }) => {
  const icons = {
    ChessKnight,
    Brain,
    Eye,
    Code2,
    Smartphone,
    RefreshCw
  };
  const Icon = icons[name as keyof typeof icons];
  return <Icon size={32} className="text-blue-600" />;
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            End-to-End Digital Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <IconComponent name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <p className="text-sm text-blue-600 font-medium">
                {service.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}