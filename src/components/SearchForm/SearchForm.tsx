import React, { useState } from 'react';
import { LocationInput } from './LocationInput';
import { PropertyTypeSelector } from './PropertyTypeSelector';
import { RentalPeriodToggle } from './RentalPeriodToggle';
import { SpaceTypeSelector } from './SpaceTypeSelector';
import { PriceRange } from './PriceRange';

interface SearchFormProps {
  onSearch?: (formData: SearchFormData) => void;
}

export interface SearchFormData {
  location: string;
  propertyType: string;
  rentalPeriod: 'hourly' | 'monthly';
  spaceType: string;
  minPrice: number;
  maxPrice: number;
}

/**
 * SearchForm component that combines all search fields for property discovery
 */
export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState<'hourly' | 'monthly'>('monthly');
  const [spaceType, setSpaceType] = useState('');
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);

  const handleSearch = () => {
    const formData: SearchFormData = {
      location,
      propertyType,
      rentalPeriod,
      spaceType,
      minPrice,
      maxPrice,
    };
    onSearch?.(formData);
  };

  return (
    <section className="border-b border-gray-200 bg-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col gap-6"
        >
          {/* Location Input */}
          <LocationInput value={location} onChange={setLocation} />

          {/* Property Type and Space Type Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <PropertyTypeSelector value={propertyType} onChange={setPropertyType} />
            <SpaceTypeSelector value={spaceType} onChange={setSpaceType} />
          </div>

          {/* Rental Period Toggle */}
          <RentalPeriodToggle value={rentalPeriod} onChange={setRentalPeriod} />

          {/* Price Range */}
          <PriceRange
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />

          {/* Search Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-sm bg-black px-6 py-4 text-sm font-bold text-white hover:bg-gray-900"
          >
            Search Properties
          </button>
        </form>
      </div>
    </section>
  );
};
