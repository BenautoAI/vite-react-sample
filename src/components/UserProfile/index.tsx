import Avatar from '../Avatar';
import { UserProfileProps } from './UserProfile.types';

/**
 * UserProfile component displays user identity information including
 * an avatar, nickname, real name, and a Follow button.
 * 
 * This component composes the Avatar component and is typically used
 * in user profile sections, social feeds, or team member listings.
 * 
 * @example
 * // With avatar image
 * <UserProfile
 *   avatarSrc="/path/to/photo.png"
 *   realname="Felipe Aguiar"
 *   nickname="@Felipao__DIO🚀"
 *   avatarSize="large"
 *   onFollowClick={() => console.log('Follow clicked')}
 * />
 * 
 * @example
 * // With initials fallback
 * <UserProfile
 *   realname="Felipe Aguiar"
 *   nickname="@Felipao__DIO🚀"
 * />
 */
function UserProfile({
  avatarSrc,
  realname,
  nickname,
  avatarSize = 'medium',
  onFollowClick
}: UserProfileProps) {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="mr-20">
        <Avatar
          src={avatarSrc}
          name={realname}
          size={avatarSize}
        />
      </div>

      <div className="text-center justify-between">
        <div className="text__title">
          <h1>{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{realname}</h2>
        </div>

        <div className="text__follow">
          <button
            className="w-80 mt-5"
            onClick={onFollowClick}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
