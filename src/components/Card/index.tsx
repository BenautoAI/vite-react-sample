import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface CardProps {
  id: string | number;
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

function Card(props: CardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <article 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-xl
        hover:scale-105
        cursor-grab
        active:cursor-grabbing
      "
    >
      <img 
        src={props.image} 
        alt={props.imageAlt || props.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          {props.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {props.description}
        </p>
      </div>
    </article>
  );
}

export default Card;
