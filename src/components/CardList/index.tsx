import Card from "../Card";
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

export interface CardData {
  image: string;
  title: string;
  id?: string | number;
}

export interface CardListProps {
  data: CardData[];
  onDataChange?: (newData: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const { data, draggedIndex, dragOverIndex, handleDragStart, handleDragOver, handleDragLeave, handleDrop, handleDragEnd } = useDragAndDrop(props.data);

  const handleDropWithCallback = (index: number) => {
    handleDrop(index);
    // Notify parent component of data change
    if (props.onDataChange) {
      // We need to get the updated data
      setTimeout(() => {
        props.onDataChange?.(data);
      }, 0);
    }
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {data.map((item, index) => (
        <Card 
          key={item.id || item.title} 
          image={item.image} 
          title={item.title}
          index={index}
          isDragged={draggedIndex === index}
          isDragOver={dragOverIndex === index}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDropWithCallback}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}

export default CardList;
