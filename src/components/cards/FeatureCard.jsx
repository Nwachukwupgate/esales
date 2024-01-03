const FeatureCard = ({ number, title, description, imageUrl }) => {
    return (
      <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-16">
          <div
            aria-hidden="true"
            className={`flex h-10 w-10 items-center justify-center rounded-full ${number === '1' ? 'bg-pink-50 dark:bg-gray-700' : number === '2' ? 'bg-pink-50 dark:bg-gray-700' : 'bg-purple-50 dark:bg-gray-700'}`}
          >
            <span className={`font-bold ${number === '1' ? 'text-pink-600 dark:text-pink-300' : number === '2' ? 'text-pink-600 dark:text-pink-300' : 'text-purple-600 dark:text-purple-300'}`}>{number}</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          <img
            src={imageUrl}
            className="w-16"
            width="512"
            height="512"
            alt="feature illustration"
          />
        </div>
      </div>
    );
  };
  
export default FeatureCard;