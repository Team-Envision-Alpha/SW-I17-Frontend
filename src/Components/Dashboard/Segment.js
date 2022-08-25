/* eslint-disable no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import Card from "./EventCard";
export default function Segment({
  color,
  textcolor,
  name,
  setShow,
  setCurrent,
  events,
}) {
  // const user = JSON.parse(localStorage.getItem("aicteuser"));

  // const EVENT_QUERY = gql`
  //   query Events($user_id: ID!) {
  //     getInvitedEvents(user_id: $user_id) {
  //       id
  //       name
  //       caption
  //       description
  //       from_date
  //       to_date
  //       time
  //     }
  //   }
  // `;

  // const { loading, err, data } = useQuery(EVENT_QUERY, {
  //   variables: { user_id: user.id },
  // });
  // if (!loading) {
  //   console.log(data?.getInvitedEvents);
  // }
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
      <div className="bg-white mt-3 p-3 flex flex-row flex-nowrap overflow-x-scroll">
        {events.map((event, idx) => {
          return (
            <div>
              <Card
                key={idx}
                count={idx}
                event={event}
                setShow={setShow}
                setCurrent={setCurrent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
