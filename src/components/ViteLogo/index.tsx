interface ViteLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function ViteLogo({ width = 32, height = 32, className = '' }: ViteLogoProps) {
  return (
    <div className={`vite-logo__container ${className}`}>
      <img
        src='/vite.svg'
        alt='Vite logo'
        width={width}
        height={height}
        className='vite-logo__image'
      />
    </div>
  );
}

export default ViteLogo;
