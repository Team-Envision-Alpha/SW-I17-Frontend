import React from 'react';
import Eventcard from '../Assets/Images/event.svg';

const EventCard = (props) => {
  return (
    <>
      <div className="flex flex-col gap-0 font-IBM-Sans px-7 mt-10 grid grid-cols-12 ">
        <div
          className="col-span-1  rounded-l-xl "
          style={{ backgroundColor: '#E6C45B' }}
        ></div>
        <div
          className="rounded-r-xl flex flex-row grid grid-cols-3 col-span-11 text-white"
          style={{ backgroundColor: '#908976' }}
        >
          <div className="px-12 col-span-2">
            <p className="text font-IBM-Sans mt-5 font-bold py-1">
              <p>BlockChain Workshop</p>
              <p className="font-light">9:00 AM - 10:00 AM</p>
              Date-18th March (Friday)
            </p>
            <button
              class=" hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg h"
              style={{ backgroundColor: '#1F8B24' }}
            >
              {props.name}
            </button>
          </div>
          <div class="flex flex-row-reverse object-right">
            <img
              class="object-cover overflow-hidden rounded-tl-xl rounded-bl-xl items-start items-right"
              src={Eventcard}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
