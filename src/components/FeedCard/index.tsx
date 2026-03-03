interface FeedProps {
  title: string;
  description?: string;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  draggableId?: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        h-96
        cursor-grab
        transition-all
        duration-200
        ${props.isDragging ? 'opacity-50 scale-95 cursor-grabbing' : 'hover:shadow-lg'}
      `}
      draggable
      onDragStart={props.onDragStart}
      data-card-id={props.draggableId}
    >
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
      </div>
    </div>
  );
}

export default FeedCard;