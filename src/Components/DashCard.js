import React from "react";

const DashCard = ({ icon, name }) => {
  return (
    <>
      <div className="flex flex-col gap-6 font-IBM-Sans">
        <div>
          <div
            className="w-[14vw] h-[26vh] rounded-xl flex flex-col justify-center items-center gap-6"
            style={{ backgroundColor: "#E4E4E4" }}
          >
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
