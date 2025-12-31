import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  return (
    <>
      <div className="space-y-6">
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
        />
        <Avatar
          realname="Fei Zhang"
          nickname="@Fei_Dev"
          photoUrl="https://i.pravatar.cc/150?img=5"
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;