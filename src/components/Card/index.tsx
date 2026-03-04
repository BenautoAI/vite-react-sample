interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragging?: boolean;
}

function Card(props: CardProps) {
  return (
    <div
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        hover:shadow-lg
        transition-shadow
        duration-300
        h-96
        overflow-hidden
        cursor-pointer
        ${props.isDragging ? 'opacity-50' : ''}
      `}
      onClick={props.onClick}
      draggable={props.draggable || false}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
    >
      {props.image && (
        <div className="
          w-full 
          h-48 
          bg-gray-200 
          overflow-hidden
        ">
          <img 
            src={props.image} 
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-4 flex flex-col h-full">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        {props.description && (
          <p className="mt-2 text-sm text-gray-500 flex-1 overflow-hidden">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
