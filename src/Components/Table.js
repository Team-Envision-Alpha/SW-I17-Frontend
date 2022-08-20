import { useState, React } from "react";
import EventModal from "./EventModal";

const Table = ({ status, statusHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const events = JSON.parse(localStorage.getItem("events"));
  const events = [
    {
      name: "Event 1",
      fromdate: "01/01/2020",
      todate: "01/02/2020",
      location: "Location 1",
      status: "food",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Event 2",
      fromdate: "01/01/2020",
      todate: "02/02/2020",
      location: "Location 2",
      status: "Pending",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  const [pevent, setPevent] = useState({});
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
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">Venue</th>
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">
                    Start Date
                  </th>
                  <th className="py-3 px-3 md:px-0  border-[#B9B9B9] border-2">
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
