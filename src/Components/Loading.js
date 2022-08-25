import React from 'react'
// import bg from "../Assets/Images/Group.svg";
import vid from "../Assets/animation.gif"


const PreLoader = () => {
  return (
    <>
       <div

        className="flex justify-center items-center h-[100vh] w-[100vw] absolute "
      >
        <img src={vid} loop playsInline className='w-[30vw] h-[60vh] rounded-full' alt="loading"/>

        
      </div>
    </>
  )
}

export default PreLoader