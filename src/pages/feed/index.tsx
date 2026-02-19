import Avatar from "../../components/Avatar";
import FeedGrid from "../../components/Grids/Index";

/**
 * FeedPage component displaying user profile and feed content.
 * Shows an avatar section with user information and a grid of feed cards
 * with vibrant gradient borders for visual engagement.
 */
function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
          imageUrl="/src/assets/photo.png"
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;