import { useState } from 'react';
import CardList, { CardData } from "../../components/CardList";

function CardListDemoPage() {
  const initialData: CardData[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Mountain Landscape"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Ocean Waves"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Beautiful Sunset"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Forest Trail"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "City Lights"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Desert Sand"
    }
  ];

  const [cardData, setCardData] = useState<CardData[]>(initialData);

  const handleDataChange = (newData: CardData[]) => {
    setCardData(newData);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Card List Demo</h1>
      <p className="text-gray-600 mb-6">Drag and drop cards to reorder them</p>
      <CardList data={cardData} onDataChange={handleDataChange} />
    </div>
  );
}

export default CardListDemoPage;
