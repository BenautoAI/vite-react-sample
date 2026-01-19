import Avatar from './index';

interface AvatarGroupProps {
  /**
   * Array of avatar data objects
   */
  avatars: Array<{
    src?: string;
    name?: string;
    alt?: string;
  }>;
  /**
   * Maximum number of avatars to display before showing "+X" indicator
   * @default 4
   */
  max?: number;
  /**
   * Size of each avatar
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Whether to show gradient borders on avatars
   * @default false
   */
  withGradientBorder?: boolean;
}

/**
 * AvatarGroup component for displaying multiple avatars in an overlapping layout
 */
function AvatarGroup(props: AvatarGroupProps) {
  const avatars = props.avatars;
  const max = props.max || 4;
  const size = props.size || 'md';
  const className = props.className || '';
  const withGradientBorder = props.withGradientBorder || false;

  const displayedAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(0, avatars.length - max);

  const overlapClasses = {
    xs: '-ml-2',
    sm: '-ml-2',
    md: '-ml-3',
    lg: '-ml-4',
    xl: '-ml-6',
    '2xl': '-ml-8'
  };

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl',
    '2xl': 'w-32 h-32 text-4xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {displayedAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`${index > 0 ? overlapClasses[size] : ''} relative border-2 border-gray-800 rounded-full`}
          style={{ zIndex: displayedAvatars.length - index }}
        >
          <Avatar
            src={avatar.src}
            name={avatar.name}
            alt={avatar.alt}
            size={size}
            withGradientBorder={withGradientBorder}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`
            ${overlapClasses[size]} 
            ${sizeClasses[size]}
            rounded-full 
            bg-gray-700 
            border-2 
            border-gray-800
            flex 
            items-center 
            justify-center 
            font-semibold 
            text-gray-300
            relative
          `}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;
