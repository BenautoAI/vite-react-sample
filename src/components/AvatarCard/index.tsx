interface AvatarCardProps {
  title: string;
  description: string;
  avatarImage: string;
  index?: number;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd?: () => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}

function AvatarCard(props: AvatarCardProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.onDragStart && props.index !== undefined) {
      props.onDragStart(e, props.index);
    }
  };

  const handleDragEnd = () => {
    if (props.onDragEnd) {
      props.onDragEnd();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.onDragOver) {
      props.onDragOver(e);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.onDrop && props.index !== undefined) {
      props.onDrop(e, props.index);
    }
  };

  const draggingClasses = props.isDragging 
    ? 'opacity-50 scale-95' 
    : 'hover:shadow-lg';

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        h-96
        p-4
        flex
        flex-row
        items-start
        gap-4
        cursor-move
        transition-all
        duration-200
        ${draggingClasses}
      `}
    >

      <div className="
        flex-shrink-0
        w-24
        h-24
        ">
        <img
          src={props.avatarImage}
          alt={props.title}
          className="
            w-full
            h-full
            rounded-full
            object-cover
            "
        />
      </div>

      <div className="
        flex-1
        flex
        flex-col
        justify-between
        ">
        <div>
          <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
          <p className="mt-2 text-sm text-gray-500">{props.description}</p>
        </div>
      </div>

    </div>
  );
}

export default AvatarCard;
