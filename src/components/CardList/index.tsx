import { useState } from 'react';

interface CardItem {
  id: string;
  nickname: string;
  realname: string;
  image: string;
}

interface CardListProps {
  items: CardItem[];
  onItemsChange?: (items: CardItem[]) => void;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardItem[]>(props.items);
  const [draggedItem, setDraggedItem] = useState<CardItem | null>(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  const handleDragStart = (item: CardItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (index: number) => {
    setDraggedOverIndex(index);
  };

  const handleDragLeave = () => {
    setDraggedOverIndex(null);
  };

  const handleDrop = (index: number) => {
    if (draggedItem === null) return;

    const draggedIndex = items.findIndex(item => item.id === draggedItem.id);
    if (draggedIndex === index) {
      setDraggedItem(null);
      setDraggedOverIndex(null);
      return;
    }

    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    setDraggedItem(null);
    setDraggedOverIndex(null);

    if (props.onItemsChange) {
      props.onItemsChange(newItems);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedOverIndex(null);
  };

  return (
    <div className="
      flex 
      flex-col 
      gap-4 
      w-full
    ">
      {items.map((item, index) => (
        <div 
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          onDragOver={handleDragOver}
          onDragEnter={() => handleDragEnter(index)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`
            bg-white 
            rounded-lg 
            shadow-md 
            p-6 
            flex 
            flex-row 
            items-center 
            gap-6
            cursor-move
            transition-all
            duration-200
            ${draggedItem?.id === item.id ? 'opacity-50' : 'opacity-100'}
            ${draggedOverIndex === index && draggedItem?.id !== item.id ? 'ring-2 ring-blue-400 ring-inset' : ''}
          `}
        >
          <div className="
            w-24 
            h-24 
            flex-shrink-0
          ">
            <img
              className="
                w-full 
                h-full 
                rounded-full 
                object-cover 
                border-4 
                border-gradient-to-r 
                from-[#6EE7B7] 
                via-[#3B82F6] 
                to-[#9333EA]
              "
              src={item.image}
              alt={item.nickname}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="
              text-lg 
              font-semibold 
              text-gray-900
            ">
              {item.nickname}
            </h3>
            <p className="
              text-sm 
              text-gray-600 
              mt-1
            ">
              {item.realname}
            </p>
          </div>

          <button className="
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            font-medium 
            py-2 
            px-6 
            rounded-lg 
            flex-shrink-0
          ">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
