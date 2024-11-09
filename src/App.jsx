import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Bell, Settings, LogOut, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AnatomyViewer from './components/AnatomyViewer';
import DoctorDirectory from './components/DoctorDirectory';
import HospitalFinder from './components/HospitalFinder';
import PatientProfile from './components/PatientProfile';
import AppointmentCalendar from './components/AppointmentCalendar';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
                
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <Menu className="h-6 w-6 text-gray-600 md:hidden" />
                  <Heart className="h-8 w-8 text-blue-600 hidden md:block" />
                  <span className="ml-2 text-xl font-bold text-gray-900 hidden md:block">MedCare</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
                  <Settings className="h-5 w-5 text-gray-500 cursor-pointer" />
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">SJ</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/anatomy" element={<AnatomyViewer />} />
                <Route path="/doctors" element={<DoctorDirectory />} />
                <Route path="/hospitals" element={<HospitalFinder />} />
                <Route path="/profile" element={<PatientProfile />} />
                <Route path="/appointments" element={<AppointmentCalendar />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;