import Avatar from "../../components/Avatar"
import Avatar2 from "../../components/Avatar2"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10 flex justify-center">
        <Avatar2 size="xl" alt="Anime Avatar" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;