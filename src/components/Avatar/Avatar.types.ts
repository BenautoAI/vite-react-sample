export interface AvatarProps {
  /**
   * Image source URL for the avatar
   * Optional - will fallback to initials if not provided
   */
  src?: string;
  
  /**
   * User's name used for generating initials fallback
   */
  name: string;
  
  /**
   * Size variant for the avatar
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Optional className for additional styling
   */
  className?: string;
}
