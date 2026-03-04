interface FeedProps {
  title: string;
  description: string;
  index: number;
  onDragStart?: (index: number) => void;
  onDragOver?: (index: number) => void;
  onDrop?: (index: number) => void;
  isDragging?: boolean;
  isOver?: boolean;
}

function FeedCard(props: FeedProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
    props.onDragStart?.(props.index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    props.onDragOver?.(props.index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    props.onDrop?.(props.index);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={`
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      hover:scale-105
      transition-transform
      duration-300
      cursor-move
      ${props.isDragging ? 'opacity-50' : ''}
      ${props.isOver ? 'shadow-lg' : ''}
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description}</p>
      </div>

    </div>
  );
}

export default FeedCard;