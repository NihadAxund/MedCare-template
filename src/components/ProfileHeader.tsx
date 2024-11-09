import React from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></span>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
          <p className="text-gray-500">Patient ID: #MED-2024-0123</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>New York, USA</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>sarah.j@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}