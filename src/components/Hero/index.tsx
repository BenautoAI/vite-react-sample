import { useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

// Design constants for consistent spacing, colors, and typography
const COLORS = {
  primary: '#000',
  accent: '#dc2626',        // Red accent for hero title and subtitle
  neutral: '#9ca3af',       // Gray for inactive states and labels
  border: '#e5e7eb',        // Light gray for borders
  dark: '#1f2937',          // Dark gray for price badges
  text: '#374151',          // Medium gray for form text
} as const;

const TYPOGRAPHY = {
  family: 'Montserrat, sans-serif',
} as const;

const SPACING = {
  section: '80px',          // Large vertical spacing between major sections
  container: '48px',        // Horizontal padding
  gap: '32px',              // Gap between filter elements
  tabGap: '48px',           // Gap between tab buttons
  fieldBorder: '2px',       // Field border width
  tabBorder: '3px',         // Tab underline width
  heroBorder: '3px',        // Hero title border width
} as const;

const BREAKPOINTS = {
  minPrice: 500,
  maxPrice: 2500,
} as const;

type TabType = 'commercial' | 'residential';

// Tab button style builder - eliminates duplicate button styling logic
const getTabButtonStyle = (isActive: boolean) => ({
  paddingBottom: '20px',
  paddingTop: '0',
  paddingLeft: '0',
  paddingRight: '0',
  fontSize: '18px',
  fontWeight: isActive ? 600 : 400,
  background: 'none',
  border: 'none',
  borderBottom: `${SPACING.tabBorder}px solid ${isActive ? COLORS.primary : 'transparent'}`,
  cursor: 'pointer',
  color: isActive ? COLORS.primary : COLORS.neutral,
  transition: 'color 0.2s',
  fontFamily: TYPOGRAPHY.family,
} as const);

function Hero({
  title = 'Your Ideal Space',
  subtitle = 'commercial properties tailored to your needs',
}: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>('commercial');

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: SPACING.container,
        paddingRight: SPACING.container,
        paddingTop: SPACING.section,
        paddingBottom: SPACING.section,
        fontFamily: TYPOGRAPHY.family,
        boxSizing: 'border-box',
      }}
    >
      {/* Hero heading with red accent border and dark text */}
      <div style={{ marginBottom: SPACING.section }}>
        <h1
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: COLORS.primary,
            lineHeight: 1.05,
            margin: `0 0 20px 0`,
            border: `${SPACING.heroBorder}px solid ${COLORS.accent}`,
            padding: '20px',
          }}
        >
          {title}
        </h1>
        {/* Red subtitle matches the red border for visual cohesion */}
        <p
          style={{
            fontSize: '26px',
            color: COLORS.accent,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Tab navigation for switching between commercial and residential */}
      <div
        style={{
          display: 'flex',
          gap: SPACING.tabGap,
          marginBottom: SPACING.section,
          borderBottom: `1px solid ${COLORS.border}`,
          marginTop: '60px',
        }}
      >
        <button
          onClick={() => setActiveTab('commercial')}
          style={getTabButtonStyle(activeTab === 'commercial')}
        >
          Commercial
        </button>
        <button
          onClick={() => setActiveTab('residential')}
          style={getTabButtonStyle(activeTab === 'residential')}
        >
          Residential
        </button>
      </div>

      {/* Filter section with space type, price range, and search controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: SPACING.gap,
        }}
      >
        {/* Space type dropdown with left border accent */}
        <div
          style={{
            flex: 2,
            borderLeft: `${SPACING.fieldBorder}px solid ${COLORS.border}`,
            paddingLeft: '20px',
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: '13px',
              color: COLORS.neutral,
              marginBottom: '10px',
              fontFamily: TYPOGRAPHY.family,
            }}
          >
            Space Type
          </label>
          <select
            style={{
              width: '100%',
              padding: '8px 0',
              border: 'none',
              borderBottom: `1px solid ${COLORS.border}`,
              color: COLORS.text,
              background: 'white',
              fontSize: '16px',
              fontFamily: TYPOGRAPHY.family,
              outline: 'none',
              appearance: 'auto',
              cursor: 'pointer',
            }}
          >
            <option>Select</option>
            <option>Office</option>
            <option>Retail</option>
            <option>Warehouse</option>
          </select>
        </div>

        {/* Price range display showing min and max with visual separator */}
        <div
          style={{
            flex: 2,
            borderLeft: `${SPACING.fieldBorder}px solid ${COLORS.border}`,
            paddingLeft: '20px',
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: '13px',
              color: COLORS.neutral,
              marginBottom: '10px',
              fontFamily: TYPOGRAPHY.family,
            }}
          >
            Price
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Min price badge */}
            <div
              style={{
                backgroundColor: COLORS.dark,
                color: 'white',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: TYPOGRAPHY.family,
              }}
            >
              ${BREAKPOINTS.minPrice}
            </div>
            {/* Visual separator line between min and max */}
            <div
              style={{
                height: '2px',
                flex: 1,
                backgroundColor: COLORS.border,
                maxWidth: '80px',
              }}
            />
            {/* Max price badge */}
            <div
              style={{
                backgroundColor: COLORS.dark,
                color: 'white',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: TYPOGRAPHY.family,
              }}
            >
              ${BREAKPOINTS.maxPrice}
            </div>
          </div>
        </div>

        {/* Search action button */}
        <button
          style={{
            backgroundColor: COLORS.primary,
            color: 'white',
            padding: '18px 56px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontFamily: TYPOGRAPHY.family,
            letterSpacing: '0.02em',
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
