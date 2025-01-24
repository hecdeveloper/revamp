import type { Location } from '../types';
import mapImage from '../../public/map-CO8lUlNa.png';

const locations: Location[] = [
  {
    city: 'Raleigh',
    state: 'NC',
    country: 'USA',
    type: 'sales'
  },
  {
    city: 'Salt Lake City',
    state: 'UT',
    country: 'USA',
    type: 'sales'
  },
  {
    city: 'Puerto Vallarta',
    state: 'JAL',
    country: 'Mexico',
    type: 'development'
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sales Offices & Delivery Center
          </h2>
          <p className="text-xl text-gray-600">
            Strategically located across North America
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <img 
              src={mapImage}
              alt="North America Map"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Devseo primarily delivers engineering services from our development center in Puerto Vallarta, Mexico, a 3 – 4 hour flight from much of the US.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Locations:</h3>
              {locations.map((location) => (
                <div 
                  key={`${location.city}-${location.state}`}
                  className="p-4 bg-white rounded-lg shadow"
                >
                  <div className="font-semibold text-gray-900">
                    {location.city}, {location.state}
                  </div>
                  <div className="text-gray-600">
                    {location.type === 'sales' ? 'Sales Office' : 'Development Center'}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700">
              With our team located in North America, we typically operate on U.S. Central Standard Time (8am – 6pm), with an ability to shift to Eastern or Pacific time zones as client requires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}