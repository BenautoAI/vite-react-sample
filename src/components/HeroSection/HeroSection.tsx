import React, { useState } from 'react';

type PropertyType = 'commercial' | 'residential';

interface HeroSectionProps {
  onPropertyTypeChange?: (type: PropertyType) => void;
}

/**
 * HeroSection component displaying the main headline and property type selection tabs
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onPropertyTypeChange }) => {
  const [selectedType, setSelectedType] = useState<PropertyType>('residential');

  const handleTypeChange = (type: PropertyType) => {
    setSelectedType(type);
    onPropertyTypeChange?.(type);
  };

  return (
    <section className="border-b border-gray-200 bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Headline and Subheading */}
        <h1 className="text-center text-4xl font-bold text-black md:text-5xl">
          Let's Find Your Ideal Space
        </h1>
        <p className="mt-6 text-center text-lg text-gray-600">
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Property Type Tabs */}
        <div className="mt-12 flex justify-center gap-8">
          <button
            onClick={() => handleTypeChange('residential')}
            className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${
              selectedType === 'residential'
                ? 'border-black text-black'
                : 'border-gray-300 text-gray-500 hover:text-gray-700'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => handleTypeChange('commercial')}
            className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${
              selectedType === 'commercial'
                ? 'border-black text-black'
                : 'border-gray-300 text-gray-500 hover:text-gray-700'
            }`}
          >
            Commercial
          </button>
        </div>
      </div>
    </section>
  );
};
