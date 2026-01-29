import { useState } from 'react'
import { getInitials, getColorFromName } from './Avatar.utils'

interface AvatarProps {
  nickname: string;
  realname: string;
  imageSrc?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showFollowButton?: boolean;
  showGradientBorder?: boolean;
  onFollowClick?: () => void;
  onAvatarClick?: () => void;
}

// Size configuration mapping for different size variants
const sizeConfig = {
  sm: {
    container: 'w-12 h-12',
    image: 'w-12 h-12',
    padding: 'p-[2px]',
    text: { nickname: 'text-sm', realname: 'text-xs' },
    button: 'w-20 text-xs py-1',
    spacing: 'mr-3',
    initialsText: 'text-lg',
  },
  md: {
    container: 'w-16 h-16',
    image: 'w-16 h-16',
    padding: 'p-[4px]',
    text: { nickname: 'text-base', realname: 'text-sm' },
    button: 'w-24 text-sm py-2',
    spacing: 'mr-5',
    initialsText: 'text-2xl',
  },
  lg: {
    container: 'w-24 h-24',
    image: 'w-24 h-24',
    padding: 'p-[6px]',
    text: { nickname: 'text-lg', realname: 'text-base' },
    button: 'w-32 text-base py-2',
    spacing: 'mr-6',
    initialsText: 'text-3xl',
  },
  xl: {
    container: 'w-32 h-32',
    image: 'w-32 h-32',
    padding: 'p-[8px]',
    text: { nickname: 'text-xl', realname: 'text-lg' },
    button: 'w-40 text-lg py-3',
    spacing: 'mr-8',
    initialsText: 'text-4xl',
  },
};

function Avatar(props: AvatarProps) {
  const {
    nickname,
    realname,
    imageSrc,
    size = 'md',
    showFollowButton = true,
    showGradientBorder = true,
    onFollowClick,
    onAvatarClick,
  } = props;
  const [imageError, setImageError] = useState(false)
  const config = sizeConfig[size]

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true)
  }

  // Determine if we should show the fallback (no image or image failed to load)
  const showFallback = !imageSrc || imageError

  // Generate initials and color for fallback
  const initials = getInitials(nickname, realname)
  const fallbackColor = getColorFromName(nickname || realname)

  // Handle avatar click
  const handleAvatarClick = () => {
    if (onAvatarClick) {
      onAvatarClick()
    }
  }

  // Handle follow button click
  const handleFollowClick = () => {
    if (onFollowClick) {
      onFollowClick()
    }
  }

  return (
    <div className='avatar__container flex flex-row items-center w-full outline outline-4 outline-green-500 outline-offset-2'>
      <div className='flex flex-row items-center w-full outline outline-2 outline-red-500'>
      <div className={'avatar__photo ' + config.spacing}>
        {showFallback ? (
          // Fallback: Show initials with colored background
          <div
            className={
              config.container + ' ' +
              fallbackColor + ' ' +
              'rounded-full flex items-center justify-center text-white font-bold ' +
              config.initialsText + ' ' +
              (onAvatarClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '')
            }
            onClick={handleAvatarClick}
            aria-label={realname + "'s avatar"}
            role={onAvatarClick ? 'button' : 'img'}
          >
            {initials}
          </div>
        ) : (
          // Image: Show the profile photo
          <div
            className={
              (showGradientBorder ? 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ' : '') +
              config.padding + ' ' +
              'rounded-full ' +
              (onAvatarClick ? 'cursor-pointer' : '')
            }
            onClick={handleAvatarClick}
          >
            <img
              className={
                config.image + ' ' +
                'rounded-full hover:scale-110 transition-transform duration-300 object-cover'
              }
              src={imageSrc}
              alt={realname + "'s profile picture"}
              onError={handleImageError}
              loading='lazy'
            />
          </div>
        )}
      </div>

      <div className='avatar__texts text-left flex flex-col justify-center'>
        <div className='text__title'>
          <h1 className={'font-bold ' + config.text.nickname}>{nickname}</h1>
        </div>

        <div className='text__name mt-1'>
          <h2 className={'text-gray-600 ' + config.text.realname}>{realname}</h2>
        </div>

        {showFollowButton && (
          <div className='text__follow'>
            <button
              className={
                config.button + ' ' +
                'mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200'
              }
              onClick={handleFollowClick}
            >
              Follow
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Avatar
