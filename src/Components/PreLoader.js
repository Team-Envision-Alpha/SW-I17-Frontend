import React from 'react'
import bg from "../Assets/Images/Group.svg";
import vid from "../Assets/animation.gif"


const PreLoader = () => {
  return (
    <>
       <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex justify-center items-center h-[100vh] "
      >
        <img src={vid} loop playsInline className='w-[30vw] h-[60vh] rounded-full' />

        
      </div>
    </>
  )
}

export default PreLoader