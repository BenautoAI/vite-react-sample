interface FeedProps {
  title: string;
  description?: string;
  isDragging?: boolean;
  isDragOver?: boolean;
  onDragStart?: () => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: () => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: () => void;
}

function FeedCard(props: FeedProps) {
  const cardClassName = `
    bg-white 
    rounded-lg 
    shadow-md
    transition-all duration-200
    ${props.isDragging ? 'opacity-50' : 'opacity-100'}
    ${props.isDragOver ? 'scale-105 bg-blue-50 shadow-lg' : 'scale-100'}
    cursor-grab active:cursor-grabbing
  `;

  return (
    <div 
      className={cardClassName}
      draggable
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDragLeave={props.onDragLeave}
      onDrop={props.onDrop}
      onDragEnd={props.onDragEnd}
    >

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
      </div>

    </div>
  );
}

export default FeedCard;