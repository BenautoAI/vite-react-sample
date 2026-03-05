interface FeedProps {
  title: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      hover:shadow-lg
      transition-shadow
      duration-300
      cursor-pointer
      overflow-hidden
      ">

      <div className="p-4 h-full flex flex-col">
        <h2 className="text-lg font-semibold text-gray-900 truncate">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500 flex-grow line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;