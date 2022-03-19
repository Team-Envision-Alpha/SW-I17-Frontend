import { useState, React } from "react";

const Accordian = ({ icon, foodType }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex w-full justify-between items-center p-2">
          <div>
            <p className="text-[3vh] font-bold ">{foodType}</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={checked}
              onChange={handleChange}
              className="w-[3vw] h-[3vh]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={icon} alt={icon} />
        </div>
        <div className="w-[20vw] ">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            className="box-border outline-none p-4"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Accordian;
