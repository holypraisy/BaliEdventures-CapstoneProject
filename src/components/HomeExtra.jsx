import React from 'react';
import Button from './elements/Button';

export default function HomeExtra() {
  return (
    <div className="why-choose-us flex flex-row px-14 py-4 gap-12">
    <div className="why-us-desc flex-1">
        <h1 className="text-4xl font-semibold border-b-2 border-bgOrange pb-2 mb-4">
        Why Choose Us ?
        </h1>
        <p className="leading-relaxed">
        Choose Bali Edventures for our expert local guides, <br />
        immersive educational experiences, <br />
        and dedication to sustainability. <br />
        We go the extra mile to ensure that your trip <br />
        is not only enjoyable but also meaningful and impactful.
        </p>

        <div className="btn-container bg-bgColor border rounded  flex flex-col items-center justify-center mt-4 w-1/4 h-auto">
                <Button>
                <a href="/about" className="text-white hover:text-black font-semibold text-center align-middle">
                More...
                </a>  
                </Button>
            </div>
    </div>

    <div className="why-us-image flex-1">
        <img
        src={require("../assets/images/home-photo-ii.png")}
        alt="Why Choose Us"
        className="w-full h-auto object-cover rounded-lg"
        />
    </div>
</div>

  )
}
