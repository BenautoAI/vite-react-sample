import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardList from "../../components/CardList"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Grid View</h3>
        <FeedGrid />
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">List View</h3>
        <CardList />
      </div>
    </>
  );
}

export default FeedPage;