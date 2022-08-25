import eventicon from "../../Assets/Images/eventicon.svg";

export default function Card({ event, setShow, setCurrent, count }) {
  console.log(count);
  return (
    <div className="bg-[#f3f3f3] w-[250px] h-[150px] p-4 m-1">
      <div className="flex flex-row">
        <img src={eventicon} className="mr-2" alt="event" />
        <p className="font-bold text-lg truncate">{event.name}</p>
      </div>
      <p className="truncate mt-3">{event.description}</p>
      <p
        className="float-right mt-4 text-[#F0783B] cursor-pointer hover:text-red-800 transition"
        onClick={() => {
          setShow(true);
          setCurrent(count);
        }}
      >
        View Event
      </p>
    </div>
  );
}
