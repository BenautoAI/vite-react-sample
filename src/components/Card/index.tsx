interface CardProps {
  id: string;
  title: string;
  description: string;
  avatar: string;
}

function Card(props: CardProps) {
  return (
    <div className="
      bg-white
      rounded-lg
      shadow-md
      p-6
      flex
      gap-4
      items-start
    ">
      <div className="
        flex-shrink-0
      ">
        <img
          src={props.avatar}
          alt={props.title}
          className="
            w-16
            h-16
            rounded-full
            object-cover
          "
        />
      </div>
      
      <div className="
        flex-1
        min-w-0
      ">
        <h3 className="
          text-lg
          font-medium
          text-gray-900
          truncate
        ">
          {props.title}
        </h3>
        <p className="
          mt-2
          text-sm
          text-gray-500
          line-clamp-2
        ">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
