import React from 'react'
import FeatureCard from '../components/cards/FeatureCard';

const AboutPage = () => {
  return (
    <>
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='relative md:basis-[55%]'>
                    <div className='bg-blue-400 h-[870px] w-[60%]'>
                        <img src="https://gmhluxury.com/wp-content/uploads/2023/09/yht.png" alt="user bg"  width="100%" height="100%" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='bg-red-400 h-[450px] top-48 left-[19rem] absolute w-[40%]'>
                        <img src="https://sidorluxury.com/assets/images/team/t1.jpg" alt="user" width="100%" height="100%" className='w-full h-full' />
                    </div>
                </div>

                <div className='md:basis-[45%]'>
                    <div className='text-lg pt-24 text-center md:pr-12 md:text-left space-y-4'>
                        <p>
                        <span className='first-letter text-6xl float-left clear-left text-[#c4a76d] mr-2'>W</span>elcome to S’idor Luxury, your premier destination for exquisite interior design in Lagos, Nigeria. With an illustrious track record spanning over two decades, we have consistently delivered top-tier interior design services. Our specialization extends to impeccable finishing, lavish furnishing, meticulous remodeling, and dependable repair services. 
                        </p>

                        <p>
                            What sets us apart is our exceptional team of seasoned professionals who possess an unrivaled blend of knowledge and skill. No project is too large or too small for us to handle with finesse. We take immense pride in our commitment to delivering workmanship of the highest quality, coupled with a dedication to outstanding customer service and competitive pricing.
                        </p>

                        <p>
                        At S’idor Luxury, we hold customer satisfaction as our paramount goal. We invest the time to deeply understand your needs, budget, and timeline. This personalized approach enables us to craft tailor-made solutions that precisely align with your requirements. Our philosophy revolves around getting it right the first time, ensuring that you are wholly content with the results.
                        </p>

                        <p>
                        We continually strive to surpass customer expectations with every project we undertake. S’idor Luxury is your trusted partner in creating captivating and captivating interior spaces that reflect your unique vision and style.
                        </p>

                        
                    </div>

                    <div className='mt-8'>
                        <img src="https://vivabelladesigns.com/wp-content/uploads/2020/11/signature-final.png" alt="signature" width="200" height="200" className='block mx-auto md:mx-0' />
                    </div>
                </div>          
            </div>

            <div className="mt-12 flex flex-col items-center justify-center">
                <div className="text-center">
                    <img src="https://vivabelladesigns.com/wp-content/uploads/2022/05/Logo-Icon-600x597.png" alt="tag" width="260" height="260" className='mx-auto'/>

                    <h3 className="text-4xl font-bold mt-4">S’idor Luxury Certified Partners</h3>
                </div>

                <div className='pt-10 text-center md:w-[40%] space-y-4'>
                    <p className='text-lg'>
                    <span className='first-letter text-6xl float-left clear-left text-[#c4a76d]'>A</span>t S’idor Luxury, our Certified Partners program celebrates exceptional talent in interior design.
                    </p>

                    <p>
                    Join a community of innovative professionals dedicated to creating inspiring spaces. Gain exclusive resources and support while contributing to the future of design excellence.  
                    </p>

                    <p>
                    Together, let's elevate the art of interior design. 
                    </p>                   
                </div>
            </div>

            <div className="py-16">
                <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
                    <div>
                        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
                            Our Services
                        </h2>
                    </div>
                    <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
                    <FeatureCard number="1" title="Design consultancy" description="Our expert team offers personalized design consultations to transform your space. We provide comprehensive guidance on layout, color schemes, furniture selection, and decor, tailored to your unique style and requirements." imageUrl="https://sidorluxury.com/assets/images/services/s1.jpg" />

                    <FeatureCard number="2" title="Turn-key Project solutions" description="We offer turnkey corporate, commercial, retail, hospitality and luxury residential interior design, interior architecture, project management and bespoke furniture design services to private individuals and property developers." imageUrl="https://sidorluxury.com/assets/images/services/s2.jpg" />

                    <FeatureCard number="3" title="Interior design and fit-out" description="Interior design and fit-out services offered by our company aim to transform spaces into functional and aesthetically pleasing environments. Our fit-out services focus on the implementation of these designs, ensuring meticulous attention to detail during the construction and installation phase." imageUrl="https://sidorluxury.com/assets/images/services/s3.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutPage; 