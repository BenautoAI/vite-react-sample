interface AvatarCardProps {
  title: string;
  description: string;
  avatarImage: string;
}

function AvatarCard(props: AvatarCardProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      p-4
      flex
      flex-row
      items-start
      gap-4
      ">

      <div className="
        flex-shrink-0
        w-24
        h-24
        ">
        <img
          src={props.avatarImage}
          alt={props.title}
          className="
            w-full
            h-full
            rounded-full
            object-cover
            "
        />
      </div>

      <div className="
        flex-1
        flex
        flex-col
        justify-between
        ">
        <div>
          <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
          <p className="mt-2 text-sm text-gray-500">{props.description}</p>
        </div>
      </div>

    </div>
  );
}

export default AvatarCard;
