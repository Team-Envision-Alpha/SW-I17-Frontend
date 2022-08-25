import React from 'react'
import { BsImage } from "react-icons/bs";

const BothHandlePost = () => {
  return (
    <>
             <div className="flex flex-col gap-10">
              <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
                <p>Post on both the platforms from here</p>
              </div>
            
            <div className="w-[42vw] flex flex-col gap-12">
              <div className="flex gap-10">
                <textarea
                  name="facebook"
                  id="fb"
                  cols="35"
                  rows="5"
                  placeholder="Facebook caption here..."
                  className="border-2 border-[#999999] rounded-xl p-2 font-IBM-Sans"
                ></textarea>
                <textarea
                  name="twitter"
                  id="tweet"
                  cols="35"
                  rows="5"
                  placeholder="Twitter caption here..."
                  className="border-2 border-[#999999] rounded-xl p-2 font-IBM_Sans "
                ></textarea>
              </div>
              <div>
                <button className="w-full border-2 p-3  border-[#F0783B] rounded-xl">
                  <div className="flex gap-4 justify-center items-center">
                    <BsImage className="text-[#F0783B] font-bold text-xl " />
                    <p className="font-IBM-Sans text-[#F0783B] font-bold text-xl">
                      Upload an image
                    </p>
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-2 w-full  gap-10 font-bold">
                <button className="w-full border-2 p-4  border-[#A72314] rounded-xl text-[#A72314] text-xl">Discard</button>
                <button className="w-full border-2 p-4  bg-[#1877F2] rounded-xl text-white text-xl">Post</button>
              </div>
            </div>
            </div>
    </>
  )
}

export default BothHandlePost