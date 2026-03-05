import { useDragDrop } from "../../hooks/useDragDrop";
import FeedCard from "../FeedCard";

export interface CardListItem {
  title: string;
  description?: string;
  [key: string]: any;
}

export interface CardListProps {
  items: CardListItem[];
  onItemsChange?: (items: CardListItem[]) => void;
}

function CardList(props: CardListProps) {
  const {
    items,
    draggedIndex,
    dragOverIndex,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
    setItems,
  } = useDragDrop<CardListItem>(props.items);

  const handleItemsReorder = (newItems: CardListItem[]) => {
    setItems(newItems);
    if (props.onItemsChange) {
      props.onItemsChange(newItems);
    }
  };

  return (
    <div className="
      grid 
      grid-cols-1 
      gap-4"
    >
      {items.map((item, index) => (
        <FeedCard 
          key={index} 
          title={item.title}
          description={item.description}
          isDragging={draggedIndex === index}
          isDragOver={dragOverIndex === index}
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => {
            handleDrop(e, index);
            // Re-sync items after drop
            if (draggedIndex !== null && draggedIndex !== index) {
              const newItems = [...items];
              const draggedItem = newItems[draggedIndex];
              newItems.splice(draggedIndex, 1);
              newItems.splice(index, 0, draggedItem);
              handleItemsReorder(newItems);
            }
          }}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}

export default CardList;
