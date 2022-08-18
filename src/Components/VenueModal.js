import cross from "../Assets/Images/cross.svg";

export default function Modal({ modal, setModal, venue }) {
  console.log(venue);
  console.log(modal);
  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } z-[100] bg-[#00000090] w-[100vw] h-[100vh] absolute top-0 left-0 flex flex-row transition-all duration-700`}
    >
      <div className="w-[50%] h-[80%] justify-center rounded-xl overflow-hidden mx-auto my-auto bg-[#f3b641] animate-[ping_0.3s_ease-in-out_reverse_1]">
        <div className="w-full bg-white h-[95%] mt-8 relative">
          <div
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img
              src={cross}
              className="absolute right-2 top-2 cursor-pointer"
              alt="cross"
            />
          </div>
          {venue?.name}
          {venue?.id}
          {venue?.address}
        </div>
      </div>
    </div>
  );
}
