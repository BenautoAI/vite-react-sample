import { useState } from 'react';

interface TabNavigationProps {
  activeTab?: 'commercial' | 'residential';
  onTabChange?: (tab: 'commercial' | 'residential') => void;
}

export function TabNavigation({ activeTab = 'commercial', onTabChange }: TabNavigationProps) {
  const [active, setActive] = useState<'commercial' | 'residential'>(activeTab);

  const handleTabClick = (tab: 'commercial' | 'residential') => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '60px' }}>
      <button
        onClick={() => handleTabClick('commercial')}
        style={{
          position: 'relative',
          paddingBottom: '8px',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          color: active === 'commercial' ? '#1c252e' : '#637381',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        Commercial
        {active === 'commercial' && (
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '2px', backgroundColor: '#000000' }}></div>
        )}
      </button>
      <button
        onClick={() => handleTabClick('residential')}
        style={{
          position: 'relative',
          paddingBottom: '8px',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: active === 'residential' ? 500 : 400,
          color: active === 'residential' ? '#1c252e' : '#637381',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        Residential
        {active === 'residential' && (
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '2px', backgroundColor: '#000000' }}></div>
        )}
      </button>
    </div>
  );
}
