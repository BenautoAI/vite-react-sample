import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import LogoHeader from "../../components/LogoHeader"

function FeedPage() {
  return (
    <>
      <LogoHeader
        realname="Felipe Aguiar"
        nickname="@Felipao__DIO🚀"
      />
      <div className="mt-10">
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