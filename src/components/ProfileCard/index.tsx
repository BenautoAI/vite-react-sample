interface ProfileCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  actionLabel: string;
  onAction?: (id: string) => void;
}

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="
      card__container
      bg-white
      rounded-lg
      shadow-md
      p-6
      flex
      flex-col
      items-center
      text-center
      w-full
      ">

      <div className="card__avatar mb-4 relative">
        <div className="
          inline-block
          p-[6px]
          rounded-full
          bg-gradient-to-r
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          ">
          <img
            className="
            rounded-full
            w-32
            h-32
            object-cover
            hover:scale-110
            transition-transform
            duration-300
            "
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>

      <div className="card__info">
        <h3 className="
          text__name
          text-lg
          font-medium
          text-gray-900
          mb-1
          ">
          {props.name}
        </h3>
        <p className="
          text__title
          text-sm
          text-gray-500
          mb-4
          ">
          {props.title}
        </p>
      </div>

      <button
        className="
        card__button
        bg-blue-500
        hover:bg-blue-600
        text-white
        px-6
        py-2
        rounded-lg
        font-medium
        transition-colors
        duration-300
        w-full
        "
        onClick={() => props.onAction?.(props.id)}
      >
        {props.actionLabel}
      </button>

    </div>
  );
}

export default ProfileCard;
