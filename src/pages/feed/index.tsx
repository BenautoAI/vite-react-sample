import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import FeiWizard from "../../components/FeiWizard"

function FeedPage() {
  return (
    <>
      <div className="flex justify-center mb-10">
        <FeiWizard width={300} height={300} />
      </div>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;