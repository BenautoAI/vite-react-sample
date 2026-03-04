interface FeedProps {
  title: string;
  description: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      hover:scale-105
      transition-transform
      duration-300
      cursor-pointer
      ">

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description}</p>
      </div>

    </div>
  );
}

export default FeedCard;