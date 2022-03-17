import React from "react";

const EventModal = () => {
  return (
    <>
      <div
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen flex justify-center items-center "
      >
        <div className="w-[60vw] h-[80vh] rounded-lg flex flex-col gap-2  items-center bg-white">
          <div className="my-10">
            <p className="text-[3vh] font-bold">Event Name</p>
          </div>
          <div className="grid grid-cols-2 gap-20 px-20">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Description</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  impedit temporibus pariatur ex laudantium dignissimos dolorum
                  facere aut laboriosam sequi in sint voluptatibus veritatis
                  quia molestiae voluptatem quasi, tenetur dolor!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;
