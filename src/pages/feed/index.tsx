import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import FeiAvatar from "../../components/FeiAvatar"

function FeedPage() {
  return (
    <>
      <div className="mb-8">
        <FeiAvatar />
      </div>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;