import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import ViteLogo from "../../components/ViteLogo"

function FeedPage() {
  return (
    <>
      <ViteLogo />
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