// interfaces/index.ts

export interface PropertyProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  type: 'Room' | 'Mansion' | 'Countryside' | 'Apartment' | 'Villa' | string;
  amenities?: string[];
  bedrooms?: number;
  bathrooms?: number;
  host?: {
    name: string;
    avatar: string;
  };
}
