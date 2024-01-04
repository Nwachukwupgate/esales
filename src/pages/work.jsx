import React from 'react'
import RightContent from '../components/cards/RightContent'
import LeftContent from '../components/cards/LeftContent'

const WorkPage = () => {
  return (
    <div className='flex justify-items-center justify-center flex-col my-32'>
        <div>
            <h2 className='text-4xl	font-semibold text-[#d71300] text-center '>
                <span>Our Luxury Full Service Interior Design</span>
            </h2>

            <div className='mt-32'>
                <img src="https://vivabelladesigns.com/wp-content/uploads/2022/05/formal_page-rotated.jpg" alt="house plan" width="688" height="652" className='mx-auto' />
            </div>

            <div className='md:w-[54%] mx-auto space-y-8 text-center text-[#000] text-xl font-normal mt-20'>
                <p> Our Full Luxury Design Service is a Stress Free Process, which  includes working with you on your project offering a service that truly transforms your project from drab to Amazing, whether its a New Build, Renovation or Remodel. </p>

                <p>We pay full attention to Detail, considering your Personality, Taste & Style, infusing this into every space in the brief. We transform your Project from Bricks & Bones to a Truly Beautiful Space.</p>

                <p>If you are not interested in managing your own design projects, a busy Individual/Professional, Home Maker, who has no time to deal with artisans and other trade suppliers, and you want a Home that is not only High End, but also High Quality, Timeless, truly Comfortable, Functional & Stylish, then this Design Service is for you.</p>
            </div>
        </div>

        <div className='mt-36 p-6 mx-36 border-b-4 border-solid border-[#d71300]'>
            <div className='text-3xl font-semibold text-center '> <p className='text-red-800'>What to Expect from Our Luxury Design Service </p> </div>
        </div>

        <div>
            <div>
                <RightContent title="Nuxt development is carried out by passionate developers" description="Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia." imageUrl="https://tailus.io/sources/blocks/right-illustration/preview/images/pie.svg" bgColor="gray" iconColor="indigo" />
            </div>

            <div>
                <LeftContent 
                    imageSrc="https://tailus.io/sources/blocks/left-illustration/preview/images/pie.svg"
                    title="Nuxt development is carried out by passionate developers"
                    description="Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia."
                    linkHref="https://tailus.io/contact"
                    linkText="Browse now"
                />
            </div>
        </div>

        <div className='md:w-[54%] mx-auto text-center text-[#000] text-lg font-normal mt-20'>
            <p>To Learn more about each of these Valuable Deliverables highlighted  in the above stages, please see a more detailed explanation here Our <p className="text-[#d71300]"> Design Process</p> </p>
        </div>
    </div>
  )
}

export default WorkPage