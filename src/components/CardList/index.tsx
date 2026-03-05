interface CardItem {
  id: string;
  nickname: string;
  realname: string;
  image: string;
}

interface CardListProps {
  items: CardItem[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      flex 
      flex-col 
      gap-4 
      w-full
    ">
      {props.items.map((item) => (
        <div 
          key={item.id}
          className="
            bg-white 
            rounded-lg 
            shadow-md 
            p-6 
            flex 
            flex-row 
            items-center 
            gap-6
          "
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
