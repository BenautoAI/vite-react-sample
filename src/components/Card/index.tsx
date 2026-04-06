interface CardProps {
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-4
      h-full
      ">
      <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
      <p className="mt-2 text-sm text-gray-500">{props.description}</p>
    </div>
  );
}

export default Card;
