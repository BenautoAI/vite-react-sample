import UserProfile from "../../components/UserProfile"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  return (
    <>
      <div>
        <UserProfile
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;