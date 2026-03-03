import Avatar from "../../components/Avatar"
import DynamicCardList from "../../components/DynamicCardList"

interface CardData {
  title: string;
  description?: string;
}

function FeedPage() {
  const cardData: CardData[] = [
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <DynamicCardList cards={cardData} />
      </div>
    </>
  );
}

export default FeedPage;