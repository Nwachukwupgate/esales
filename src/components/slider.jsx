import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import 'swiper/css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar]);

const ImageSlider = ({ images }) => {
  return (  
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Scrollbar, Autoplay]}
      effect={"Fade"}
      spaceBetween={30}     
      loop = {true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      
        {images.map((image, index) => (
          <SwiperSlide key={index}>    
          <div className='h-[30rem'>             
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />  
            </div>       
          </SwiperSlide>
        ))}
      
    </Swiper> 
  );
};

export default ImageSlider;
