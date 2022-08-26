import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../Assets/Images/screen1.png";

const WlcmCarousel = () => {
  return (
    <>
      <Carousel  autoPlay >
        <div className='flex justify-between items-center '>
                <div>
                    <img src={img1} alt="img1" />
                </div>
                <div>
                    <img src={img1} alt="img2" />
                </div>
                <div>
                    <img src={img1} alt="img3"/>
                </div>
             
        </div>
        <div className='flex justify-between items-center '>
                <div>
                    <img src={img1} alt="img4" />
                </div>
                <div>
                    <img src={img1} alt="img5" />
                </div>
                <div>
                    <img src={img1} alt="img6"/>
                </div>
             
        </div>
        <div className='flex justify-between items-center '>
                <div>
                    <img src={img1} alt="img7" />
                </div>
                <div>
                    <img src={img1} alt="img8" />
                </div>
                <div>
                    <img src={img1} alt="img1"/>
                </div>
             
        </div>
              
            </Carousel>
    </>
  )
}

export default WlcmCarousel;