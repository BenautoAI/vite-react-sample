import Avatar from "../../components/Avatar"
import CardList from "../../components/CardList"

interface CardData {
  id: string;
  title: string;
}

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10 max-w-2xl">
        <CardList cards={[
          { id: '1', title: 'Foto Casa' },
          { id: '2', title: 'Foto Casa' },
          { id: '3', title: 'Foto Casa' },
          { id: '4', title: 'Foto Casa' },
          { id: '5', title: 'Foto Casa' },
          { id: '6', title: 'Foto Casa' },
          { id: '7', title: 'Foto Casa' },
          { id: '8', title: 'Foto Casa' },
          { id: '9', title: 'Foto Casa' }
        ]} />
      </div>
    </>
  );
}

export default FeedPage;