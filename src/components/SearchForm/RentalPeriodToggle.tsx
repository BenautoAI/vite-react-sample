import React from 'react';

type RentalPeriod = 'hourly' | 'monthly';

interface RentalPeriodToggleProps {
  value: RentalPeriod;
  onChange: (value: RentalPeriod) => void;
}

/**
 * RentalPeriodToggle component for selecting rental period
 */
export const RentalPeriodToggle: React.FC<RentalPeriodToggleProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Rental Period</label>
      <div className="flex gap-3">
        <button
          onClick={() => onChange('hourly')}
          className={`flex-1 rounded-sm border-2 px-4 py-3 text-sm font-medium transition-colors ${
            value === 'hourly'
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-black hover:border-gray-400'
          }`}
        >
          Hourly
        </button>
        <button
          onClick={() => onChange('monthly')}
          className={`flex-1 rounded-sm border-2 px-4 py-3 text-sm font-medium transition-colors ${
            value === 'monthly'
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-black hover:border-gray-400'
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};
