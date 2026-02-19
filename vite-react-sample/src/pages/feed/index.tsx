import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const handleFollowClick = () => {
    console.log("Follow button clicked");
    // TODO: Implement follow/unfollow logic
  };

  return (
    <>
      <div>
        <Avatar
          nickname="@Felipao__DIO🚀"
          realname="Felipe Aguiar"
          imageUrl="/src/assets/photo.png"
          size="medium"
          onFollowClick={handleFollowClick}
          showFollowButton={true}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;