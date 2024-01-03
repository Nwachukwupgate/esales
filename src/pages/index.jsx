import React from 'react'
import ImageSlider from '../components/slider'
import ProductCard from '../components/cards/ProductCard';
import ImageWithLink from '../components/cards/ImageLink';

const IndexPage = () => {
    const images = [
      'https://vivabelladesigns.com/wp-content/uploads/2022/11/Living-Room-Comp-2.jpg',
      'https://vivabelladesigns.com/wp-content/uploads/2022/11/SCREEN-SAVER-5.jpg',
      'https://vivabelladesigns.com/wp-content/uploads/2021/08/ADD-TO-HOME-PAGE-PICS.jpg',
      // Add more image URLs as needed
    ];

    const data = [
      {id: "1", title: "Roulete", description: "short description", price:"300", image: "https://vivabelladesigns.com/wp-content/uploads/2022/11/Living-Room-Comp-2.jpg"}, 
      {id: "2", title: "The Water Front", description: "short description", price:"300", image: "https://vivabelladesigns.com/wp-content/uploads/2022/11/SCREEN-SAVER-5.jpg"},
      {id: "1", title: "The Gerald", description: "short description", price:"300", image: "https://vivabelladesigns.com/wp-content/uploads/2021/08/ADD-TO-HOME-PAGE-PICS.jpg"},
    ]
  return (
    <div>
      
        <ImageSlider images={images}/>
        <div className="relative my-6">
          
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div>
              <h2 className="text-4xl font-semibold">Products</h2>
              <h2 className="text-4xl font-semibold mt-4">Portfolio</h2>
            </div>
            {data.map(({ id, title, description, price, image }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
              />
            ))}
          </section>    
        </div>
        
        <div className="relative mt-4">
          <div className="flex justify-center items-center">
            <ImageWithLink
              imageUrl="https://vivabelladesigns.com/wp-content/uploads/2022/04/image2.jpeg"
              title="Example Image"
              linkTo="https://example.com"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
            <ImageWithLink
              imageUrl="https://vivabelladesigns.com/wp-content/uploads/2022/04/image4-scaled.jpeg"
              title="Example Image"
              linkTo="https://example.com"
            />
        </div>

        <div className="flex justify-center items-center mt-4">
            <ImageWithLink
              imageUrl="https://vivabelladesigns.com/wp-content/uploads/2022/04/image5.jpeg"
              title="Example Image"
              linkTo="https://example.com"
            />
        </div>

        <div className="flex justify-center items-center my-4">
            <ImageWithLink
              imageUrl="https://vivabelladesigns.com/wp-content/uploads/2022/04/image3.jpeg"
              title="Example Image"
              linkTo="https://example.com"
            />
        </div>   

    </div>
  )
}

export default IndexPage