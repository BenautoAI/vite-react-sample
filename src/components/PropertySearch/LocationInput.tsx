interface LocationInputProps {
  value: string;
  onChange: (location: string) => void;
}

function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type a location"
      className="location-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
    />
  );
}

export default LocationInput;
