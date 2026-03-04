import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardList from "../../components/CardList"

function FeedPage() {
  const cardItems = [
    {
      id: 1,
      image: "./src/assets/photo.png",
      nickname: "@Felipao__DIO🚀",
      realname: "Felipe Aguiar",
      followUrl: "#"
    },
    {
      id: 2,
      image: "./src/assets/photo.png",
      nickname: "@DevMaster",
      realname: "Dev Master",
      followUrl: "#"
    },
    {
      id: 3,
      image: "./src/assets/photo.png",
      nickname: "@CodeWizard",
      realname: "Code Wizard",
      followUrl: "#"
    },
    {
      id: 4,
      image: "./src/assets/photo.png",
      nickname: "@TechGuru",
      realname: "Tech Guru",
      followUrl: "#"
    },
    {
      id: 5,
      image: "./src/assets/photo.png",
      nickname: "@WebNinja",
      realname: "Web Ninja",
      followUrl: "#"
    },
    {
      id: 6,
      image: "./src/assets/photo.png",
      nickname: "@DataDriven",
      realname: "Data Driven",
      followUrl: "#"
    }
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Team Members</h2>
        <CardList items={cardItems} />
      </div>
    </>
  );
}

export default FeedPage;