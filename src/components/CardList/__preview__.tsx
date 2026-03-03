import React, { useState } from 'react';
import CardList from "./index";

export default function CardListPreview() {
  const initialCards = [
    {
      id: 1,
      title: "Foto Casa",
      description: "Beautiful apartment showcase with stunning interior design"
    },
    {
      id: 2,
      title: "Foto Casa",
      description: "Modern living room with natural lighting and elegant furniture"
    },
    {
      id: 3,
      title: "Foto Casa",
      description: "Contemporary kitchen design with premium appliances"
    },
    {
      id: 4,
      title: "Foto Casa",
      description: "Spacious bedroom with comfortable setup and warm ambiance"
    },
    {
      id: 5,
      title: "Foto Casa",
      description: "Luxury bathroom with modern fixtures and spa-like atmosphere"
    },
    {
      id: 6,
      title: "Foto Casa",
      description: "Outdoor terrace with panoramic views and relaxation area"
    },
    {
      id: 7,
      title: "Foto Casa",
      description: "Home office space designed for productivity and comfort"
    },
    {
      id: 8,
      title: "Foto Casa",
      description: "Cozy reading nook with natural light and shelving"
    },
    {
      id: 9,
      title: "Foto Casa",
      description: "Entryway with elegant design and welcoming atmosphere"
    }
  ];

  const [reorderedCards, setReorderedCards] = useState(initialCards);

  const handleCardsReorder = (newOrder) => {
    setReorderedCards(newOrder);
    console.log('Cards reordered:', newOrder);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">CardList with Drag & Drop</h1>
      <p className="text-gray-600 mb-8">Drag cards to reorder them - Try it out!</p>

      <h2 className="text-2xl font-bold mb-6">3 Columns (Default)</h2>
      <CardList 
        cards={reorderedCards} 
        columns={3}
        onCardsReorder={handleCardsReorder}
      />
      
      <h2 className="text-2xl font-bold mt-12 mb-6">2 Columns</h2>
      <CardList 
        cards={initialCards.slice(0, 4)} 
        columns={2}
      />
      
      <h2 className="text-2xl font-bold mt-12 mb-6">1 Column (List View)</h2>
      <CardList 
        cards={initialCards.slice(0, 2)} 
        columns={1}
      />
    </div>
  );
}
