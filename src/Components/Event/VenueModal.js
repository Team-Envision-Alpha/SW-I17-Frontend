/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import Navbar from "../Components/NewNavbar";
// import Table from "../Components/Table";
import bg from "../../Assets/Images/Group.svg";
import { gql, useQuery } from "@apollo/client";
// import Sidebar from "../Components/Sidebar";
// import Burger from "../Components/burger";
import Select from "../../Components/Select";
// import Modal from "../Components/VenueModal";
import cross from "../../Assets/Images/cross.svg";
const EventReq = ({
  show,
  setShow,
  maindata,
  setMainData,
  data,
  setVenueShow,
}) => {
  // const VENUE_QUERY = gql`
  //   query {
  //     getVenues {
  //       id
  //       name
  //       city
  //       email
  //       phone
  //       state
  //       address
  //       capacity
  //       website
  //     }
  //   }
  // `;
  const types = ["Name", "City", "Email", "Phone", "State", "Address"];
  console.log("This", maindata);
  // const { loading, err, data } = useQuery(VENUE_QUERY);
  const [formdata, setFormData] = useState({});
  //   const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  //   console.log(data);
  const [filterData, setFilterData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setFilterData(data?.getVenues);
  }, [data]);

  useEffect(() => {
    console.log(formdata);
    if (formdata.type && formdata.query) {
      const newData = data?.getVenues.filter((venue) => {
        // console.log();
        // console.log(
        //   venue[formdata.type.toLowerCase()]
        //     .toLowerCase()
        //     .includes(formdata.query.toLowerCase())
        // );
        return venue[formdata.type.toLowerCase()]
          .toLowerCase()
          .includes(formdata.query.toLowerCase());
      });

      setFilterData(newData);
      // console.log(newData);
    } else {
      //   console.log(data?.getVenues);
      setFilterData(data?.getVenues);
    }
  }, [formdata]);
  //   console.log(filterData);

  return (
    <>
      <div
        className={`${
          show ? "block" : "hidden"
        } z-[110] bg-[#00000090] w-[100vw] h-[100vh] justify-center fixed top-0 left-0 flex flex-row transition-all duration-700`}
      >
        {/* <Navbar />
        <Burger open={show} setOpen={setShow}></Burger>
        <Sidebar show={show} setShow={setShow} /> */}
        <div className="w-[98%] md:w-[80%] md:h-[85%] justify-center rounded-xl overflow-hidden mx-auto my-auto bg-[#f3b641] animate-[ping_0.3s_ease-in-out_reverse_1]">
          <div className="w-full bg-[#f3f3f3] h-[95%] mx-auto mt-8 relative">
            <div
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                src={cross}
                className="absolute right-2 top-2 cursor-pointer"
                alt="cross"
              />
            </div>
            <div className="flex flex-col justify-center align-middle place-items-center gap-y-5">
              <div>
                <p className="font-bold text-[4vh] tracking-wide">Venues</p>
              </div>
              <div className="flex flex-col w-[50vw] md:flex-row gap-x-4 gap-y-4 h-auto justify-center min-w-max ">
                <input
                  type="text"
                  className="w-[30vw] p-4 outline-none min-w-max"
                  style={{
                    color: "#818181",
                    background: "#F6F5F6",
                    border: "2px solid grey",
                    borderRadius: "8px",
                  }}
                  name="query"
                  placeholder="Text here"
                  onChange={(e) => {
                    setFormData({ ...formdata, query: e.target.value });
                  }}
                />
                <Select
                  data={types}
                  name="type"
                  setFormData={setFormData}
                  formdata={formdata}
                />
              </div>
              <div>
                {/* <Modal
              modal={modal}
              setModal={setModal}
              venue={filterData && filterData[current]}
            ></Modal> */}
                <section className="container  font-IBM-Sans ">
                  <div className="w-[90vw] md:w-[50vw]  rounded-lg shadow-lg">
                    <div className="w-full">
                      <table className="w-full ">
                        <thead>
                          <tr
                            className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
                            style={{ background: "rgba(0, 0, 0, 0.05)" }}
                          >
                            <th className="py-3 border-[#B9B9B9] border-2 ">
                              Name
                            </th>
                            <th className="py-3  border-[#B9B9B9] border-2">
                              City
                            </th>
                            <th className="py-3  border-[#B9B9B9] border-2">
                              State
                            </th>
                            <th className="py-3  border-[#B9B9B9] border-2">
                              Capacity
                            </th>
                            <th className="py-3 border-[#B9B9B9] border-2">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {data
                            ? filterData?.map((venue, idx) => (
                                <tr key={venue.id} className="text-[#000000]">
                                  <td
                                    className="text-center py-3 border-[#B9B9B9] border-2 
                    text-md"
                                  >
                                    <div>
                                      <p>{venue.name}</p>
                                    </div>
                                  </td>
                                  <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                                    <div>
                                      <p>{venue.city}</p>
                                    </div>
                                  </td>
                                  <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                                    <div>
                                      <p>{venue.state}</p>
                                    </div>
                                  </td>
                                  <td
                                    className="text-center py-3 text-md border-[#B9B9B9] border-2"
                                    style={{
                                      color: `${
                                        parseInt(venue.capacity) <
                                        parseInt(maindata.expected_count)
                                          ? "red"
                                          : "green"
                                      }`,
                                    }}
                                  >
                                    <div>
                                      <p>{venue.capacity}</p>
                                    </div>
                                  </td>
                                  {parseInt(venue.capacity) <
                                  parseInt(maindata.expected_count) ? (
                                    <td className="text-center py-3 text-md text-gray-300 border-[#B9B9B9] border-2 ">
                                      <div>
                                        -
                                        {/* <p
                                className="text-[#874439] font-bold cursor-pointer hover:text-red-600"
                                // onClick={() => {
                                //   return setIsOpen(true);
                                // }}
                              >
                                Edit User
                              </p> */}
                                        {/* <p
                                    className="cursor-pointer hover:text-red-900 transition"
                                    onClick={() => {
                                      setCurrent(idx);
                                      setModal(true);
                                    }}
                                  >
                                    View More
                                  </p> */}
                                      </div>

                                      {/* {isOpen && <EventModal setIsOpen={setIsOpen} />} */}
                                    </td>
                                  ) : (
                                    <td
                                      className="text-center py-3 text-md border-[#B9B9B9] border-2 hover:text-red-800 cursor-pointer transition"
                                      onClick={() => {
                                        setMainData({
                                          ...maindata,
                                          venue: venue.id,
                                        });
                                        setVenueShow(
                                          `${venue.name} - ${venue.city}, ${venue.state}`
                                        );
                                        setShow(!show);
                                      }}
                                    >
                                      <div>
                                        Choose Venue
                                        {/* <p
                                className="text-[#874439] font-bold cursor-pointer hover:text-red-600"
                                // onClick={() => {
                                //   return setIsOpen(true);
                                // }}
                              >
                                Edit User
                              </p> */}
                                        {/* <p
                                    className="cursor-pointer hover:text-red-900 transition"
                                    onClick={() => {
                                      setCurrent(idx);
                                      setModal(true);
                                    }}
                                  >
                                    View More
                                  </p> */}
                                      </div>

                                      {/* {isOpen && <EventModal setIsOpen={setIsOpen} />} */}
                                    </td>
                                  )}
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReq;
