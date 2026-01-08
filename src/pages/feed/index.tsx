import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import ViteFeiAvatar from "../../components/ViteFeiAvatar"

function FeedPage() {
  return (
    <>
      <ViteFeiAvatar />
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