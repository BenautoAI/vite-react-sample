import { useState } from 'react';

interface AvatarProps {
  /**
   * URL of the user's profile image
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * User's name (used for initials fallback when no image is provided)
   */
  name?: string;
  /**
   * Size variant of the avatar
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to show gradient border
   * @default false
   */
  withGradientBorder?: boolean;
  /**
   * Callback when image fails to load
   */
  onError?: () => void;
}

const sizeClasses = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-24 h-24 text-2xl',
  '2xl': 'w-32 h-32 text-4xl'
};

/**
 * Gets initials from a name string (up to 2 characters)
 */
const getInitials = (name: string): string => {
  if (!name) return '';
  
  const parts = name.trim().split(/\s+/);
  
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Avatar component for displaying user profile pictures with fallback to initials
 */
function Avatar(props: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    if (props.onError) {
      props.onError();
    }
  };

  const src = props.src;
  const alt = props.alt;
  const name = props.name || '';
  const size = props.size || 'md';
  const className = props.className || '';
  const withGradientBorder = props.withGradientBorder || false;

  const showImage = src && !imageError;
  const initials = getInitials(name);

  const baseClasses = 'rounded-full flex items-center justify-center font-semibold overflow-hidden';
  const sizeClass = sizeClasses[size];
  
  const gradientBorderClasses = withGradientBorder 
    ? 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px]' 
    : '';

  const innerClasses = withGradientBorder 
    ? 'w-full h-full rounded-full overflow-hidden flex items-center justify-center' 
    : '';

  if (withGradientBorder) {
    return (
      <div 
        className={`${baseClasses} ${sizeClass} ${gradientBorderClasses} ${className}`}
      >
        <div className={`${innerClasses} bg-gray-800`}>
          {showImage ? (
            <img
              src={src}
              alt={alt || name}
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-300 select-none">
              {initials || '?'}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${baseClasses} ${sizeClass} ${className} ${showImage ? '' : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-white select-none">
          {initials || '?'}
        </span>
      )}
    </div>
  );
}

export default Avatar;
