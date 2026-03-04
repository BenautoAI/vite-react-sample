interface CardItemProps {
  id?: string;
  image: string;
  title: string;
  isDragging?: boolean;
  isDragOver?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDragOver?: () => void;
  onDragLeave?: () => void;
  onDrop?: () => void;
}

function CardItem(props: CardItemProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    props.onDragStart?.();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.onDragEnd?.();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    props.onDragOver?.();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.onDragLeave?.();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    props.onDrop?.();
  };

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        flex 
        flex-col 
        items-center 
        gap-4
        p-3
        rounded-lg
        transition-all
        duration-200
        cursor-move
        ${props.isDragging ? "opacity-50 scale-95" : "opacity-100 scale-100"}
        ${props.isDragOver ? "bg-blue-100 shadow-lg ring-2 ring-blue-400" : ""}
      `}
    >
      <div className="card-item__photo">
        <img
          className="
          w-32
          h-32
          rounded-full
          object-cover
          hover:scale-110
          transition-transform
          duration-300
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          "
          src={props.image}
          alt={props.title}
        />
      </div>

      <div className="card-item__text text-center">
        <h3 className="text-lg font-medium text-gray-900">{props.title}</h3>
      </div>
    </div>
  );
}

export default CardItem;
