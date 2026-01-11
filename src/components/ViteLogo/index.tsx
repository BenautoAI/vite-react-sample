interface ViteLogoProps {
  size?: number
  className?: string
}

function ViteLogo(props: ViteLogoProps) {
  const size = props.size || 100
  const className = props.className || ''
  
  return (
    <div className={`vite-logo__container flex justify-center items-center ${className}`}>
      <img 
        src='/vite.svg' 
        alt='Vite Logo' 
        width={size}
        height={size}
        className='vite-logo__image hover:scale-110 transition-transform duration-300'
      />
    </div>
  )
}

export default ViteLogo
