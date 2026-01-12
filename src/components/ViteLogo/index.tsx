interface ViteLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function ViteLogo(props: ViteLogoProps) {
  return (
    <div className={`vite-logo__container flex items-center justify-center ${props.className || ''}`}>
      <img
        src="/vite.svg"
        alt="Vite Logo"
        style={{ width: props.width || 100, height: props.height || 100 }}
        className="vite-logo__image"
      />
    </div>
  );
}

export default ViteLogo;
