import cross from "../Assets/Images/cross.svg";
import location from "../Assets/Images/Venue/location.svg";
import addr from "../Assets/Images/Venue/addr.svg";
import flag from "../Assets/Images/Venue/flag.svg";
import people from "../Assets/Images/Venue/people.svg";
import website from "../Assets/Images/Venue/website.svg";
import mail from "../Assets/Images/Venue/mail.svg";
import phone from "../Assets/Images/Venue/phone.svg";
import usr from "../Assets/Images/usr.svg";

import { MdOutlineLocationCity } from "react-icons/md";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="flex flex-row">
    <span className="text-3xl mr-3">
      <MdOutlineLocationCity />
    </span>
    {/* <img className="mr-3" src={location}></img> */}

    <span className="my-auto bg-[#ffffff20] backdrop-blur-sm p-2 rounded-lg">
      {text}
    </span>
  </div>
);

export default function Modal({ modal, setModal, venue }) {
  console.log(venue);
  console.log(modal);
  const defaultProps = {
    center: {
      lat: 12.82292,
      lng: 80.041414,
    },
    zoom: 12,
  };
  console.log(venue?.resources);
  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } z-[100] bg-[#00000090] w-[100vw] h-[100vh] absolute top-0 left-0 flex flex-row transition-all duration-700`}
    >
      <div className="w-[98%] md:w-[50%] md:h-[95%] justify-center rounded-xl overflow-hidden mx-auto my-auto bg-[#f3b641] animate-[ping_0.3s_ease-in-out_reverse_1]">
        <div className="w-full bg-[#f3f3f3] h-[95%] mt-8 relative">
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
          <div className="m-4 h-full">
            <p className="text-center font-bold pt-2 text-2xl">{venue?.name}</p>
            <div className="flex md:flex-row flex-col pt-8 max-h-[70%]">
              <div className="md:basis-[60%] flex flex-col justify-around">
                <div className="flex flex-row align-middle my-2">
                  <img src={location} alt="icon" />
                  <span className="my-auto ml-4">{venue?.address}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={addr} alt="icon" />
                  <span className="my-auto ml-4">{venue?.city}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={flag} alt="icon" />
                  <span className="my-auto ml-4">{venue?.state}</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={people} alt="icon" />
                  <span className="my-auto ml-4">{venue?.capacity} max.</span>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={website} alt="icon" />
                  <a className="my-auto ml-4" href={venue?.website}>
                    {venue?.website}
                  </a>
                </div>
                <div className="flex flex-row align-middle my-2">
                  <img src={usr} alt="icon" className="w-10" />
                  <a className="my-auto ml-4">{venue?.resources?.toString()}</a>
                </div>
              </div>
              <div className="md:basis-[40%] flex flex-row justify-center">
                <img
                  src={venue?.image ? venue.image : "https://picsum.photos/500"}
                  className="rounded-lg max-h-[90%] mx-auto my-auto"
                  alt="icon"
                />
              </div>
            </div>
            <div className="md:h-[30%] w-full flex flex-col md:flex-row justify-around">
              <div className="h-full md:w-[50%] mt-5 rounded-lg ">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyC3yO5ykp_Frk6Nm12L4kHb1Dh76BQKbys",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={12.82292}
                    lng={80.041414}
                    text={venue?.name}
                  />
                </GoogleMapReact>
              </div>
              <div className="p-4 h-full w-[45%] rounded-lg bg-white mt-5">
                <p className="font-bold">Contact Info</p>
                <div className="flex flex-row align-middle my-4">
                  <img src={mail} alt="icon" />
                  <span className="my-auto ml-4">{venue?.email}</span>
                </div>
                <div className="flex flex-row align-middle my-4">
                  <img src={phone} alt="icon" />
                  <span className="my-auto ml-4">{venue?.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
