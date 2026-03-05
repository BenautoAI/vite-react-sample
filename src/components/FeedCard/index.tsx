interface FeedProps {
  title: string;
  description: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragging?: boolean;
}

function FeedCard(props: FeedProps) {
  return (
    <div 
      draggable
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      className={`
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      cursor-grab
      transition-all
      duration-200
      ${props.isDragging ? 'opacity-50 shadow-lg' : 'hover:shadow-lg'}
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description}</p>
      </div>

    </div>
  );
}

export default FeedCard;