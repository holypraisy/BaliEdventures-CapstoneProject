import React from 'react';
import { FaClock, FaMoneyBillAlt } from 'react-icons/fa';

export default function TripItem({ trip }) {
  return (
    <div className='trip-item border rounded-lg p-4 m-4 shadow-lg flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 pr-0 md:pr-4'>
        <img src={trip.photo} alt={trip.nama_trip} className='w-full h-auto rounded-md mb-4' />
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-between'>
        <div>
          <h2 className='text-2xl font-semibold mb-2'>{trip.nama_trip}</h2>
          <p className='text-lg mb-4'>{trip.deskripsi}</p>
        </div>
        <div>
          <div className='flex items-center mb-2'>
            <FaClock className='text-lg mr-2 text-bgColor' />
            <p className='text-lg'><strong>Duration:</strong> {trip.durasi}</p>
          </div>
          <div className='flex items-center mb-4'>
            <FaMoneyBillAlt className='text-lg mr-2 text-bgColor' />
            <p className='text-lg'><strong>Price:</strong> Rp {trip.harga.toLocaleString()}</p>
          </div>
          <button className='bg-bgOrange text-white font-bold py-2 px-4 rounded'>
            Booking
          </button>
        </div>
      </div>
    </div>
  );
}
