import Avatar from "../../components/Avatar"
import PlanGrid from "../../components/PlanGrid"

function PlanPage() {
  return (
    <div className="p-4">
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
        />
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Task Planning</h1>
        <PlanGrid />
      </div>
    </div>
  );
}

export default PlanPage;
