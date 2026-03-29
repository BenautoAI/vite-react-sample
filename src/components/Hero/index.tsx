import { useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

function Hero({ 
  title = "Your Ideal Space", 
  subtitle = "commercial properties tailored to your needs" 
}: HeroProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");
  const [minPrice] = useState(500);
  const [maxPrice] = useState(2500);

  return (
    <div style={{ width: '100%', backgroundColor: 'white', paddingLeft: '48px', paddingRight: '48px', paddingTop: '120px', paddingBottom: '80px', fontFamily: 'Montserrat, sans-serif', boxSizing: 'border-box' }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '80px' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 800, color: '#000', marginBottom: '20px', lineHeight: 1.05, margin: '0 0 20px 0', border: '3px solid #dc2626', padding: '20px' }}>
          {title}
        </h1>
        <p style={{ fontSize: '26px', color: '#dc2626', fontWeight: 400, lineHeight: 1.4, margin: 0 }}>
          {subtitle}
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '48px', marginBottom: '80px', borderBottom: '1px solid #e5e7eb', marginTop: '60px' }}>
        <button
          onClick={() => setActiveTab("commercial")}
          style={{
            paddingBottom: '20px',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            fontSize: '18px',
            fontWeight: activeTab === 'commercial' ? 600 : 400,
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'commercial' ? '3px solid #000' : '3px solid transparent',
            cursor: 'pointer',
            color: activeTab === 'commercial' ? '#000' : '#9ca3af',
            transition: 'color 0.2s',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Commercial
        </button>
        <button
          onClick={() => setActiveTab("residential")}
          style={{
            paddingBottom: '20px',
            paddingTop: '0',
            paddingLeft: '0',
            paddingRight: '0',
            fontSize: '18px',
            fontWeight: activeTab === 'residential' ? 600 : 400,
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'residential' ? '3px solid #000' : '3px solid transparent',
            cursor: 'pointer',
            color: activeTab === 'residential' ? '#000' : '#9ca3af',
            transition: 'color 0.2s',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Residential
        </button>
      </div>

      {/* Filter Section */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
        {/* Space Type Dropdown */}
        <div style={{ flex: 2, borderLeft: '2px solid #e5e7eb', paddingLeft: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#9ca3af', marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>Space Type</label>
          <select style={{ width: '100%', padding: '8px 0', border: 'none', borderBottom: '1px solid #e5e7eb', color: '#374151', background: 'white', fontSize: '16px', fontFamily: 'Montserrat, sans-serif', outline: 'none', appearance: 'auto', cursor: 'pointer' }}>
            <option>Select</option>
            <option>Office</option>
            <option>Retail</option>
            <option>Warehouse</option>
          </select>
        </div>

        {/* Price Range */}
        <div style={{ flex: 2, borderLeft: '2px solid #e5e7eb', paddingLeft: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#9ca3af', marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>Price</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
              ${minPrice}
            </div>
            <div style={{ height: '2px', flex: 1, backgroundColor: '#e5e7eb', maxWidth: '80px' }}></div>
            <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
              ${maxPrice}
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button style={{ backgroundColor: '#000', color: 'white', padding: '18px 56px', borderRadius: '50px', fontWeight: 700, fontSize: '18px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
