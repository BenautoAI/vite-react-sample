import CardList from "../../components/CardList"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const users = [
    { id: "1", nickname: "@Felipao__DIO🚀", realname: "Felipe Aguiar" },
    { id: "2", nickname: "@DevMaster", realname: "Carlos Silva" },
    { id: "3", nickname: "@ReactQueen", realname: "Ana Santos" },
    { id: "4", nickname: "@CodeNinja", realname: "João Costa" },
    { id: "5", nickname: "@TechWizard", realname: "Maria Oliveira" },
    { id: "6", nickname: "@WebMagic", realname: "Pedro Ferreira" },
  ]

  return (
    <>
      <div className="mt-10">
        <CardList users={users} />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;