import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Bell, Settings, LogOut } from 'lucide-react';
import { store } from './store/store';
import ProfileHeader from './components/ProfileHeader';
import PersonalInfo from './components/PersonalInfo';
import HealthMetrics from './components/HealthMetrics';
import Devices from './components/Devices';
import Relatives from './components/Relatives';
import Feedback from './components/Feedback';
import AnatomyModel from './components/AnatomyModel';
import DoctorSearch from './components/DoctorSearch';
import HospitalSearch from './components/HospitalSearch';
import AnatomyViewer from './components/AnatomyViewer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          

          <main className="pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                      <ProfileHeader />
                      <PersonalInfo />
                      <HealthMetrics />
                      <Feedback />
                    </div>
                    <div className="space-y-8">
                      <Devices />
                      <Relatives />
                    </div>
                  </div>
                } />
                <Route path="/anatomy" element={<AnatomyViewer></AnatomyViewer>} />
                <Route path="/doctors" element={<DoctorSearch />} />
                <Route path="/hospitals" element={<HospitalSearch />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;