import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import 'swiper/css';
import Typed from "typed.js";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar]);

const ImageSlider = ({ images }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Luxury", "Fittings", "Furnitures"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

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
            <div className="relative h-screen">
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="text-8xl font-bold text-white z-10">Welcome to <span className='block md:inline' ref={el}></span></h1>
              </div>
            </div>         
          </SwiperSlide>
        ))}
      
    </Swiper> 
  );
};

export default ImageSlider;
