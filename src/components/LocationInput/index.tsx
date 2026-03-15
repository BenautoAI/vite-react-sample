interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function LocationInput(props: LocationInputProps) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder || 'Type a location'}
      className="w-48 px-4 py-2 border border-gray-300 rounded-lg text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export default LocationInput;
