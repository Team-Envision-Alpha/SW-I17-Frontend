/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import bg from "../Assets/Images/Group.svg";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
//import calendar from "../Assets/Images/calendar.png";
import InviteCard from "../Components/Venue/InviteCard";
import RequestCard from "../Components/Venue/RequestCard";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";

const VenueDashboard = () => {
    const [show, setShow] = useState(false);
    const [book,setBook] = useState({})
    const venuehead = JSON.parse(localStorage.getItem('aicteuser'))
    const GET_VENUES_BY_HEAD_QUERY = gql`
        query venues($id:ID!,$venue_head:ID) {
            getVenuesByHead(id:$venue_head){
                id name
            }
            getVenueBookings(id:$id){
                event{
                    id name
                }
                booking{
                    id status createdat
                }
            }
        }
    `
    const BOOK_VENUE_MUTATION = gql`
    mutation book($id:ID!,$status:String!,$createdat:String!){
        updateVenueStatus(id:$id,status:$status,createdat:$createdat)
    }
    `

     const [bookvenue,venuedata] = useMutation(BOOK_VENUE_MUTATION,{
        onError: (err) => {
            console.log(err);
        },
        onCompleted: (data) => {
            console.log(data);
            toast.success(data, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        },
        variables: book,
    })
    const bookVenue = (id,status,createdat)=>{
        setBook({id,status,createdat})
        bookvenue()
    }
    const {loading,err,data,refetch} = useQuery(GET_VENUES_BY_HEAD_QUERY,{variables:{id:venuehead.id,venue_head:venuehead.id}})

    if(loading){
        return <h3>Loading...</h3>
    }
    console.log(data);

    const getVenueBookings = (id)=>{
        refetch({id})
    }

    return (
        <>
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-[#f8f7f8] min-h-[100vh] bg-cover"
            >
                <Navbar />
                {/* <Sidebar show={show} setShow={setShow} /> */}
                <div>
                    <h2>Events Updates</h2>
                </div>
                <div className="pt-24 md:ml-[20vw] mb-10 flex flex-col gap-20  items-center justify-center">
                    {/* show all venues  */}
                    <ul className="flex space-x-6">
                        {data?.getVenues.map(({id,name})=>
                        <li className="">
                        <button className="" onClick={()=>getVenueBookings(id)}>
                            {name}
                        </button>
                        </li>
                        )}
                    </ul>
                    {/* show all events for which events is booked  */}
                    {data?.getVenueBookings && 
                    <div className="">
                        <ul className="flex space-x-6">
                            {data.getVenueBookings.map(({event,booking})=>
                            <li className="" key={event.id}>
                                <h3> { event.name}</h3>
                                {booking.status === "booked"? 
                                <span>{booking.status}</span>:
                                <div className="">
                                    <p className="">Venue Requested</p>
                                    <button className="" onClick={()=>bookVenue(booking.id,booking.status,booking.createdat)}>Accept</button>
                                </div>
                                }
                            </li>
                            )}
                        </ul>
                    </div>
                    }
                    <div className="h-auto mx-10 bg-white justify-center w-auto border-t-[48px] border-red-400 rounded-2xl flex flex-wrap">
                        <InviteCard name="View" />
                    </div>
                    <div className="h-auto my-10 mx-10 bg-white justify-center w-auto border-t-[48px] border-orange-300 rounded-2xl flex flex-wrap">
                        {/* <RequestCard name="View"></RequestCard>  */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VenueDashboard;
