import React from 'react';
import CatCard from '../../components/CatCard';

const CatPage: React.FC = () => {
  const cats = [
    {
      id: 1,
      name: 'Whiskers',
      description: 'A playful tabby cat who loves to chase toys',
      image: 'https://placekitten.com/400/300'
    },
    {
      id: 2,
      name: 'Shadow',
      description: 'A mysterious black cat with green eyes',
      image: 'https://placekitten.com/401/300'
    },
    {
      id: 3,
      name: 'Luna',
      description: 'A gentle white cat who enjoys sunbathing',
      image: 'https://placekitten.com/402/300'
    },
    {
      id: 4,
      name: 'Simba',
      description: 'An adventurous orange cat with a big personality',
      image: 'https://placekitten.com/403/300'
    },
    {
      id: 5,
      name: 'Mittens',
      description: 'A fluffy grey cat with white paws',
      image: 'https://placekitten.com/404/300'
    },
    {
      id: 6,
      name: 'Tiger',
      description: 'A striped cat who thinks he is a big cat',
      image: 'https://placekitten.com/405/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Cat Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              description={cat.description}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatPage;
