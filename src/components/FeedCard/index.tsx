interface FeedProps {
  title: string;
  id?: string;
  isDragging?: boolean;
  isDraggedOver?: boolean;
  onDragStart?: () => void;
  onDragOver?: () => void;
  onDrop?: () => void;
  onDragEnd?: () => void;
}

function FeedCard(props: FeedProps) {
  return (
    <div
      draggable
      onDragStart={props.onDragStart}
      onDragOver={(e) => {
        e.preventDefault();
        props.onDragOver?.();
      }}
      onDrop={(e) => {
        e.preventDefault();
        props.onDrop?.();
      }}
      onDragEnd={props.onDragEnd}
      onDragLeave={() => {
        // Reset visual feedback on drag leave
      }}
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        h-96
        hover:shadow-lg
        transition-all
        duration-300
        cursor-move
        overflow-hidden
        ${
          props.isDragging
            ? 'opacity-50 scale-95'
            : ''
        }
        ${
          props.isDraggedOver
            ? 'ring-2 ring-blue-400 scale-105'
            : ''
        }
      `}
    >
      <div className="p-4 h-full flex flex-col pointer-events-none">
        <h2 className="text-lg font-semibold text-gray-900 truncate">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500 flex-grow line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default FeedCard;