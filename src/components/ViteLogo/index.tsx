interface ViteLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function ViteLogo(props: ViteLogoProps) {
  const width = props.width || 150;
  const height = props.height || 150;
  const additionalClasses = props.className || '';

  return (
    <div className={`vite-logo__container flex items-center justify-center ${additionalClasses}`}>
      <img
        src="/vite.svg"
        alt="Vite Logo"
        width={width}
        height={height}
        className="vite-logo__image"
      />
    </div>
  );
}

export default ViteLogo;
