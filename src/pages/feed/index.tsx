import Avatar from "../../components/Avatar"
import FeedList from "../../components/FeedList"

function FeedPage() {
  const feedItems = [
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedList items={feedItems} />
      </div>
    </>
  );
}

export default FeedPage;