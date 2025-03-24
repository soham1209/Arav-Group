import React from 'react';
import userAvatar from '../../assets/img.jpg';

const ReviewCard = () => {
  return (
    <div className="bg-white rounded-3xl rounded-br-none shadow-[0_0_100px_29px_rgba(0,180,216,0.25)] p-6 max-w-sm text-left">

      <div className="flex items-center mb-3 text-yellow-400 justify-start text-2xl">
        <span className="mr-1">★</span>
        <span className="mr-1">★</span>
        <span className="mr-1">★</span>
        <span className="mr-1">★</span>
        <span>★</span>
      </div>

      <p className="text-gray-700 mb-5 text-xl text-justify">
        We will assist in the establishment of the legal entities, working with
        the Fund and Sponsor’s advisers to prepare bespoke documentation,
        supporting you to get smoothly through to launch.
      </p>

      <div className="flex items-center justify-start">
        <img
          src={userAvatar}
          alt="Reviewer Avatar"
          className="w-12 h-12 object-cover rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold text-xl text-gray-800">Ronald Rogan</h4>
          <p className="text-lg text-gray-500">UI Designer</p>
        </div>
      </div>
      
    </div>
  );
};

export default ReviewCard;
