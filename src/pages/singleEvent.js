import { gql, useQuery } from "@apollo/client";
import { request } from "twitter-api-sdk/dist/request";
import { useParams } from "react-router-dom";
import polygon from "../Assets/Images/errorimg.png";
import _ from "lodash";

export default function Event() {
  const EVENT_QUERY = gql`
    query getEvent($getEventId: ID!) {
      getEvent(id: $getEventId) {
        id
        name
        description
        from_date
        to_date
        time
        image
        caption
      }
    }
  `;
  const { id } = useParams();

  const { loading, err, data } = useQuery(EVENT_QUERY, {
    variables: {
      getEventId: id,
    },
  });
  if (!loading) {
    console.log(data);
  }
  function daysCount() {
    var start = new Date(data.getEvent.from_date);
    var end = new Date(data.getEvent.to_date);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  function getDate(date) {
    var day = new Date(date);
    return day.toDateString();
  }
  return (
    <div>
      {data ? (
        <div className=" mt-10 mx-16 overflow-x-hidden relative">
          <div className="flex flex-col md:flex-row justify-around bg-[#00000015] shadow-lg backdrop-blur-sm rounded-xl">
            <div className="py-12 px-6 flex flex-col">
              <p className="font-bold text-2xl">{data.getEvent.name}</p>
              <div className="mt-10">
                <p className="text-[#F0783b]">Description</p>
                <p className="mt-2 text-lg">{data.getEvent.description}</p>
              </div>
              <div className="mt-10">
                <p className="text-[#F0783b]">Caption</p>
                <p className="mt-2 font-bold text-lg">
                  "{data.getEvent.caption}"
                </p>
              </div>
              <div>
                <div className=" bg-[#f0783b] rounded-lg w-[22.5vw] mt-9 overflow-y-hidden text-center">
                  <p className="text-white mx-auto text-center py-1">
                    Event Timing
                  </p>
                  <div className="bg-white h-[15vh] text-black">
                    <div className="flex flex-row overflow-x-scroll h-full">
                      {_.times(daysCount(), (i) => {
                        return (
                          <div className="flex flex-col justify-around border-r-2 px-10">
                            <p className="text-md font-bold">
                              {getDate(data.getEvent.from_date)}
                            </p>
                            {/* {i} */}
                            <p className="font-bold text-sm">
                              {JSON.parse(data.getEvent.time)[i].from} -{" "}
                              {JSON.parse(data.getEvent.time)[i].to}
                            </p>
                          </div>
                        );
                      })}
                      <div className="flex flex-col justify-around border-r-2 px-10">
                        <p className="text-md font-bold">
                          {getDate(data.getEvent.from_date)}
                        </p>
                        {/* {i} */}
                        <p className="font-bold text-sm">10:00 - 11:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={
                  data.getEvent.imae
                    ? data.getEvent.image
                    : "https://picsum.photos/500"
                }
                className="rounded-lg max-w-[250px] mt-10"
                alt="event"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg mx-auto my-auto mt-10 w-max">
          <img src={polygon}></img>
          <p className="text-center">Event Not Found</p>
        </div>
      )}
    </div>
  );
}
