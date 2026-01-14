import { useState } from 'react';
import './styles.css';

interface ViteLogoWithCatProps {
  className?: string;
  showCat?: boolean;
}

function ViteLogoWithCat({ className = '', showCat = true }: ViteLogoWithCatProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className={`vite-logo-container ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Vite Logo */}
      <img 
        src="/vite.svg" 
        alt="Vite logo" 
        className="vite-logo"
      />
      
      {/* Cat Overlay */}
      {showCat && (
        <div className={`cat-overlay ${isHovering ? 'cat-hovering' : ''}`}>
          <img 
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop" 
            alt="Cat waving paw" 
            className="cat-image"
          />
        </div>
      )}
    </div>
  );
}

export default ViteLogoWithCat;
