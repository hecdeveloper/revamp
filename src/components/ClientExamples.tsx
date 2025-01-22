import type { ClientExample } from '../types';

const clients: ClientExample[] = [
  {
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80',
    title: 'SaaS Platform in Publishing Industry',
    description: "Technical leadership, full-stack development, and DevOps consulting to scale the client's proprietary ecommerce marketplace, which serves hundreds of thousands of users and sends millions of emails per year."
  },
  {
    image: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&q=80',
    title: 'Large Commercial General Contactor',
    description: 'Integrated project management data with accounting system software to streamline and improve accuracy of milestone invoicing, saving hundreds of hours a week of wasted effort among various teams.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    title: 'VC-Backed Startup in EdTech & IOT',
    description: 'Provided technical leadership, engineering, and DevOps to improve an application and integration with wristbands that enable interactive experiences for users in designated places.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    title: 'Pump Manufacturer',
    description: 'Developed industrial IOT platform to capture pump and sensor data and to allow devices to network with each other in real time. Included firmware development, desktop apps, cloud components, and rigorous device testing.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    title: 'Healthcare Insurance Company',
    description: 'Developed the custom logic and flow of a quiz that guides users to recommended cancer screenings based on their personal, familial, and environmental history.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    title: 'Tech Infrastructure Hi-Growth Startup',
    description: 'For a venture backed startup with $100M+ in funding, we delivered a custom PHP library to be included in their infrastructure platform for use by 3rd party developers.'
  }
];

export default function ClientExamples() {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select Client Examples
          </h2>
          <p className="text-xl text-gray-600">
            Our track record of successful projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div 
              key={client.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex items-center">
                <div className="w-1/3">
                  <img 
                    src={client.image}
                    alt={client.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {client.title}
                  </h3>
                  <p className="text-gray-600">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}