interface CardProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

function Card(props: CardProps) {
  return (
    <article className="
      bg-white 
      rounded-lg 
      shadow-md 
      overflow-hidden
      transition-all
      duration-300
      hover:shadow-xl
      hover:scale-105
    ">
      <img 
        src={props.image} 
        alt={props.imageAlt || props.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          {props.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {props.description}
        </p>
      </div>
    </article>
  );
}

export default Card;
