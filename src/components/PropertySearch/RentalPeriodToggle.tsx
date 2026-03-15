interface RentalPeriodToggleProps {
  activePeriod: 'hourly' | 'monthly';
  onChange: (period: 'hourly' | 'monthly') => void;
}

function RentalPeriodToggle({ activePeriod, onChange }: RentalPeriodToggleProps) {
  return (
    <div className="rental-period-toggle flex gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => onChange('hourly')}
        className={`rental-period-toggle__button px-4 py-2 rounded-full font-medium transition-colors ${
          activePeriod === 'hourly'
            ? 'bg-black text-white'
            : 'bg-transparent text-gray-600 hover:text-gray-900'
        }`}
      >
        Hourly
      </button>
      <button
        onClick={() => onChange('monthly')}
        className={`rental-period-toggle__button px-4 py-2 rounded-full font-medium transition-colors ${
          activePeriod === 'monthly'
            ? 'bg-black text-white'
            : 'bg-transparent text-gray-600 hover:text-gray-900'
        }`}
      >
        Monthly
      </button>
    </div>
  );
}

export default RentalPeriodToggle;
