import FeedCard from "../FeedCard";
import { useDragDrop } from "../../hooks/useDragDrop";

interface CardListProps {
  items?: Array<{ id: string; title: string }>;
}

function CardList({ items }: CardListProps) {
  // Default items if none provided
  const defaultItems = [
    { id: "1", title: "Foto Casa" },
    { id: "2", title: "Foto Casa" },
    { id: "3", title: "Foto Casa" },
    { id: "4", title: "Foto Casa" },
    { id: "5", title: "Foto Casa" },
    { id: "6", title: "Foto Casa" },
  ];

  const cardItems = items || defaultItems;
  const {
    items: reorderedItems,
    draggedItemId,
    dragOverItemId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop,
  } = useDragDrop(cardItems);

  return (
    <div className="
      flex
      flex-col
      gap-4
      overflow-y-auto
    ">
      {reorderedItems.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item.id)}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(item.id);
          }}
          onDragLeave={() => handleDragOver('')}
          onDrop={() => handleDrop(item.id)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all
            duration-200
            cursor-move
            ${
              draggedItemId === item.id
                ? 'opacity-50'
                : dragOverItemId === item.id
                ? 'transform scale-105 shadow-lg'
                : ''
            }
          `}
        >
          <FeedCard title={item.title} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
