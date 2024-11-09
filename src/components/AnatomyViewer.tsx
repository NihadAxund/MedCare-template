import React, { useState } from 'react';
import { Stage, Layer, Path, Circle } from 'react-konva';

// Define the type for organ data
type OrganData = {
  [key: string]: {
    path: string;
    info: string;
  };
};

const organData: OrganData = {
  heart: {
    path: 'M50,25 C50,25 20,25 20,62.5 C20,100 50,100 50,100...',
    info: 'The heart is a muscular organ that pumps blood throughout the body.',
  },
  lungs: {
    path: 'M60,20 C60,20 90,20 90,57.5 C90,95 60,95 60,95...',
    info: 'The lungs are the primary organs of the respiratory system.',
  },
  // Add more organs as needed
};

const AnatomyViewer: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Interactive Human Anatomy</h2>
        <Stage width={600} height={800}>
          <Layer>
            {Object.entries(organData).map(([organ, data]) => (
              <Path
                key={organ}
                data={data.path}
                fill={selectedOrgan === organ ? '#3b82f6' : '#94a3b8'}
                onClick={() => setSelectedOrgan(organ)}
                onTap={() => setSelectedOrgan(organ)}
                onMouseEnter={(e) => {
                  e.target.scale({ x: 1.05, y: 1.05 });
                }}
                onMouseLeave={(e) => {
                  e.target.scale({ x: 1, y: 1 });
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Organ Information</h2>
        {selectedOrgan ? (
          <div>
            <h3 className="text-lg font-medium text-gray-900 capitalize mb-2">
              {selectedOrgan}
            </h3>
            <p className="text-gray-600">{organData[selectedOrgan].info}</p>
          </div>
        ) : (
          <p className="text-gray-500">Select an organ to view details</p>
        )}
      </div>
    </div>
  );
};

export default AnatomyViewer;
