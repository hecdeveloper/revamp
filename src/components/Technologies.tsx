import type { TechnologyCategory } from '../types';
import mapImage from '../../dist/assets/images/industry.png';

const technologies: TechnologyCategory[] = [
  {
    title: 'Back End',
    items: ['Node.js', '.NET', 'Java', 'PHP', 'Ruby on Rails', 'Go', 'Python']
  },
  {
    title: 'Front End',
    items: ['Javascript', 'Vue.js', 'Angular', 'React', 'Ember.js', 'Typescript', 'Deno']
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Ionic', 'Swift / iOS', 'BLE / Bluetooth']
  },
  {
    title: 'Platforms & DevOps',
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'Pulumi', 'Terraform', 'Kubernetes']
  }
];

const platforms = [
  'WordPress',
  'BigCommerce',
  'Shopify Plus',
  'Strapi',
  'WooCommerce',
  'Supabase',
  'Sitecore',
  'Adobe'
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nueva sección hero con texto e imagen */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Texto del encabezado */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Let’s create <br /> something incredible.
            </h1>
            <p className="text-lg text-gray-600">
              Software design & dev for startups. We specialize in crafting end-to-end digital solutions to help your business succeed.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get in touch
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-100 text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
              >
                See what we do
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={mapImage}
              alt="Technology showcase"
              className="rounded-2xl shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Introducción a tecnologías */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zero Copy Labs provides project leadership and full-stack engineering capabilities for a variety of technologies and commercial platforms.
          </p>
        </div>

        {/* Lista de tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Plataformas comerciales */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Select Commercial Platforms Experience
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-sm font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
