import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import ViteLogoWithAvatar from "../../components/ViteLogoWithAvatar"

function FeedPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <ViteLogoWithAvatar size={400} />
        </div>
        <div>
          <Avatar
            realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
        </div>
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;