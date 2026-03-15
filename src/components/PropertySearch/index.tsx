import React from 'react';
import PropertyTabs from './PropertyTabs';
import LocationInput from './LocationInput';
import PropertyTypeDropdown from './PropertyTypeDropdown';
import RentalPeriodToggle from './RentalPeriodToggle';
import SpaceTypeDropdown from './SpaceTypeDropdown';
import PriceRangeInput from './PriceRangeInput';

interface SearchFilters {
  propertyCategory: 'commercial' | 'residential';
  location: string;
  propertyType: string;
  rentalPeriod: 'hourly' | 'monthly';
  spaceType: string;
  priceMin: number;
  priceMax: number;
}

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void;
}

function PropertySearch({ onSearch }: PropertySearchProps) {
  const [filters, setFilters] = React.useState<SearchFilters>({
    propertyCategory: 'commercial',
    location: '',
    propertyType: '',
    rentalPeriod: 'hourly',
    spaceType: '',
    priceMin: 500,
    priceMax: 2500
  });

  const handleTabChange = (category: 'commercial' | 'residential') => {
    setFilters(prev => ({ ...prev, propertyCategory: category }));
  };

  const handleLocationChange = (location: string) => {
    setFilters(prev => ({ ...prev, location }));
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    setFilters(prev => ({ ...prev, propertyType }));
  };

  const handleRentalPeriodChange = (rentalPeriod: 'hourly' | 'monthly') => {
    setFilters(prev => ({ ...prev, rentalPeriod }));
  };

  const handleSpaceTypeChange = (spaceType: string) => {
    setFilters(prev => ({ ...prev, spaceType }));
  };

  const handlePriceChange = (priceMin: number, priceMax: number) => {
    setFilters(prev => ({ ...prev, priceMin, priceMax }));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters);
    } else {
      console.log('Search filters:', filters);
    }
  };

  return (
    <div className="property-search">
      <PropertyTabs
        activeCategory={filters.propertyCategory}
        onTabChange={handleTabChange}
      />
      <div className="property-search__filters flex flex-row gap-4 items-center flex-wrap">
        <LocationInput
          value={filters.location}
          onChange={handleLocationChange}
        />
        <PropertyTypeDropdown
          value={filters.propertyType}
          onChange={handlePropertyTypeChange}
        />
        <RentalPeriodToggle
          activePeriod={filters.rentalPeriod}
          onChange={handleRentalPeriodChange}
        />
        <SpaceTypeDropdown
          value={filters.spaceType}
          onChange={handleSpaceTypeChange}
        />
        <PriceRangeInput
          priceMin={filters.priceMin}
          priceMax={filters.priceMax}
          onChange={handlePriceChange}
        />
        <button
          onClick={handleSearch}
          className="property-search__button bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default PropertySearch;
