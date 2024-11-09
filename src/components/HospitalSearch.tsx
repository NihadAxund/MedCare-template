import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock } from 'lucide-react';

export default function HospitalSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const hospitals = [
    {
      id: 1,
      name: 'Metropolitan General Hospital',
      type: 'General Hospital',
      address: '123 Healthcare Ave, New York, NY',
      phone: '+1 (555) 123-4567',
      hours: '24/7',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&auto=format&fit=crop&q=80',
    },
    // Add more hospitals
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Find a Hospital</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search hospitals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="general">General Hospital</option>
            <option value="specialty">Specialty Hospital</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>

        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="flex flex-col md:flex-row items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />
              <div className="mt-4 md:mt-0 md:ml-4 flex-1">
                <h3 className="font-medium text-gray-900">{hospital.name}</h3>
                <p className="text-sm text-gray-500">{hospital.type}</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {hospital.address}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    {hospital.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    {hospital.hours}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Directions
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}