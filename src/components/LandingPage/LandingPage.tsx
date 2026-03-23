import React from 'react';
import { Header } from '../Header/Header';
import { HeroSection } from '../HeroSection/HeroSection';
import { SearchForm, SearchFormData } from '../SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';

/**
 * LandingPage component - Main entry point for the property discovery landing page
 * Composes all sections: Header, Hero, SearchForm, and Footer
 */
export const LandingPage: React.FC = () => {
  const handleSearch = (formData: SearchFormData) => {
    console.log('Search submitted:', formData);
    // TODO: Implement actual search navigation or API call
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SearchForm onSearch={handleSearch} />
      <Footer />
    </div>
  );
};
