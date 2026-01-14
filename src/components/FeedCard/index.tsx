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
      ">

      <div className="p-4">
        <h2 className="text-lg font-medium text-red-500">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mt-2 text-sm text-gray-700">This is Fei stuIO</p>
      </div>

    </div>
  );
}

export default FeedCard;