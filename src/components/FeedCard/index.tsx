interface FeedProps {
  title: string;
  id: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
}

function FeedCard(props: FeedProps) {
  return (
    <div 
      draggable
      onDragStart={(e) => props.onDragStart?.(e, props.id)}
      onDragOver={(e) => props.onDragOver?.(e)}
      onDrop={(e) => props.onDrop?.(e, props.id)}
      className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      transition-all
      duration-300
      hover:shadow-lg
      hover:scale-105
      cursor-move
      ">

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;