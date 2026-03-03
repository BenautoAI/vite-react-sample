import Avatar from "../../components/Avatar"
import CardsList from "../../components/CardsList"

function FeedPage() {
  const cardItems = [
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
        <CardsList items={cardItems} />
      </div>
    </>
  );
}

export default FeedPage;