interface FastAvatar2Props {
  imageUrl: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * FastAvatar2 component displays a circular user avatar with a vibrant gradient border.
 * Features a modern anime/illustration aesthetic with smooth hover effects.
 *
 * @param imageUrl - The source URL or path for the avatar image
 * @param alt - Accessibility text describing the image (defaults to "User avatar")
 * @param size - Size variant: "sm" (64px), "md" (96px, default), or "lg" (128px)
 */
function FastAvatar2({ imageUrl, alt = "User avatar", size = "md" }: FastAvatar2Props) {
  // Define size classes based on size prop
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  return (
    <div
      className={`
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-600
        p-[6px]
        transition-transform
        duration-300
        hover:scale-110
        ${sizeClasses[size]}
      `}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
}

export default FastAvatar2;
