import CustomButton from "../button/Button";

const ProductCard = ({ title, description, price, image }) => {
  const handleButtonClick = () => {
    // Replace the phone number and message with your desired values
    console.log("log, clicked");
    const phoneNumber = '08028289962';
    const message = encodeURIComponent('I would like to pay for your product.');

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    console.log("log, done");

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  return (
  <div className="relative group overflow-hidden rounded-lg">
    
    <img
      src={image}
      alt={title}
      className="object-cover w-full h-60"
      width="300"
      height="300"
      style={{ aspectRatio: "300 / 300", objectFit: "cover" }}
    />
    <div className="bg-white p-4 text-center">
      <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
      <h4 className="font-semibold text-base md:text-lg">{`#${price}`}</h4>
      <div onClick={handleButtonClick}>
        <CustomButton className="mt-2 bg-[#c4a76d] text-white px-4 py-2 rounded-lg md:text-lg">Buy Now</CustomButton>
      </div>
      
    </div>
  </div>
);
}

export default ProductCard;