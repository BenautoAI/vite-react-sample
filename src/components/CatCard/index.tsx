import React from 'react';

interface CatCardProps {
  image?: string;
  name: string;
  description?: string;
}

const CatCard: React.FC<CatCardProps> = ({ image, name, description }) => {
  return (
    <div className="bg-green-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
        {description && (
          <p className="text-white text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default CatCard;
