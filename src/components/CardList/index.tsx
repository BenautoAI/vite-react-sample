interface CardListItem {
  id: string;
  image: string;
  title: string;
}

interface CardListProps {
  items: CardListItem[];
}

function CardList(props: CardListProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {props.items.map((item) => (
        <div 
          key={item.id}
          className="
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
