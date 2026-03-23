import { useState } from 'react';
import { TabNavigation } from '../TabNavigation';
import { PropertyFilters } from '../PropertyFilters';

interface PropertySearchLandingProps {
  activeTab?: 'commercial' | 'residential';
}

export function PropertySearchLanding({ activeTab = 'commercial' }: PropertySearchLandingProps) {
  const [currentTab, setCurrentTab] = useState<'commercial' | 'residential'>(activeTab);

  const handleTabChange = (tab: 'commercial' | 'residential') => {
    setCurrentTab(tab);
  };

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '64px',
              fontWeight: 700,
              color: '#000000',
              lineHeight: '1.2',
              margin: '0 0 24px 0'
            }}
          >
            Let's Find Your Ideal Space
          </h1>
          <p 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '26px',
              fontWeight: 400,
              color: '#000000',
              lineHeight: '1.4',
              margin: '0'
            }}
          >
            Discover residential and commercial properties tailored to your needs
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={currentTab} onTabChange={handleTabChange} />

        {/* Property Filters */}
        <PropertyFilters onSearch={handleSearch} />
      </div>
    </div>
  );
}
