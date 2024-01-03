import React from 'react'
import FeatureCard from '../components/cards/FeatureCard';

const AboutPage = () => {
  return (
    <>
        <div className='flex'>
            <div className='relative basis-[55%]'>
                <div className='bg-blue-400 h-[870px] w-[500px]'></div>
                <div className='bg-red-400 h-[450px] top-48 left-[19rem] absolute w-[400px]'></div>
            </div>

            <div className='basis-[45%]'>
                <div className='pt-24 pr-12 text-left space-y-4'>
                    <p>
                    <span className='first-letter text-6xl float-left clear-left text-red-500 mr-2'>L</span>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    </p>

                    <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                    </p>

                    <p>
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                    </p>

                    <p>
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
                    </p>

                    <p>
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                    </p>
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
                <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
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
    </>
  )
}

export default AboutPage; 