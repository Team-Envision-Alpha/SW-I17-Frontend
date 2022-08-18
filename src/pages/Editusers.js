/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Navbar from "../Components/NewNavbar";
import Table from "../Components/Table";
import bg from "../Assets/Images/Group.svg";
import { gql, useQuery } from "@apollo/client";
import Sidebar from "../Components/Sidebar";
import Burger from "../Components/burger";
import Select from "../Components/Select";

const EventReq = () => {
  const USER_QUERY = gql`
    query {
      getUsers {
        id
        name
        email
        phone
        role
      }
    }
  `;
  const types = ["Name", "Email", "Phone", "Role"];

  const { loading, err, data } = useQuery(USER_QUERY);
  const [formdata, setFormData] = useState({});
  const [show, setShow] = useState(false);
  console.log(data);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(data?.getUsers);
  }, [data]);

  useEffect(() => {
    console.log(formdata);
    if (formdata.type && formdata.query) {
      const newData = data?.getUsers.filter((user) => {
        // console.log();
        console.log(
          user[formdata.type.toLowerCase()]
            .toLowerCase()
            .includes(formdata.query.toLowerCase())
        );
        return user[formdata.type.toLowerCase()]
          .toLowerCase()
          .includes(formdata.query.toLowerCase());
      });

      setFilterData(newData);
      // console.log(newData);
    } else {
      console.log(data?.getUsers);
      setFilterData(data?.getUsers);
    }
  }, [formdata]);
  console.log(filterData);
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="lg:hidden block absolute z-50">
          <Burger open={show} setOpen={setShow}></Burger>
        </div>
        <Sidebar show={show} setShow={setShow} />
        <div className="pt-24 md:ml-[20vw] mb-10 flex flex-col gap-20 items-center justify-center">
          <div>
            <p className="font-bold text-[4vh] tracking-wide">Select User</p>
          </div>
          <div className="flex flex-col w-[50vw] md:flex-row gap-x-4 h-auto justify-center">
            <input
              type="text"
              className="w-[30vw] p-4 outline-none"
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
                          Email
                        </th>
                        <th className="py-3  border-[#B9B9B9] border-2">
                          Phone
                        </th>
                        <th className="py-3 border-[#B9B9B9] border-2">Role</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {data
                        ? filterData?.map((user) => (
                            <tr key={user.id} className="text-[#000000]">
                              <td
                                className="text-center py-3 border-[#B9B9B9] border-2 
                    text-md"
                              >
                                <div>
                                  <p>{user.name}</p>
                                </div>
                              </td>
                              <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                                <div>
                                  <p>{user.email}</p>
                                </div>
                              </td>
                              <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                                <div>
                                  <p>{user.phone}</p>
                                </div>
                              </td>
                              <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                                <div>
                                  {/* <p
                                className="text-[#874439] font-bold cursor-pointer hover:text-red-600"
                                // onClick={() => {
                                //   return setIsOpen(true);
                                // }}
                              >
                                Edit User
                              </p> */}
                                  {user.role}
                                </div>

                                {/* {isOpen && <EventModal setIsOpen={setIsOpen} />} */}
                              </td>
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
    </>
  );
};

export default EventReq;
