import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import photoImage from "../../assets/photo.png"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
          imageUrl={photoImage}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;