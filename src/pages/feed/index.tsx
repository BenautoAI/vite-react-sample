import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CatFight from "../../components/CatFight"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <CatFight cat1Name="Whiskers" cat2Name="Mittens" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;