interface CardItem {
  id: string;
  title: string;
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
    ">
      {props.items.map((item) => (
        <div
          key={item.id}
          className="
            bg-white
            rounded-lg
            shadow-md
            p-4
          "
        >
          <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
          <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
