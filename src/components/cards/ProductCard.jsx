import CustomButton from "../button/Button";

const ProductCard = ({ title, description, price, image }) => (
  <div className="relative group overflow-hidden rounded-lg">
    
    <a className="absolute inset-0 z-10" href="google">
    <span className="sr-only">Buy Item</span>
    </a>
    
    <img
      src={image}
      alt={title}
      className="object-cover w-full h-60"
      width="300"
      height="300"
      style={{ aspectRatio: "300 / 300", objectFit: "cover" }}
    />
    <div className="bg-white p-4">
      <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <h4 className="font-semibold text-base md:text-lg">{`$${price}`}</h4>
      <CustomButton className="mt-2">Buy Now</CustomButton>
    </div>
  </div>
);

export default ProductCard;