import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const handleFollowClick = () => {
    console.log('Follow button clicked!');
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
          size="md"
          showFollowButton={true}
          isVerified={true}
          onFollowClick={handleFollowClick}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;
