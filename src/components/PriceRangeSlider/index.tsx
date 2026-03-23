import { useState } from 'react';

interface PriceRangeSliderProps {
  minPrice?: number;
  maxPrice?: number;
  onPriceChange?: (min: number, max: number) => void;
}

export function PriceRangeSlider({ 
  minPrice = 500, 
  maxPrice = 2500,
  onPriceChange 
}: PriceRangeSliderProps) {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), max - 100);
    setMin(newMin);
    onPriceChange?.(newMin, max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), min + 100);
    setMax(newMax);
    onPriceChange?.(min, newMax);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div 
          className="px-3 py-1 rounded text-white text-xs font-normal text-center"
          style={{
            backgroundColor: '#1c252e',
            fontFamily: 'Montserrat'
          }}
        >
          ${min}
        </div>
        <div 
          className="flex-1 h-1 bg-gray-400 rounded-full relative"
          style={{ opacity: 0.11 }}
        >
          <div
            className="absolute top-0 h-full bg-black rounded-full"
            style={{
              left: `${((min - 0) / (5000 - 0)) * 100}%`,
              right: `${100 - ((max - 0) / (5000 - 0)) * 100}%`
            }}
          ></div>
        </div>
        <div 
          className="px-3 py-1 rounded text-white text-xs font-normal text-center"
          style={{
            backgroundColor: '#1c252e',
            fontFamily: 'Montserrat'
          }}
        >
          ${max}
        </div>
      </div>

      <div className="relative h-1">
        <input
          type="range"
          min="0"
          max="5000"
          value={min}
          onChange={handleMinChange}
          className="absolute w-full h-1 top-0 appearance-none pointer-events-none"
          style={{
            zIndex: min > 2500 ? 5 : 3,
            background: 'transparent'
          }}
        />
        <input
          type="range"
          min="0"
          max="5000"
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full h-1 top-0 appearance-none pointer-events-none"
          style={{
            zIndex: max > 2500 ? 3 : 5,
            background: 'transparent'
          }}
        />
      </div>
    </div>
  );
}
