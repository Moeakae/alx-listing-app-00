// pages/index.tsx
import React from 'react';
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/common/Pill';
import PropertyCard from '@/components/common/PropertyCard';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_BG.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="flex gap-3 flex-wrap justify-center">
          {FILTERS.map((filter, index) => (
            <Pill key={index} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;

