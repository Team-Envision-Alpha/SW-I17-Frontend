import Segment from "../Components/Dashboard/Segment";
import Modal from "../Components/Detailmodal";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

export default function Home({user}) {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  // const user = JSON.parse(localStorage.getItem("aicteuser"));
  console.log(user);

  const EVENT_QUERY = gql`
    query Events($user_id: ID!) {
      getInvitedEvents(user_id: $user_id) {
        id
        name
        caption
        description
        from_date
        to_date
        time
      }
    }
  `;

  const { loading, err, data } = useQuery(EVENT_QUERY, {
    variables: { user_id: user.id },
  });
  if (!loading) {
    console.log(data?.getInvitedEvents);
  }
  
  // console.log(current);
  const dummyevents = [
    {
      id: 1,
      name: "Event 1",
      caption: "Event 1",
      description: "Event 1",
      from_date: "08/08/2020",
      to_date: "08/08/2020",
      time: '{0:{from:"03:00",to:"04:00"}}',
    },
    {
      id: 2,
      name: "Event 2",
      caption: "Event 2",
      description: "Event 2",
      from_date: "08/01/2020",
      to_date: "08/02/2020",
      time: '{0:{from:"08:00",to:"09:00"},1:{from:"10:00",to:"11:00"}}',
    },
    {
      id: 3,
      name: "Event 3",
      caption: "Event 3",
      description: "Event 3",
      from_date: "08/03/2020",
      to_date: "08/04/2020",
      time: '{0:{from:"08:00",to:"09:00"},1:{from:"10:00",to:"11:00"}}',
    },
    {
      id: 4,
      name: "Event 4",
      caption: "Event 4",
      description: "Event 4",
      from_date: "08/05/2020",
      to_date: "08/06/2020",
      time: '{0:{from:"08:00",to:"09:00"},1:{from:"10:00",to:"11:00"}}',
    },
  ];
  return (
    <div className="m-10">
      <Modal setIsOpen={setShow} isOpen={show} event={dummyevents[current]} user={user}/>
      <Segment
        color={"#ff7271"}
        name={"Invited Events"}
        textcolor="white"
        setShow={setShow}
        user={user}
        setCurrent={setCurrent}
        events={dummyevents}
      />
      <Segment
        color={"#faa918"}
        name={"Pending Approvals"}
        textcolor="white"
        setShow={setShow}
        user={user}
        setCurrent={setCurrent}
        // events={dummyevents}
      />
    </div>
  );
}
