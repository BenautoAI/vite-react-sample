import Avatar from "../../components/Avatar"
import CardList from "../../components/CardList"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <CardList />
      </div>
    </>
  );
}

export default FeedPage;