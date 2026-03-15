interface SpaceTypeDropdownProps {
  value: string;
  onChange: (spaceType: string) => void;
}

function SpaceTypeDropdown({ value, onChange }: SpaceTypeDropdownProps) {
  const spaceTypes = ['Open Plan', 'Private', 'Shared', 'Divided', 'Flexible'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="space-type-dropdown px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
    >
      <option value="">Select</option>
      {spaceTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default SpaceTypeDropdown;
