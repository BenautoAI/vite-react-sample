interface SpaceTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
}

function SpaceTypeSelect(props: SpaceTypeSelectProps) {
  const defaultOptions = props.options || ['Select', 'Office', 'Warehouse', 'Retail', 'Industrial'];

  return (
    <select
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="w-48 px-4 py-2 border border-gray-300 rounded-lg text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
    >
      {defaultOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SpaceTypeSelect;
