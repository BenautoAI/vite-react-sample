interface CardProps {
  image: string;
  title: string;
}

function Card(props: CardProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      ">

      <div className="
        w-full 
        h-64 
        bg-gray-200 
        rounded-t-lg 
        overflow-hidden
        ">
        <img 
          src={props.image} 
          alt={props.title}
          className="
            w-full 
            h-full 
            object-cover
            "
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
      </div>

    </div>
  );
}

export default Card;
