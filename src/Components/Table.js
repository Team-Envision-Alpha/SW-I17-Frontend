import { useState, React } from "react";
import EventModal from "./EventModal";

const Table = ({ status, statusHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
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
                  <th className="py-3  border-[#B9B9B9] border-2">Venue</th>
                  <th className="py-3 border-[#B9B9B9] border-2">
                    {statusHeader}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-[#000000]">
                  <td
                    className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                  >
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                    <div>
                      <p
                        className="text-[#874439] font-bold cursor-pointer hover:text-red-600"
                        onClick={() => {
                          return setIsOpen(true);
                        }}
                      >
                        {status}
                      </p>
                    </div>

                    {isOpen && <EventModal setIsOpen={setIsOpen} />}
                  </td>
                </tr>
                <tr className="text-[#000000]">
                  <td
                    className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                  >
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                    <div>
                      <p className="text-[#874439] font-bold">{status}</p>
                    </div>
                  </td>
                </tr>
                <tr className="text-[#000000]">
                  <td
                    className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                  >
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                    <div>
                      <p className="text-[#874439] font-bold">{status}</p>
                    </div>
                  </td>
                </tr>
                <tr className="text-[#000000]">
                  <td
                    className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                  >
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                    <div>
                      <p className="text-[#874439] font-bold">{status}</p>
                    </div>
                  </td>
                </tr>
                <tr className="text-[#000000]">
                  <td
                    className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                  >
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                    <div>
                      <p>xyz</p>
                    </div>
                  </td>
                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                    <div>
                      <p className="text-[#874439] font-bold">{status}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
