import  { useEffect, useRef, React } from 'react'


const NotifcationModal = (props) => {
const ref = useRef(null)
const { onClickOutside } = props

useEffect(() => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  document.addEventListener('click', handleClickOutside, true);
  return () => {
    document.removeEventListener('click', handleClickOutside, true);
  };
}, [ onClickOutside ]);

if(!props.show)
    return null;


  return (
    <>
        <div ref={ref} className='mt-10 w-[25vw] h-[30vh] bg-white rounded-xl p-4 shadow-xl  top-16 right-[20vw]'>
          <div className='flex  flex-col gap-2'>
            <div>
              <p className='font-bold text-xl'>Notifications</p>
            </div>
            <div className='flex justify-between items-center '>

                        <div className=" font-IBM-Sans">
                          <p className='text-base text-[#F0783B] font-bold '>New Message <span className='text-3xl relative bottom-1'>.</span></p>
                        </div>
                        <div>
                          <p className='text-sm text-[#696969] '>5 mins ago</p>
                        </div>

            </div>
            <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>

          </div>

        </div>
    
    </>
  )
}

export default NotifcationModal