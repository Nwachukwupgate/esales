import React from 'react'
import RightContent from '../components/cards/RightContent';
import LeftContent from '../components/cards/LeftContent';


const ProcessPage = () => {
  return (
    <div className="container my-12">
        <div className='relative my-4'>
            <img src="https://vivabelladesigns.com/wp-content/uploads/2020/11/005.jpg" alt="process" width="1088" height="200" className='mx-auto' style={{ objectFit: 'cover', height: '200px' }} />
            <p className="text-5xl font-semibold absolute bottom-0 left-0  ml-24 text-black bg-white p-6">Our Process</p>
        </div>

        <div className='mt-20'>
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
    </div>
  )
}

export default ProcessPage