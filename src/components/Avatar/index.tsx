import { useState } from 'react';
import { AvatarProps } from './Avatar.types';

/**
 * Generates initials from a user's name
 * @param name - Full name of the user
 * @returns Two-character initials in uppercase
 */
const getInitials = (name: string): string => {
  if (!name || name.trim().length === 0) {
    return '??';
  }
  
  const cleanName = name.trim().replace(/[^a-zA-Z\s]/g, '');
  const parts = cleanName.split(/\s+/).filter(part => part.length > 0);
  
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  
  if (cleanName.length >= 2) {
    return cleanName.slice(0, 2).toUpperCase();
  }
  
  return (cleanName[0] || '?').toUpperCase() + '?';
};

/**
 * Avatar component displays a user's profile picture with a gradient border
 * and hover scaling animation. Falls back to displaying initials when no image is provided.
 * 
 * @example
 * // With image
 * <Avatar src="/path/to/photo.png" name="Felipe Aguiar" size="large" />
 * 
 * @example
 * // With initials fallback
 * <Avatar name="Felipe Aguiar" size="medium" />
 */
function Avatar({ src, name, size = 'medium', className = '' }: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);
  const shouldShowInitials = !src || imageError;

  // Size configuration mapping
  const sizeClasses = {
    small: 'w-10 h-10 text-sm',
    medium: 'w-16 h-16 text-xl',
    large: 'w-24 h-24 text-3xl'
  };

  const containerSize = sizeClasses[size];

  return (
    <div
      className={`
        relative
        ${containerSize}
        rounded-full
        bg-red-500
        p-[6px]
        hover:scale-110
        transition-transform duration-200 ease-in-out
        ${className}
      `}
      aria-label={`Avatar for ${name}`}
    >
      {shouldShowInitials ? (
        <div
          className={`
            w-full
            h-full
            rounded-full
            bg-gradient-to-br from-blue-500 to-purple-600
            flex
            items-center
            justify-center
            text-white
            font-semibold
            select-none
          `}
        >
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setImageError(true)}
          className="w-full h-full rounded-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default Avatar;
