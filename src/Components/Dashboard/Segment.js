import Card from "./EventCard";
export default function Segment({ color, name, data }) {
  return (
    <div
      className={`w-[50vw] pt-2 rounded-xl m-5`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="bg-white mt-5 p-3 flex flex-row overflow-x-scroll">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
