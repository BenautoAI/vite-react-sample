interface FeedProps {
  title: string;
  description: string;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function FeedCard(props: FeedProps) {
  return (
    <div
      draggable
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      className={`
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      cursor-grab active:cursor-grabbing
      transition-all duration-200
      ${props.isDragging ? 'opacity-50 scale-95' : 'hover:shadow-lg'}
      `}
    >
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description}</p>
      </div>
    </div>
  );
}

export default FeedCard;
