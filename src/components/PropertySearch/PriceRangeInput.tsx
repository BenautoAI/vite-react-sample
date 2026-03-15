import React from 'react';

interface PriceRangeInputProps {
  priceMin: number;
  priceMax: number;
  onChange: (priceMin: number, priceMax: number) => void;
}

function PriceRangeInput({ priceMin, priceMax, onChange }: PriceRangeInputProps) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(0, parseInt(e.target.value) || 0);
    if (newMin <= priceMax) {
      onChange(newMin, priceMax);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value) || 0;
    if (newMax >= priceMin) {
      onChange(priceMin, newMax);
    }
  };

  return (
    <div className="price-range-input flex gap-2 items-center">
      <div className="price-range-input__display flex gap-2">
        <span className="price-range-input__min text-sm font-medium text-gray-700">
          ${priceMin}
        </span>
        <span className="price-range-input__dash text-gray-400">-</span>
        <span className="price-range-input__max text-sm font-medium text-gray-700">
          ${priceMax}
        </span>
      </div>
      <div className="price-range-input__inputs flex gap-2">
        <input
          type="number"
          value={priceMin}
          onChange={handleMinChange}
          placeholder="Min"
          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors text-sm"
        />
        <input
          type="number"
          value={priceMax}
          onChange={handleMaxChange}
          placeholder="Max"
          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors text-sm"
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
