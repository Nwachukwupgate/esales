import React from 'react'
import { FeatureItem } from '../icon/icon';

const RightContent = ({ title, description, imageUrl, bgColor, iconColor }) => {
    return (
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className={`lg:bg-${bgColor}-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center`}>
            <div className="md:5/12 lg:w-1/2">
              <img
                src={imageUrl}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                {title}
              </h2>
              <p className="my-8 text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <FeatureItem iconColor={iconColor} iconSvg={<ChatIcon />} title="Chat Anytime" description="Asperiores nemo possimus nesciunt quam mollitia." />
                <FeatureItem iconColor={iconColor} iconSvg={<LocationIcon />} title="Real Time Location" description="Asperiores nemo possimus nesciunt quam mollitia." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RightContent