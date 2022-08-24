import eventicon from "../../Assets/Images/eventicon.svg";

export default function Card({ event }) {
  return (
    <div className="bg-[#f3f3f3] w-[250px] h-[200px] p-4 m-1">
      <div className="flex flex-row">
        <img src={eventicon} className="mr-2" />
        <p className="font-bold text-lg">Event Request</p>
      </div>
      <p className="truncate">Lorem Ipsum</p>
      <p className="float-right mt-4">Read More</p>
    </div>
  );
}
