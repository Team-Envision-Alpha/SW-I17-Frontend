import React from 'react';
import calender from '../Assets/Images/Dashboard/calender.svg';
// import logo_new from '../Assets/Images/logo_new.svg';
// import { AiOutlineLike } from 'react-icons/ai';
// import { FiBookmark } from 'react-icons/fi';
// import { FaComment } from 'react-icons/fa';

const DashCard = () => {
  return (
    <>
      <div className="flex flex-col gap-6 font-IBM-Sans">
        <div>
          <div
            className="w-[16vw] h-[33vh] rounded-xl"
            style={{ backgroundColor: '#E4E4E4' }}
          >
            <div className="flex justify-center align-center ">
              <img src={calender} alt="img" width={100} className="mt-5" />
            </div>
            <div className="flex justify-center align-center">
              <p className="text font-IBM-Sans mt-5 font-bold ">
                Invited Events/Upcoming<br></br> Events
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
