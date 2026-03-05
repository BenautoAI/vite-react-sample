import CardList from "../../components/CardList"

function CardListPage() {
  const cardItems = [
    {
      id: "1",
      nickname: "@Felipao__DIO🚀",
      realname: "Felipe Aguiar",
      image: "./src/assets/photo.png"
    },
    {
      id: "2",
      nickname: "@DevMaster",
      realname: "Alex Developer",
      image: "./src/assets/photo.png"
    },
    {
      id: "3",
      nickname: "@DesignPro",
      realname: "Sarah Designer",
      image: "./src/assets/photo.png"
    },
    {
      id: "4",
      nickname: "@CodeNinja",
      realname: "John Smith",
      image: "./src/assets/photo.png"
    },
    {
      id: "5",
      nickname: "@WebWizard",
      realname: "Emma Johnson",
      image: "./src/assets/photo.png"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="
        text-3xl 
        font-bold 
        text-gray-900 
        mb-8
      ">
        Users List
      </h1>
      <CardList items={cardItems} />
    </div>
  );
}

export default CardListPage;
