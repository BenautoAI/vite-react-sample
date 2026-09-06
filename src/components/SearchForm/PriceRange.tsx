import React from 'react';

interface PriceRangeProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

/**
 * PriceRange component for setting minimum and maximum price filters
 */
export const PriceRange: React.FC<PriceRangeProps> = ({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Price Range</label>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-xs text-gray-500">Min</label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">$</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => onMinChange(Number(e.target.value))}
              className="w-full rounded-sm border border-gray-300 bg-white px-3 py-3 text-sm text-black focus:border-black focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-500">Max</label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => onMaxChange(Number(e.target.value))}
              className="w-full rounded-sm border border-gray-300 bg-white px-3 py-3 text-sm text-black focus:border-black focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
