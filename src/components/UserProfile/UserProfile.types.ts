export interface UserProfileProps {
  /**
   * Image source URL for the avatar
   * Optional - will fallback to initials if not provided
   */
  avatarSrc?: string;
  
  /**
   * User's real name (displayed below nickname)
   * Also used for generating initials
   */
  realname: string;
  
  /**
   * User's handle/nickname (displayed as main title)
   */
  nickname: string;
  
  /**
   * Avatar size variant
   * @default 'medium'
   */
  avatarSize?: 'small' | 'medium' | 'large';
  
  /**
   * Optional callback for Follow button click
   */
  onFollowClick?: () => void;
}
