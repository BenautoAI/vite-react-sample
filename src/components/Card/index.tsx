interface CardProps {
  image: string;
  title: string;
  index?: number;
  isDragged?: boolean;
  isDragOver?: boolean;
  onDragStart?: (index: number) => void;
  onDragOver?: (index: number) => void;
  onDragLeave?: () => void;
  onDrop?: (index: number) => void;
  onDragEnd?: () => void;
}

function Card(props: CardProps) {
  const handleDragStart = () => {
    if (props.onDragStart && props.index !== undefined) {
      props.onDragStart(props.index);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.onDragOver && props.index !== undefined) {
      props.onDragOver(props.index);
    }
  };

  const handleDragLeave = () => {
    if (props.onDragLeave) {
      props.onDragLeave();
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.onDrop && props.index !== undefined) {
      props.onDrop(props.index);
    }
  };

  const handleDragEnd = () => {
    if (props.onDragEnd) {
      props.onDragEnd();
    }
  };
  const draggedClass = props.isDragged ? 'opacity-50' : '';
  const dragOverClass = props.isDragOver ? 'ring-2 ring-blue-400 scale-105' : '';

  return (
    <div 
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        h-96
        cursor-move
        transition-all
        duration-200
        ${draggedClass}
        ${dragOverClass}
      `}>

      <div className="
        w-full 
        h-64 
        bg-gray-200 
        rounded-t-lg 
        overflow-hidden
        ">
        <img 
          src={props.image} 
          alt={props.title}
          className="
            w-full 
            h-full 
            object-cover
            "
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
      </div>

    </div>
  );
}

export default Card;
