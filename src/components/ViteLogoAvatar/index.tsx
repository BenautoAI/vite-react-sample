interface ViteLogoAvatarProps {
  avatarSrc: string
  alt?: string
}

function ViteLogoAvatar({ avatarSrc, alt = 'Avatar' }: ViteLogoAvatarProps) {
  return (
    <div className='vite-logo-avatar__container relative inline-block'>
      <div className='vite-logo-avatar__logo logo'>
        <a href='https://vitejs.dev' target='_blank' rel='noopener noreferrer'>
          <img src='/vite.svg' alt='Vite logo' />
        </a>
      </div>

      <div className='vite-logo-avatar__overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img
          src={avatarSrc}
          alt={alt}
          className='
            w-24 
            h-24 
            rounded-full 
            object-cover
            border-4 
            border-transparent
            bg-gradient-to-r 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
            p-[4px]
            hover:scale-110
            transition-transform
            duration-300
            shadow-lg
          '
        />
      </div>
    </div>
  )
}

export default ViteLogoAvatar
