import React from "react";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";
import bg from "../Assets/Images/Group.svg";
import { gql, useQuery } from "@apollo/client";

const EventReq = () => {
  const USER_QUERY = gql`
    query {
      getAllUsers {
        id
        name
        email
        phone
      }
    }
  `;
  // const { loading, err, data } = useQuery(USER_QUERY);
  // console.log(data.getAllUsers);
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="my-10 flex flex-col gap-20 items-center justify-center">
          <div>
            <p className="font-bold text-[4vh] tracking-wide">Select User</p>
          </div>
          <div>
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
                      <tr className="text-[#000000]">
                        <td
                          className="text-center py-3 border-[#B9B9B9] border-2 
                    text-md"
                        >
                          <div>
                            <p>A. Suresh</p>
                          </div>
                        </td>
                        <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                          <div>
                            <p>sureash_8@gmail.com</p>
                          </div>
                        </td>
                        <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                          <div>
                            <p>8745973210</p>
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
                            Role
                          </div>

                          {/* {isOpen && <EventModal setIsOpen={setIsOpen} />} */}
                        </td>
                      </tr>
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
