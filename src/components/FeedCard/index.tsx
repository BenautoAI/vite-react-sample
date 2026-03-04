interface FeedProps {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragOver?: boolean;
}

function FeedCard(props: FeedProps) {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        h-96
        overflow-hidden
        flex
        flex-col
        transition-all
        duration-200
        ${props.isDragOver ? 'ring-2 ring-blue-500 opacity-75' : ''}
        ${props.draggable ? 'cursor-move hover:shadow-lg' : ''}
      `}
      draggable={props.draggable}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
    >

      {props.image && (
        <div className="
          w-full 
          h-40 
          overflow-hidden
          flex
          items-center
          justify-center
          bg-gray-100
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

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
      </div>

    </div>
  );
}

export default FeedCard;
