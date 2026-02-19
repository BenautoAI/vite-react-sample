import photoImage from "../../assets/photo.png";

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
}

/**
 * Avatar component displaying a user profile card with gradient border.
 * Shows the user's profile picture with a colorful gradient border,
 * nickname, real name, and a follow button for engagement.
 *
 * @param props - Component props
 * @param props.nickname - User's nickname/handle to display
 * @param props.realname - User's real name to display
 * @param props.imageUrl - Optional URL for the user's profile image. Falls back to default image if not provided
 * @returns Avatar component with profile information and follow button
 */
function Avatar(props: AvatarProps) {
  return (
    <div className="avatar__container flex flex-row items-center w-full">
      {/* Gradient border wrapper */}
      <div className="avatar__photo mr-6">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px] rounded-full">
          <img
            className="w-32 h-32 rounded-full object-cover bg-white transition-transform duration-300 ease-in-out hover:scale-110"
            src={props.imageUrl || photoImage}
            alt={`${props.nickname} avatar`}
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col justify-center">
        <div className="text__title">
          <h1 className="text-2xl font-bold">{props.nickname}</h1>
        </div>

        <div className="text__name mt-2">
          <h2 className="text-lg text-gray-600">{props.realname}</h2>
        </div>

        <div className="text__follow mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-200">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
