interface Avatar2Props {
  imageUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  alt?: string;
}

function Avatar2(props: Avatar2Props) {
  const { imageUrl, size = "xl", alt = "Avatar" } = props;

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-40 h-40",
    xl: "w-96 h-96"
  };

  const borderPadding = {
    sm: "p-[3px]",
    md: "p-[4px]",
    lg: "p-[5px]",
    xl: "p-[6px]"
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`
          ${sizeClasses[size]}
          rounded-full
          bg-gradient-to-br 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA]
          ${borderPadding[size]}
          hover:scale-105
          transition-transform
          duration-300
          ease-in-out
        `}
      >
        <img
          className="w-full h-full rounded-full object-cover"
          src={imageUrl || "./src/assets/photo.png"}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default Avatar2;
