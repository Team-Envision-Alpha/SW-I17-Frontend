import React from "react";

const DashCard = ({ icon, name }) => {
  return (
    <>
      <div className="flex flex-col gap-6 font-IBM-Sans sm:flex-row sm:bg-red">
        <div>
          <div className="w-[14vw] bg-[#efefef] hover:bg-[#ffffff10] hover:backdrop-blur h-[26vh] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg hover:shadow-xl transition">
            <div>
              <img src={icon} alt="img" width={80} />
            </div>
            <div>
              <p className="text font-IBM-Sans  font-bold ">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
