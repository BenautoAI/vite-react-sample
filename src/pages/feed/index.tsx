import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const cardData = [
    { id: 1, title: "Mountain Retreat", description: "Beautiful mountain cabin with stunning views of the surrounding peaks and valleys." },
    { id: 2, title: "Beach House", description: "Oceanfront property with direct beach access and breathtaking sunset views every evening." },
    { id: 3, title: "City Apartment", description: "Modern downtown loft featuring contemporary design and easy access to restaurants and shops." },
    { id: 4, title: "Country Cottage", description: "Charming rural home surrounded by peaceful gardens and rolling countryside landscapes." },
    { id: 5, title: "Lake House", description: "Waterfront estate with private dock, perfect for fishing and water sports enthusiasts." },
    { id: 6, title: "Forest Cabin", description: "Secluded woodland retreat offering privacy and tranquility among towering pine trees." },
    { id: 7, title: "Desert Villa", description: "Luxurious residence with panoramic desert views and spectacular star-filled night skies." },
    { id: 8, title: "Urban Townhouse", description: "Sophisticated city home with rooftop terrace and proximity to cultural attractions." },
    { id: 9, title: "Riverside Bungalow", description: "Cozy home beside a flowing river, ideal for nature lovers and outdoor activities." },
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid items={cardData} />
      </div>
    </>
  );
}

export default FeedPage;