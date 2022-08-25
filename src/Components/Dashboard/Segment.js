import { gql, useQuery } from "@apollo/client";
import Card from "./EventCard";
export default function Segment({ color, textcolor, name, setShow, user }) {
  console.log(user.id);
  const EVENT_QUERY = gql`
    query Events($user_id: ID!) {
      getInvitedEvents(user_id: $user_id) {
        id
        name
        description
        caption
        image
        status
        from_date
        to_date
        time
        organizer
        food_req
        expected_count
      }
    }
  `;

  const { loading, err, data } = useQuery(EVENT_QUERY, {
    variables: { user_id: user.id },
  });
  console.log(data, err);
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
        <Card setShow={setShow} />
        <Card setShow={setShow} />
        <Card setShow={setShow} />
        <Card setShow={setShow} />
      </div>
    </div>
  );
}
