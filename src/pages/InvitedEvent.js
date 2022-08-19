/* eslint-disable no-unused-vars */

import React from 'react';
import bg from '../Assets/Images/Group.svg';

import Navbar from '../Components/Navbar';
import EventCard from '../Components/EventCard';
import { gql, useQuery } from "@apollo/client";

const DashBoard = () => {

  const user = JSON.parse(localStorage.getItem("aicteuser"));

  const EVENT_QUERY = gql`
    query Events($user_id:ID!) {
      getInvitedEvents(user_id:$user_id) {
        id
        name
        description
        from_date
        time
      }
    }
  `;
  
  const { loading, err, data } = useQuery(EVENT_QUERY,{
    variables:{user_id:user.id}
  });
  if(!loading){
    console.log(data.getInvitedEvents);

  }
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-row mt-5">
          <p className="px-10 font-bold decoration -[3px]">
            <span className="underline decoration-2 ...">Inv</span>ited Events
          </p>
          <p className="px-10">Upcoming Events</p>
        </div>
        <div className="container lg:px-20 mx-auto pb-20">
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="View"></EventCard>
            <EventCard name="View"></EventCard>
          </div>
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="View" color="#A72314"></EventCard>
            <EventCard name="View"></EventCard>
          </div>
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="View"></EventCard>
            <EventCard name="View"></EventCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
