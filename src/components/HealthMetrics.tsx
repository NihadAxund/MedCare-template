import React from 'react';
import { Activity, Heart, Thermometer } from 'lucide-react';

export default function HealthMetrics() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Activity className="h-5 w-5 mr-2 text-blue-600" />
        Health Metrics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Heart Rate</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">72 BPM</span>
          </div>
          <div className="mt-2">
            <div className="h-2 bg-blue-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Blood Pressure</span>
            </div>
            <span className="text-lg font-semibold text-green-600">120/80</span>
          </div>
          <div className="mt-2">
            <div className="h-2 bg-green-200 rounded-full">
              <div className="h-2 bg-green-600 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Temperature</span>
            </div>
            <span className="text-lg font-semibold text-purple-600">36.6°C</span>
          </div>
          <div className="mt-2">
            <div className="h-2 bg-purple-200 rounded-full">
              <div className="h-2 bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}