import React from 'react';
import { Users, Phone } from 'lucide-react';

export default function Relatives() {
  const relatives = [
    {
      name: 'John Johnson',
      relation: 'Spouse',
      phone: '+1 (555) 234-5678',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
    {
      name: 'Emma Johnson',
      relation: 'Daughter',
      phone: '+1 (555) 345-6789',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    },
    {
      name: 'Robert Johnson',
      relation: 'Son',
      phone: '+1 (555) 456-7890',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users className="h-5 w-5 mr-2 text-blue-600" />
        Emergency Contacts
      </h2>
      <div className="space-y-4">
        {relatives.map((relative, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={relative.image}
              alt={relative.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{relative.name}</h3>
              <p className="text-sm text-gray-500">{relative.relation}</p>
            </div>
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
              <Phone className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}