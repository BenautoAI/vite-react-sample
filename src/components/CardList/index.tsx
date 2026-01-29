import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import Card from "../Card";

interface CardData {
  id: string | number;
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

interface CardListProps {
  cards: CardData[];
  onReorder?: (cards: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const [cards, setCards] = useState(props.cards);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newOrder = arrayMove(items, oldIndex, newIndex);
        
        // Call the optional callback if provided
        if (props.onReorder) {
          props.onReorder(newOrder);
        }
        
        return newOrder;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={cards.map((card) => card.id)}
        strategy={rectSortingStrategy}
      >
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-4
        ">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default CardList;
export type { CardData, CardListProps };
