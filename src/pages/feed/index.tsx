import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardsList from "../../components/CardsList"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
      <div className="mt-10">
        <CardsList />
      </div>
    </>
  );
}

export default FeedPage;