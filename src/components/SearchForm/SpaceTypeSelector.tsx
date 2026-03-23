import React, { useState } from 'react';

interface SpaceTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const spaceTypes = ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', 'Open Space'];

/**
 * SpaceTypeSelector dropdown component for selecting space type
 */
export const SpaceTypeSelector: React.FC<SpaceTypeSelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Space Type</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-sm border border-gray-300 bg-white px-4 py-3 text-left text-sm text-gray-700 hover:border-gray-400 focus:border-black focus:outline-none"
        >
          <span>{value || 'Select'}</span>
          <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full z-10 mt-2 w-full rounded-sm border border-gray-300 bg-white shadow-lg">
            {spaceTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  onChange(type);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
