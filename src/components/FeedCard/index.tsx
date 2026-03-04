interface FeedProps {
  title: string;
  description?: string;
  image?: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragging?: boolean;
  isDragOver?: boolean;
}

function FeedCard(props: FeedProps) {
  return (
    <div
      draggable
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
      className={`
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      overflow-hidden
      flex
      flex-col
      cursor-move
      transition-all
      duration-200
      ${props.isDragging ? 'opacity-50' : 'opacity-100'}
      ${props.isDragOver ? 'ring-2 ring-blue-400 shadow-lg' : ''}
      hover:shadow-lg
      `}>

      {props.image && (
        <div className="
          w-full
          h-48
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
      )}

      <div className="p-4 flex-1">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
      </div>

    </div>
  );
}

export default FeedCard;