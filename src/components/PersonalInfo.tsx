import React from 'react';
import { User, Calendar, Weight, Ruler } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <User className="h-5 w-5 mr-2 text-blue-600" />
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <div className="mt-1 flex items-center">
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <span>March 15, 1990</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Type</label>
          <span className="mt-1 block">A+</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight</label>
          <div className="mt-1 flex items-center">
            <Weight className="h-5 w-5 text-gray-400 mr-2" />
            <span>65 kg</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height</label>
          <div className="mt-1 flex items-center">
            <Ruler className="h-5 w-5 text-gray-400 mr-2" />
            <span>170 cm</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Allergies</label>
          <div className="mt-1 flex flex-wrap gap-2">
            {['Penicillin', 'Peanuts', 'Latex'].map((allergy) => (
              <span
                key={allergy}
                className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800"
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}