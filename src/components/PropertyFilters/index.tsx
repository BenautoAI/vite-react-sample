import { useState } from 'react';
import { PriceRangeSlider } from '../PriceRangeSlider';

interface PropertyFiltersProps {
  onSearch?: (filters: FilterValues) => void;
}

interface FilterValues {
  location: string;
  propertyType: string;
  rentalPeriod: 'hourly' | 'monthly';
  spaceType: string;
  minPrice: number;
  maxPrice: number;
}

export function PropertyFilters({ onSearch }: PropertyFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    location: '',
    propertyType: '',
    rentalPeriod: 'hourly',
    spaceType: '',
    minPrice: 500,
    maxPrice: 2500,
  });

  const handleLocationChange = (value: string) => {
    setFilters({ ...filters, location: value });
  };

  const handlePropertyTypeChange = (value: string) => {
    setFilters({ ...filters, propertyType: value });
  };

  const handleSpaceTypeChange = (value: string) => {
    setFilters({ ...filters, spaceType: value });
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '24px',
        width: '100%'
      }}
    >
      {/* Location Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 400, color: '#637381', fontFamily: 'Montserrat, sans-serif' }}>
          Location
        </label>
        <input
          type="text"
          placeholder="Type a location"
          value={filters.location}
          onChange={(e) => handleLocationChange(e.target.value)}
          style={{
            width: '160px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'Montserrat, sans-serif',
            color: '#333'
          }}
        />
      </div>

      {/* Property Type Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 400, color: '#637381', fontFamily: 'Montserrat, sans-serif' }}>
          Property Type
        </label>
        <select
          value={filters.propertyType}
          onChange={(e) => handlePropertyTypeChange(e.target.value)}
          style={{
            width: '130px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'Montserrat, sans-serif',
            color: '#333',
            backgroundColor: '#ffffff',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%276%27 viewBox=%270 0 12 6%27%3E%3Cpath d=%27M1 1l5 4 5-4%27 stroke=%27%23999%27 stroke-width=%271%27 fill=%27none%27/%3E%3C/svg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            paddingRight: '28px',
            appearance: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="office">Office</option>
          <option value="retail">Retail</option>
        </select>
      </div>

      {/* Rental Period Toggle */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '0px' }}>
        <button
          onClick={() => setFilters({ ...filters, rentalPeriod: 'hourly' })}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: filters.rentalPeriod === 'hourly' ? '#000000' : 'transparent',
            color: filters.rentalPeriod === 'hourly' ? '#ffffff' : '#999',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Hourly
        </button>
        <button
          onClick={() => setFilters({ ...filters, rentalPeriod: 'monthly' })}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: filters.rentalPeriod === 'monthly' ? '#000000' : 'transparent',
            color: filters.rentalPeriod === 'monthly' ? '#ffffff' : '#999',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Monthly
        </button>
      </div>

      {/* Space Type Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 400, color: '#637381', fontFamily: 'Montserrat, sans-serif' }}>
          Space Type
        </label>
        <select
          value={filters.spaceType}
          onChange={(e) => handleSpaceTypeChange(e.target.value)}
          style={{
            width: '130px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'Montserrat, sans-serif',
            color: '#333',
            backgroundColor: '#ffffff',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%276%27 viewBox=%270 0 12 6%27%3E%3Cpath d=%27M1 1l5 4 5-4%27 stroke=%27%23999%27 stroke-width=%271%27 fill=%27none%27/%3E%3C/svg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            paddingRight: '28px',
            appearance: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="">Select</option>
          <option value="open-space">Open Space</option>
          <option value="enclosed">Enclosed</option>
          <option value="private">Private</option>
        </select>
      </div>

      {/* Price Range */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 400, color: '#637381', fontFamily: 'Montserrat, sans-serif' }}>
          Price
        </label>
        <PriceRangeSlider
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onPriceChange={handlePriceChange}
        />
      </div>

      {/* Search Button */}
      <div>
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 32px',
            borderRadius: '20px',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '0px'
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
