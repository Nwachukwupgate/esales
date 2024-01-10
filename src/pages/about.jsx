import React from 'react'
import FeatureCard from '../components/cards/FeatureCard';

const AboutPage = () => {
  return (
    <>
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='relative md:basis-[55%]'>
                    <div className='bg-blue-400 h-[870px] w-[60%]'></div>
                    <div className='bg-red-400 h-[450px] top-48 left-[19rem] absolute w-[40%]'></div>
                </div>

                <div className='md:basis-[45%]'>
                    <div className='pt-24 pr-12 text-left space-y-4'>
                        <p>
                        <span className='first-letter text-6xl float-left clear-left text-red-500 mr-2'>W</span>elcome to S’idor Luxury, your premier destination for exquisite interior design in Lagos, Nigeria. With an illustrious track record spanning over two decades, we have consistently delivered top-tier interior design services. Our specialization extends to impeccable finishing, lavish furnishing, meticulous remodeling, and dependable repair services. 
                        </p>

                        <p>
                            What sets us apart is our exceptional team of seasoned professionals who possess an unrivaled blend of knowledge and skill. No project is too large or too small for us to handle with finesse. We take immense pride in our commitment to delivering workmanship of the highest quality, coupled with a dedication to outstanding customer service and competitive pricing.
                        </p>

                        <p>
                        At S’idor Luxury, we hold customer satisfaction as our paramount goal. We invest the time to deeply understand your needs, budget, and timeline. This personalized approach enables us to craft tailor-made solutions that precisely align with your requirements. Our philosophy revolves around getting it right the first time, ensuring that you are wholly content with the results.
                        </p>

                        {/* <p>
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
                        </p>

                        <p>
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                        </p> */}
                    </div>

                    <div className='mt-8'>
                        <img src="https://vivabelladesigns.com/wp-content/uploads/2020/11/signature-final.png" alt="signature" width="200" height="200" />
                    </div>
                </div>          
            </div>

            <div className="mt-12 flex flex-col items-center justify-center">
                <div className="text-center">
                    <img src="https://vivabelladesigns.com/wp-content/uploads/2022/05/Logo-Icon-600x597.png" alt="tag" width="260" height="260" className='mx-auto'/>

                    <h3 className="text-4xl font-normal mt-4">The VIVABELLA Story</h3>
                </div>

                <div className='pt-10 text-center md:w-[40%] space-y-4'>
                    <p>
                    <span className='first-letter text-6xl float-left clear-left text-red-500'>L</span>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>

                    <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla vel, aliquet nec. 
                    </p>

                    <p>
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eu. 
                    </p>                   
                </div>
            </div>

            <div className="py-16">
                <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
                    <div>
                    <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
                        A technology-first approach to payments <br className="lg:block" hidden />
                        and finance
                    </h2>
                    </div>
                    <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
                    <FeatureCard number="1" title="First feature" description="Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum." imageUrl="https://cdn-icons-png.flaticon.com/512/7983/7983132.png" />
                    <FeatureCard number="2" title="Second feature" description="Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum." imageUrl="https://cdn-icons-png.flaticon.com/512/7983/7983306.png" />
                    <FeatureCard number="3" title="Third feature" description="Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum." imageUrl="https://cdn-icons-png.flaticon.com/512/7983/7983333.png" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutPage; 