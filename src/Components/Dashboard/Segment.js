import Card from "./EventCard";
export default function Segment({ color, textcolor, name, data }) {
  return (
    <div
      className={`w-[50vw] pt-2 rounded-xl m-5`}
      style={{
        backgroundColor: color,
      }}
    >
      <p className="text-center font-bold" style={{ color: textcolor }}>
        {name}
      </p>
      <div className="bg-white mt-3 p-3 flex flex-row overflow-x-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
