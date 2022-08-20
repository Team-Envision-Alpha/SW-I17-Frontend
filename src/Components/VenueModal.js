import cross from "../Assets/Images/cross.svg";
import location from "../Assets/Images/Venue/location.svg";
import addr from "../Assets/Images/Venue/addr.svg";
import flag from "../Assets/Images/Venue/flag.svg";
import people from "../Assets/Images/Venue/people.svg";
import website from "../Assets/Images/Venue/website.svg";

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
          <div className="m-5 h-full">
            <p className="text-center font-bold pt-2 text-2xl">Heading Here</p>
            <div className="flex md:flex-row flex-col pt-8 max-h-[70%]">
              <div className="md:basis-[60%] flex flex-col justify-around">
                <div className="flex flex-row align-middle my-2">
                  <img src={location} />
                  <span className="my-auto ml-4">{venue.address}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={addr} />
                  <span className="my-auto ml-4">{venue.city}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={flag} />
                  <span className="my-auto ml-4">{venue.state}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={people} />
                  <span className="my-auto ml-4">{venue.capacity} max.</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={website} />
                  <a className="my-auto ml-4">{venue.website}</a>
                </div>
              </div>
              <div className="md:basis-[40%] flex flex-row justify-center">
                <img
                  src="https://picsum.photos/500"
                  className="rounded-lg max-h-[90%] mx-auto my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
