import React from 'react';
import postCard from '../Assets/Images/postCard.svg';
import logo_new from '../Assets/Images/logo_new.svg';
import { AiOutlineLike } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { FaComment } from 'react-icons/fa';

const PostCard = () => {
  return (
    <>
      <div className="flex flex-col gap-6  font-IBM-Sans">
        <div>
          <div
            className="w-[16vw] h-[40vh] rounded-xl"
            style={{ backgroundColor: 'rgba(224, 224, 224, 0.5)' }}
          >
            <img src={postCard} alt="img" width={250} />
            <div className="flex gap-2 p-2 items-center">
              <div>
                <img src={logo_new} alt="logo" width={32} height={26} />
              </div>
              <div>
                <p className="font-bold text-xs ">
                  Stoic Wisdom for an Every day
                </p>
                <p className="text-xs" style={{ color: '#414141' }}>
                  Anastasia Cruickshank
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[16vw] justify-around items-center  my-2">
            <AiOutlineLike className="text-lg " />
            <span className="font-bold text-[1.5vh] -ml-1 ">4.5k</span>
            <FaComment className="text-lg" />
            <span className="font-bold text-[1.5vh] -ml-1">4.5k</span>
            <FiBookmark className="text-xl" />
            <span className="font-bold text-[1.5vh] -ml-1 ">4.5k</span>
            <a href="/" className="underline text-blue-600">
              analytics
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
