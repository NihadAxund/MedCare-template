import React from 'react';
import { Smartphone, Laptop, Watch } from 'lucide-react';

export default function Devices() {
  const devices = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      name: 'iPhone 13 Pro',
      lastActive: '2 minutes ago',
      location: 'New York, USA',
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      name: 'MacBook Pro',
      lastActive: '1 hour ago',
      location: 'New York, USA',
    },
    {
      icon: <Watch className="h-5 w-5" />,
      name: 'Apple Watch',
      lastActive: 'Active now',
      location: 'New York, USA',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Connected Devices</h2>
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {device.icon}
              </div>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-900">{device.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">{device.lastActive}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-xs text-gray-500">{device.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}