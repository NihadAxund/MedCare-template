import React from 'react';
import { Activity, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: Activity, label: 'Heart Rate', value: '72 BPM', change: '+2%' },
    { icon: Users, label: 'Appointments', value: '12', change: '+5%' },
    { icon: Calendar, label: 'Check-ups', value: '48', change: '+12%' },
    { icon: TrendingUp, label: 'Health Score', value: '92', change: '+3%' },
  ];

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Emily Wilson',
      specialty: 'Cardiologist',
      date: '2024-03-20',
      time: '10:00 AM',
      status: 'upcoming',
    },
    // Add more appointments
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="ml-2 text-sm text-gray-500">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-500">{appointment.specialty}</p>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {appointment.date} at {appointment.time}
                  </div>
                </div>
                <span className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full">
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Metrics Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Metrics</h2>
          <div className="h-64 flex items-center justify-center">
            {/* Add your chart component here */}
            <p className="text-gray-500">Health metrics visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
}