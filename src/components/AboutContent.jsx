import React from 'react';
import AboutImage from "../assets/images/about-welcomee.png";
import OfferImage from "../assets/images/home-photo-ii.png"

export default function AboutContent() {
  return (
    <div className='about-container inline-block py-8 px-8 mt-16'>
      <div className='flex flex-col md:flex-row justify-around items-center py-4 px-4'>
        <div className='text-center md:text-left'>
          <h1 className='text-5xl'>Welcome to</h1>
          <h1 className='text-5xl text-bgColor'>Bali Edventures Tours!</h1>
          <p className='py-8'>
            <i>
              We are a dedicated travel agency based in Bali,
              <br /> specializing in creating unique and immersive educational travel experiences.
              <br />
              Our mission is to inspire curiosity, foster learning, and provide unforgettable journeys
              <br /> that blend cultural, natural, and innovative attractions.
            </i>
          </p>
        </div>
        <img src={AboutImage} alt="About" className='w-96 h-auto rounded-lg mt-8 md:mt-0' />
      </div>

      <div className='visimisi-container flex flex-col md:flex-row gap-20 px-12 py-12'>
        <div className='visi w-full md:w-1/2'>
          <h1 className='text-2xl text-center font-semibold border-b-2 border-thdbgColor text-bgColor pb-2 mb-4'>Our Vision</h1>
          <p>
            At EduBali Tours, we envision a world where travel is not just about seeing new places but also about gaining new knowledge, understanding diverse cultures, and appreciating the natural environment. We believe in the power of educational travel to transform lives and create lasting memories.
          </p>
        </div>

        <div className='misi w-full md:w-1/2'>
          <h1 className='text-2xl text-center font-semibold border-b-2 border-thdbgColor text-bgOrange pb-2 mb-4'>Our Mission</h1>
          <p>
            Our mission is to provide high-quality, enriching travel experiences that educate and inspire our guests. We aim to showcase the best of Bali's cultural heritage, natural beauty, and sustainable innovations through carefully curated tours and activities.
          </p>
        </div>
      </div>

      <div className='offering px-8 py-8'>
        
        <h1 className='text-4xl border-b-2  border-bgOrange font-semibold mb-4'>What We Offer</h1>
        <div className='flex gap-12'>
        <img src={OfferImage} alt="" className='w-96 h-auto rounded-lg mt-8 md:mt-0'/>
        <ul className='list-disc list-inside space-y-2 text-lg'>
          <li>Educational Tours: Tailored journeys to museums, cultural sites, nature reserves, and innovative communities.</li>
          <li>Expert Guides: Knowledgeable guides who are passionate about sharing their expertise and love for Bali.</li>
          <li>Sustainable Travel: Commitment to eco-friendly practices and supporting local communities.</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
