// components/common/PropertyCard.tsx
import React from 'react';

interface PropertyCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ image, name, price, rating }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
        <p className="text-sm text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
