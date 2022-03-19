import { useState, React } from "react";
import EventModal from "./EventModal";

const Table = ({ status, statusHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
  const events = JSON.parse(localStorage.getItem("events"));
  const [pevent, setPevent] = useState({});
  // console.log(events);
  return (
    <>
      <section className="container  font-IBM-Sans ">
        <div className="w-[50vw]  rounded-lg shadow-lg">
          <div className="w-full">
            <table className="w-full ">
              <thead>
                <tr
                  className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
                  style={{ background: "rgba(0, 0, 0, 0.05)" }}
                >
                  <th className="py-3 border-[#B9B9B9] border-2 ">
                    Event Name
                  </th>
                  <th className="py-3  border-[#B9B9B9] border-2">Venue</th>
                  <th className="py-3  border-[#B9B9B9] border-2">
                    Start Date
                  </th>
                  <th className="py-3 border-[#B9B9B9] border-2">
                    {statusHeader}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {events.map((event, idx) => {
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
                          <p>{event.fromdate}</p>
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
