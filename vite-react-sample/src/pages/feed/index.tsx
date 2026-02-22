import Avatar from "../../components/Avatar";
import FeedGrid from "../../components/Grids/Index";
import photoImage from "../../assets/photo.png";

interface Photo {
  id: string | number;
  imageUrl: string;
  title?: string;
  description?: string;
}

function FeedPage() {
  // Sample photo data
  const samplePhotos: Photo[] = [
    {
      id: 1,
      imageUrl: photoImage,
      title: "Casa de Praia",
      description: "Beautiful beach house with ocean view",
    },
    {
      id: 2,
      imageUrl: photoImage,
      title: "Apartamento Moderno",
      description: "Modern apartment in the city center",
    },
    {
      id: 3,
      imageUrl: photoImage,
      title: "Casa de Campo",
      description: "Cozy country house surrounded by nature",
    },
    {
      id: 4,
      imageUrl: photoImage,
      title: "Cobertura Luxo",
      description: "Luxury penthouse with panoramic views",
    },
    {
      id: 5,
      imageUrl: photoImage,
      title: "Chácara",
      description: "Spacious farm with pool and gardens",
    },
    {
      id: 6,
      imageUrl: photoImage,
      title: "Loft Industrial",
      description: "Industrial style loft with high ceilings",
    },
    {
      id: 7,
      imageUrl: photoImage,
      title: "Studio Compacto",
      description: "Compact studio perfect for singles",
    },
    {
      id: 8,
      imageUrl: photoImage,
      title: "Casa de Condomínio",
      description: "Gated community house with security",
    },
    {
      id: 9,
      imageUrl: photoImage,
      title: "Sobrado Familiar",
      description: "Large family house with multiple floors",
    },
  ];

  const handlePhotoClick = (photo: Photo) => {
    console.log("Photo clicked:", photo);
    // TODO: Implement photo detail view or modal
  };

  return (
    <>
      <div>
        <Avatar realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid photos={samplePhotos} onPhotoClick={handlePhotoClick} />
      </div>
    </>
  );
}

export default FeedPage;