import {useState, useEffect} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from '../config/firebase';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DetailsPage = () => {

  const { id } = useParams();
  const [project, setProject] = useState(null)

  const getProjectList = async () => {
    try {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProject(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  console.log("new", project);

  const imagesArray = [
      {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: "https://gmhluxury.com/wp-content/uploads/2021/07/1-_4_-2.jpg",
        title: "Carousel Building",
      },
      {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "https://gmhluxury.com/wp-content/uploads/2022/03/GCC4-ANNEX-A.png",
        title: "Carousel Building",
      },
      {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://gmhluxury.com/wp-content/uploads/2022/09/visual-8-4.jpg",
      },
      {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "https://gmhluxury.com/wp-content/uploads/2022/03/GCC4-ANNEX-A.png",
        title: "Carousel Building",
      },
      {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://gmhluxury.com/wp-content/uploads/2022/09/visual-8-4.jpg",
      },
  ];

  return (
    <div>
        <div>
            <img src={project?.image} alt="details" width="100%" height="500" className='mx-auto' style={{ objectFit: 'cover', height: '500px' }} />
        </div>

        <div className='md:flex md:my-12 md:mx-16 gap-x-44'>
            <div className='basis-3/4'>
                <h1 className='text-4xl'>{project?.name}</h1>
                <p className='px-8 text-base mt-4'>
                    {project?.description}
                </p>
            </div>

            <div className='basis-1/4 self-center justify-self-center'>
                <div className='bg-gray-800 text-white p-12 text-center'>
                    <div> <p>Talk to sales</p> </div>
                    <p>+234 0706 732 0740</p>
                </div>           
            </div>
        </div>

        <div className='mt-8 md:my-12 md:mx-16'>
            <h2 className='text-3xl font-medium mb-4'>Gallery</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    
                  <SwiperSlide> <img src={project?.image2} alt={project?.name} /> </SwiperSlide>
                  <SwiperSlide> <img src={project?.image3} alt={project?.name} /> </SwiperSlide>
                  <SwiperSlide> <img src={project?.image4} alt={project?.name} /> </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default DetailsPage