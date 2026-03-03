import Avatar from "../../components/Avatar"
import DragDropGrid from "../../components/DragDropGrid"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <DragDropGrid />
      </div>
    </>
  );
}

export default FeedPage;