interface ViteLogoProps {
  size?: number;
  className?: string;
}

function ViteLogo(props: ViteLogoProps) {
  const size = props.size || 96;
  const className = props.className || '';
  
  return (
    <div className={`vite-logo__container flex justify-center items-center ${className}`}>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img
          src="/vite.svg"
          className="logo"
          alt="Vite logo"
          style={{ height: `${size}px` }}
        />
      </a>
    </div>
  );
}

export default ViteLogo;
