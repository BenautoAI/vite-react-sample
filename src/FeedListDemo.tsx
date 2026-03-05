import Avatar from "./components/Avatar"
import FeedList from "./components/FeedList"

function FeedListDemo() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedList />
      </div>
    </>
  );
}

export default FeedListDemo;
