interface CardItemProps {
  image: string;
  title: string;
}

function CardItem(props: CardItemProps) {
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      gap-4
      ">

      <div className="card-item__photo">
        <img
          className="
          w-32
          h-32
          rounded-full
          object-cover
          hover:scale-110
          transition-transform
          duration-300
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          "
          src={props.image}
          alt={props.title}
        />
      </div>

      <div className="card-item__text text-center">
        <h3 className="text-lg font-medium text-gray-900">{props.title}</h3>
      </div>

    </div>
  );
}

export default CardItem;
