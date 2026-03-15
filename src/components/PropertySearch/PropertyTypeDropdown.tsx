interface PropertyTypeDropdownProps {
  value: string;
  onChange: (propertyType: string) => void;
}

function PropertyTypeDropdown({ value, onChange }: PropertyTypeDropdownProps) {
  const propertyTypes = ['Office', 'Retail', 'Warehouse', 'Apartment', 'House', 'Studio'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="property-type-dropdown px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
    >
      <option value="">Select</option>
      {propertyTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default PropertyTypeDropdown;
