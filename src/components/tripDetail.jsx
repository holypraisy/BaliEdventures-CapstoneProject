import React from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../data/data.json';
import destinationsData from '../data/data-destinasi.json'; // Import data destinasi
import { FaClock, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TripDetail() {
  const { id } = useParams();
  const trip = tripsData.trips.find(trip => trip.id === parseInt(id));

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const destinations = destinationsData[trip.nama_trip] || [];

  return (
    <div className='trip-detail max-w-4xl mx-auto p-6 mt-20'>
      <h1 className='text-4xl font-bold mb-4'>{trip.nama_trip}</h1>
      <img src={trip.photo_detail} alt={trip.nama_trip} className='w-3/4 h-auto rounded-lg mb-4 items-center' />
      <p className='text-lg mb-2'>{trip.deskripsi}</p>
      <div className='flex items-center mb-2'>
        <FaClock className='text-lg mr-2 text-bgColor' />
        <p className='text-lg'><strong>Durasi:</strong> {trip.durasi}</p>
      </div>
      <div className='flex items-center mb-4'>
        <FaMoneyBillAlt className='text-lg mr-2 text-bgColor' />
        <p className='text-lg'><strong>Harga:</strong> Rp {trip.harga.toLocaleString()}</p>
      </div>


      <Link to='/booking'>

      <button className='bg-bgOrange text-white font-bold py-4 px-4 rounded mt-4'>
        Payment
      </button>
      </Link>
    </div>
  );
}
