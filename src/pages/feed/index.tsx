import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardList from "../../components/CardList"

function FeedPage() {
  const profileCards = [
    {
      id: "1",
      name: "Felipe Aguiar",
      title: "Full Stack Developer",
      image: "./src/assets/photo.png",
      actionLabel: "Follow"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      image: "./src/assets/photo.png",
      actionLabel: "Connect"
    },
    {
      id: "3",
      name: "Mike Chen",
      title: "Backend Engineer",
      image: "./src/assets/photo.png",
      actionLabel: "Follow"
    },
    {
      id: "4",
      name: "Emma Davis",
      title: "Product Manager",
      image: "./src/assets/photo.png",
      actionLabel: "Connect"
    },
    {
      id: "5",
      name: "Alex Rivera",
      title: "DevOps Engineer",
      image: "./src/assets/photo.png",
      actionLabel: "Follow"
    },
    {
      id: "6",
      name: "Jordan Smith",
      title: "Data Scientist",
      image: "./src/assets/photo.png",
      actionLabel: "Connect"
    }
  ];

  const handleCardAction = (id: string) => {
    console.log(`Action triggered for card: ${id}`);
  };

  const handleCardsReorder = (reorderedCards: typeof profileCards) => {
    console.log('Cards reordered:', reorderedCards.map(c => c.name));
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>
        <CardList
          cards={profileCards}
          onAction={handleCardAction}
          onCardsReorder={handleCardsReorder}
        />
      </div>
    </>
  );
}

export default FeedPage;