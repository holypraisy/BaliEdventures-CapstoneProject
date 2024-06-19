    import React from 'react';
    import Button from './elements/Button';

    export default function HeroSection() {
        return (
            <section className='home flex flex-col mt-12'> 
            <div className="hero-section w-full px-14 py-4 sm:px-14 mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="hero-section-description w-full md:w-1/2 p-5 flex flex-col justify-center gap-6 md:gap-8">
                    <div className='py-4 px-4 md:py-12'>
                        <p className="font-normal text-xl text-black ">
                            Learn, Play, and Explore Bali:
                        </p>
                        <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
                            " Where Every 
                        </h1>

                        <h1 className='mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-black'>   
                        <span className='text-bgColor'>Trip</span> is a
                        </h1>
                        <h1 className='mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-black'>   
                            Lesson in <span className='text-bgOrange'>Fun</span> !  "
                        </h1>
                    
                        <div className="btn-container bg-bgOrange border rounded  flex flex-col items-center justify-center">
                            <Button>
                            <a href="/trip" className="text-white hover:text-black font-bold text-center align-middle">
                            Explore Now
                            </a>  
                            </Button>
                        </div>

                        
                    </div>
                </div>
                <div className="banner-image w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 px-4">
                    <img 
                        src={require("../assets/images/herosection-photo.png")} 
                        alt="banner" 
                        className="max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-96 xl:max-h-96" 
                    />
                </div>

            </div>

            <div className='home-description flex flex-row px-4 py-4 gap-8'>
                <div className='home-image'>
                    <img src={require("../assets/images/herosection-photo-ii.png")} alt=""
                    className="max-h-24 sm:max-h-48 md:max-h-72 lg:max-h-96 xl:max-h-96 px-12"  />
                </div>

                <div className="hero-section-description-ii py-4">
                    <h1 className="text-3xl font-semibold ">“ Embark on an</h1>
                    <h1 className="text-3xl font-semibold bg-thdbgColor p-2">enlightening journey. ”</h1>

                    <ul className="list-disc list-inside mt-4 space-y-4">
                        <li className="leading-relaxed">
                        Unforgettable educational tourism: 
                        A blend of travel and learning.
                        </li>
                        <li className="leading-relaxed">
                        Special packages for families and students, <br />
                        tailored experiences based on interests and needs.
                        </li>
                        <li className="leading-relaxed">
                        Knowledgeable local guides provide 
                        deep insights about Bali.
                        </li>
                    </ul>
                </div>
            </div>
            </section>

        );
    }
        