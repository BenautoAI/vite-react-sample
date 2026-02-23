import { useState } from "react";
import { getInitials, getColorFromName } from "./utils";

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string; // Optional image URL
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl = "./src/assets/photo.png" } = props;
  const [showImage, setShowImage] = useState(true);

  const handleImageError = () => {
    setShowImage(false);
  };

  const initials = getInitials(nickname, realname);
  const backgroundColor = getColorFromName(nickname + realname);

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        {showImage ? (
          <img
            className="rounded-full w-24 h-24 object-cover hover:scale-110 transition-transform duration-300 p-[6px] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            src={imageUrl}
            alt={`${nickname} avatar`}
            onError={handleImageError}
          />
        ) : (
          <div
            className={`rounded-full w-24 h-24 flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-transform duration-300 ${backgroundColor}`}
            aria-label={`${nickname} initials`}
          >
            {initials}
          </div>
        )}
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1>{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="w-80 mt-5">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
