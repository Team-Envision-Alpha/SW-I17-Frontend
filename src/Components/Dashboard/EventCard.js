import eventicon from "../../Assets/Images/eventicon.svg";

export default function Card({ event, setShow }) {
  return (
    <div className="bg-[#f3f3f3] w-[250px] h-[150px] p-4 m-1">
      <div className="flex flex-row">
        <img src={eventicon} className="mr-2" />
        <p className="font-bold text-lg">Event Request</p>
      </div>
      <p className="truncate mt-3">
        Lorem Ipsum is Dummy TextLorem Ipsum is Dummy TextLorem Ipsum is Dummy
        TextLorem Ipsum is Dummy Text Lorem Ipsum is Dummy TextLorem Ipsum is
        Dummy TextLorem Ipsum is Dummy TextLorem Ipsum is Dummy TextLorem Ipsum
        is Dummy TextLorem Ipsum is Dummy TextLorem Ipsum is Dummy TextLorem
        Ipsum is Dummy TextLorem Ipsum is Dummy TextLorem Ipsum is Dummy
        TextLorem Ipsum is Dummy TextLorem Ipsum is Dummy Text
      </p>
      <p
        className="float-right mt-4 text-[#F0783B] cursor-pointer hover:text-red-800 transition"
        onClick={() => setShow(true)}
      >
        View Event
      </p>
    </div>
  );
}
