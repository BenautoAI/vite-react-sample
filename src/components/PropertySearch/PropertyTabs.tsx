interface PropertyTabsProps {
  activeCategory: 'commercial' | 'residential';
  onTabChange: (category: 'commercial' | 'residential') => void;
}

function PropertyTabs({ activeCategory, onTabChange }: PropertyTabsProps) {
  return (
    <div className="property-tabs flex gap-6 mb-4">
      <button
        onClick={() => onTabChange('commercial')}
        className={`property-tabs__tab pb-2 text-lg font-medium transition-colors ${
          activeCategory === 'commercial'
            ? 'border-b-2 border-black text-black'
            : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        Commercial
      </button>
      <button
        onClick={() => onTabChange('residential')}
        className={`property-tabs__tab pb-2 text-lg font-medium transition-colors ${
          activeCategory === 'residential'
            ? 'border-b-2 border-black text-black'
            : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        Residential
      </button>
    </div>
  );
}

export default PropertyTabs;
