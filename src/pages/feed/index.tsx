import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import PlanGrid from "../../components/PlanGrid"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 px-4">Our Plans</h2>
        <PlanGrid plans={[]} />
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 px-4">Feed</h2>
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;