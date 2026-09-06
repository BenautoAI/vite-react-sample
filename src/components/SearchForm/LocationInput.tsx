import React from 'react';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * LocationInput component for entering a property location
 */
export const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Location</label>
      <input
        type="text"
        placeholder="Type a location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
      />
    </div>
  );
};
