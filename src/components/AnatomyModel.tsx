import React from 'react';
import { Stage, Layer, Path, Circle } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSelectedOrgan } from '../store/slices/anatomySlice';

const organPaths = {
  heart: 'M50,25 C50,25 20,25 20,62.5 C20,100 50,100 50,100...',
  lungs: 'M60,20 C60,20 90,20 90,57.5 C90,95 60,95 60,95...',
  // Add more organ paths as needed
};

export default function AnatomyModel() {
  const dispatch = useDispatch();
  const selectedOrgan = useSelector((state: RootState) => state.anatomy.selectedOrgan);

  const handleOrganClick = (organ: string) => {
    dispatch(setSelectedOrgan(organ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Human Anatomy Model</h2>
      <Stage width={400} height={600}>
        <Layer>
          {Object.entries(organPaths).map(([organ, path]) => (
            <Path
              key={organ}
              data={path}
              fill={selectedOrgan === organ ? '#3b82f6' : '#94a3b8'}
              onClick={() => handleOrganClick(organ)}
              onTap={() => handleOrganClick(organ)}
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
  );
}