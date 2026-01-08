interface ViteLogoProps {
  size?: number;
  className?: string;
}

function ViteLogo(props: ViteLogoProps) {
  const size = props.size || 100;
  const customClassName = props.className || '';

  return (
    <div className={`vite-logo__container flex items-center justify-center ${customClassName}`}>
      <img 
        className="vite-logo__image hover:scale-110 transition-transform duration-300"
        src="/vite.svg" 
        alt="Vite Logo" 
        width={size} 
        height={size}
      />
    </div>
  );
}

export default ViteLogo;
