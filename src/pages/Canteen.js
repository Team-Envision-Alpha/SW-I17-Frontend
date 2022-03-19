import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";
import { BsChevronDown } from "react-icons/bs";
import Accordian from "../Components/Accordian";
import breakfast from "../Assets/Images/breakfast.svg";
import lunch from "../Assets/Images/lunch.svg";
import dinner from "../Assets/Images/dinner.svg";

const Canteen = ({ eventName }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10 items-center justify-center">
          <div>
            <p className="text-[3vh] font-IBM-Sans ">Food Details</p>
          </div>

          <div>
            <p className="text-[5vh] font-IBM-Sans ">Event: {eventName}</p>
          </div>

          <div className="w-[70vw] h-[85vh]  border-2 border-[#818181] ">
            <div className="w-full h-[14vh] border-b-2 border-b-[#818181] flex justify-between p-4  items-center">
              <div className="flex flex-col gap-2 w-[80%]">
                <p className="font-bold text-left text-[3vh]">Day 1</p>
                <p className="font-light text-left text-[2vh]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate temporibus possimus provident totam, facilis libero.
                </p>
              </div>
              <div>
                <BsChevronDown className="text-[5vh]" />
              </div>
            </div>
            <div className="m-10 flex gap-8">
              <div className=" w-[20vw]  border-2 border-[#818181]">
                <Accordian icon={breakfast} foodType="Breakfast" />
              </div>
              <div className=" w-[20vw]  border-2 border-[#818181]">
                <Accordian icon={lunch} foodType="Lunch" />
              </div>
              <div className=" w-[20vw]  border-2 border-[#818181]">
                <Accordian icon={dinner} foodType="Dinner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canteen;
