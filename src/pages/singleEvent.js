/* eslint-disable no-extend-native */
/* eslint-disable no-unused-vars */
import { gql, useQuery } from "@apollo/client";
// import { request } from "twitter-api-sdk/dist/request";
import { useParams } from "react-router-dom";
import polygon from "../Assets/Images/errorimg.png";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
export default function Event() {
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  console.log(user);
  const navigate = useNavigate();
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
    // var day = new Date(date);
    return date;
  }
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date.toDateString().split(",")[0];
  };

  return (
    <div>
      {data ? (
        <div className=" mt-10 mx-16 overflow-x-hidden relative">
          <div className="flex flex-col md:flex-row justify-around bg-[#ffffff80] shadow-2xl backdrop-blur-sm rounded-xl">
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
                <div className=" bg-[#f0783b] rounded-lg  mt-9 overflow-y-hidden text-center shadow-lg hover:shadow-2xl transition">
                  <p className="text-white mx-auto text-center py-1">
                    Event Timing
                  </p>
                  <div className="bg-white h-[18vh] text-black">
                    <div className="flex flex-row overflow-x-scroll h-full">
                      {_.times(daysCount(), (i) => {
                        return (
                          <div className="flex flex-col justify-around border-r-2 px-10 min-w-[10vw]">
                            <p className="text-md font-bold">
                              {getDate(
                                new Date(data.getEvent.from_date).addDays(i)
                              )}
                            </p>
                            {/* {i} */}
                            <p className="font-bold text-sm">
                              {JSON.parse(data.getEvent.time)[i].from} -{" "}
                              {JSON.parse(data.getEvent.time)[i].to}
                            </p>
                          </div>
                        );
                      })}
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
              {user?.id ? (
                <div
                  className="bg-[#ef6522] p-4 m-1 rounded-lg text-center text-white cursor-pointer hover:bg-[#ff6533] transition"
                  onClick={(e) => {
                    navigate("/dashboard/");
                  }}
                >
                  Go to Dashboard
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg mx-auto my-auto mt-10 w-max">
          <img src={polygon} alt="polygon"></img>
          <p className="text-center">Event Not Found</p>
        </div>
      )}
    </div>
  );
}
