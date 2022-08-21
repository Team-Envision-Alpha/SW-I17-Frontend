import { useState, React, useEffect } from "react";
import EventModal from "./EventModal";
import { gql, useMutation, useQuery } from "@apollo/client";
import userEvent from "@testing-library/user-event";

const Table = ({ status, statusHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  // const events = JSON.parse(localStorage.getItem("events"));
  const EVENT_QUERY = gql`
    query {
      getEvents {
        name
        id
        from_date
        to_date
        status
        organiser
      }
    }
  `;
  const { loading, err, data } = useQuery(EVENT_QUERY);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents(data?.getEvents.find((event) => event.organiser === user.id));
    // console.log(user, data?.getEvents);
  }, [data]);
  console.log(data);
  // const events = false/;
  const [pevent, setPevent] = useState({});
  // console.log(events);
  // console.log(events);
  return (
    <>
      <section className="container  font-IBM-Sans ">
        <div className="w-[50vw]  rounded-lg shadow-lg">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr
                  className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
                  style={{ background: "rgba(0, 0, 0, 0.05)" }}
                >
                  <th className="py-3  border-[#B9B9B9] border-2">
                    Event Name
                  </th>
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">
                    Venue
                  </th>
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">
                    Start Date
                  </th>
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">
                    {statusHeader}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {events?.map((event, idx) => {
                  return (
                    <tr className="text-[#000000]" key={idx}>
                      <td
                        className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                      >
                        <div>
                          <p>{event.name}</p>
                        </div>
                      </td>
                      <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                        <div>
                          <p>SRMIST</p>
                        </div>
                      </td>
                      <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                        <div>
                          <p>{event.from_date}</p>
                        </div>
                      </td>
                      <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                        <div>
                          <p
                            className="text-[#874439] font-bold cursor-pointer hover:text-red-600 capitalize"
                            onClick={() => {
                              setPevent(event);
                              return setIsOpen(true);
                            }}
                          >
                            {event.status}
                          </p>
                        </div>

                        {isOpen && (
                          <EventModal setIsOpen={setIsOpen} event={pevent} />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
