import React from 'react';
import TripItem from './tripItem';
import tripsData from '../data/data.json'; // assuming you have your trips data in data.json

export default function TripList() {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-semibold text-center mt-8'>- Available <span className='text-bgColor'>Trip</span> -</h1>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8'>
        {tripsData.trips.map(trip => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
