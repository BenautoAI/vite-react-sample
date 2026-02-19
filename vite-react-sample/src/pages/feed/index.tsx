import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const handleFollowToggle = (isFollowing: boolean) => {
    console.log("Follow state changed:", isFollowing);
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
          imageUrl="https://i.pravatar.cc/150?img=12"
          isOnline={true}
          initialFollowState={false}
          onFollowToggle={handleFollowToggle}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;