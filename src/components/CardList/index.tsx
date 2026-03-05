interface CardListItem {
  id: string;
  image: string;
  title: string;
}

interface CardListProps {
  items: CardListItem[];
  draggedItemId?: string | null;
  dragOverItemId?: string | null;
  onDragStart?: (id: string) => void;
  onDragOver?: (id: string) => void;
  onDragEnd?: () => void;
}

function CardList(props: CardListProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {props.items.map((item) => (
        <div 
          key={item.id}
          draggable
          onDragStart={() => props.onDragStart?.(item.id)}
          onDragOver={() => props.onDragOver?.(item.id)}
          onDragEnd={props.onDragEnd}
          onDragLeave={props.onDragEnd}
          className={`
            flex 
            flex-col 
            items-center 
            gap-3
            bg-white 
            rounded-lg 
            shadow-md 
            p-6
            w-full
            max-w-sm
            mx-auto
            cursor-move
            transition-all
            duration-200
            ${props.draggedItemId === item.id ? 'opacity-50' : ''}
            ${props.dragOverItemId === item.id && props.draggedItemId !== item.id ? 'ring-2 ring-blue-400' : ''}
          "
        >
          <div className="relative">
            <img
              className="
                w-32 
                h-32 
                rounded-full 
                object-cover
                bg-gradient-to-r 
                p-1
                from-[#6EE7B7] 
                via-[#3B82F6] 
                to-[#9333EA]
              "
              src={item.image}
              alt={item.title}
            />
          </div>
          <h3 className="text-lg font-medium text-gray-900 text-center">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CardList;
