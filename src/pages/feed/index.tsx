import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import FeedList from "../../components/FeedList"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedList />
      </div>
    </>
  );
}

export default FeedPage;