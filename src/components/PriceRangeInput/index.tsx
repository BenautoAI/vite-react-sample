interface PriceRangeInputProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

function PriceRangeInput(props: PriceRangeInputProps) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col items-center">
        <input
          type="number"
          value={props.minPrice}
          onChange={(e) => props.onMinChange(parseInt(e.target.value) || 0)}
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Min"
        />
      </div>
      <div className="flex flex-col items-center">
        <input
          type="number"
          value={props.maxPrice}
          onChange={(e) => props.onMaxChange(parseInt(e.target.value) || 0)}
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Max"
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
