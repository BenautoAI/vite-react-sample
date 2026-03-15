import { useState } from 'react';
import TabNavigation from '../../components/TabNavigation';
import LocationInput from '../../components/LocationInput';
import PropertyTypeSelect from '../../components/PropertyTypeSelect';
import RentalPeriodToggle from '../../components/RentalPeriodToggle';
import SpaceTypeSelect from '../../components/SpaceTypeSelect';
import PriceRangeInput from '../../components/PriceRangeInput';
import SearchButton from '../../components/SearchButton';

function PropertySearch() {
  const [activeTab, setActiveTab] = useState('commercial');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Select');
  const [rentalPeriod, setRentalPeriod] = useState<'hourly' | 'monthly'>('hourly');
  const [spaceType, setSpaceType] = useState('Select');
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);

  const tabs = [
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
  ];

  const handleSearch = () => {
    console.log({
      activeTab,
      location,
      propertyType,
      rentalPeriod,
      spaceType,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="w-full bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-3">
            Let's Find Your Ideal Space
          </h1>
          <p className="text-lg text-gray-600">
            Discover residential and commercial properties tailored to your needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Location Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-2">Location</label>
            <LocationInput
              value={location}
              onChange={setLocation}
              placeholder="Type a location"
            />
          </div>

          {/* Property Type Select */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-2">Property Type</label>
            <PropertyTypeSelect
              value={propertyType}
              onChange={setPropertyType}
            />
          </div>

          {/* Rental Period Toggle */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-2">Rental Period</label>
            <RentalPeriodToggle
              value={rentalPeriod}
              onChange={setRentalPeriod}
            />
          </div>

          {/* Space Type Select */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-2">Space Type</label>
            <SpaceTypeSelect
              value={spaceType}
              onChange={setSpaceType}
            />
          </div>

          {/* Price Range Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-2">Price</label>
            <div className="flex gap-2 items-center">
              <span className="bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
                ${minPrice}
              </span>
              <PriceRangeInput
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinChange={setMinPrice}
                onMaxChange={setMaxPrice}
              />
              <span className="bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
                ${maxPrice}
              </span>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end h-24">
            <SearchButton onClick={handleSearch} label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearch;
