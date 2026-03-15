interface RentalPeriodToggleProps {
  value: 'hourly' | 'monthly';
  onChange: (value: 'hourly' | 'monthly') => void;
}

function RentalPeriodToggle(props: RentalPeriodToggleProps) {
  return (
    <div className="flex flex-row gap-4">
      <button
        onClick={() => props.onChange('hourly')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          props.value === 'hourly'
            ? 'bg-black text-white'
            : 'bg-white text-black border border-gray-300'
        }`}
      >
        Hourly
      </button>
      <button
        onClick={() => props.onChange('monthly')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          props.value === 'monthly'
            ? 'bg-black text-white'
            : 'bg-white text-black border border-gray-300'
        }`}
      >
        Monthly
      </button>
    </div>
  );
}

export default RentalPeriodToggle;
