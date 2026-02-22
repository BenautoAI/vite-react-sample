import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const handleFollowClick = () => {
    console.log('Follow button clicked');
  };

  return (
    <>
      <div>
        <Avatar
          nickname="@Felipao__DIO🚀"
          realname="Felipe Aguiar"
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