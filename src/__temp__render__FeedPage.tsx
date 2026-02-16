import Avatar from "./components/Avatar"
import FeedGrid from "./components/Grids/Index"

function FeedPage() {
  return (
    <div className="p-8">
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </div>
  );
}

export default FeedPage;
