/* eslint-disable no-unused-vars */
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import SelectTag from "../Components/SelectTag";

const ActivityLog = () => {


    const filtertypes = ["Date", "Month", "Year"];
    const yeartypes = ["2022", "2021", "2020", "2019", "2018"];
    const monthtypes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const daytypes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];


    const [filterdata, setFilterData] = useState("");
    const [year, setyearData] = useState(new Date().getFullYear());
    const [month, setmonthData] = useState(new Date().getMonth());
    const [date, setdateData] = useState(new Date().getDate());
    



    const ACTIVITYLOG_QUERY = filterdata ? filterdata === "Date" ? (gql`query getLogsbyDate($date:String!) {getLogsbyDate(date:$date){message id  type  timestamp user_id user_name}}`) : (filterdata === "Month" ? (gql`query getLogsbyMonth($year_month:String!) {getLogsbyMonth(year_month:$year_month){message id  type  timestamp user_id user_name}}`) : (filterdata === "Year" && (gql`query getLogsbyYear($year:String!) {getLogsbyYear(year:$year){message id  type  timestamp user_id user_name}}`))) : gql`query {getLogs {message id  type  timestamp user_id user_name}}`



    const { loading, err, data } = useQuery(ACTIVITYLOG_QUERY, {
        variables: {
            year, date: `${year}/${month}/${date}`, year_month: `${year}/${month}`
        }
    });


    if (err) {
        console.log("err", err);
        toast.error("Error: Cannot get Activity Log", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    else if (!loading) {
        console.log(data)
    }



    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div>
               
                <div className="pt-24 mb-10 flex flex-col gap-20 items-center justify-center">
                    <div>
                        <p className="font-bold text-[4vh] tracking-wide">Activity Logs</p>
                    </div>


                    <div className="flex flex-col w-[50vw] min-w-max md:flex-row gap-x-4 gap-y-4 h-auto justify-center items-center">
                        <div className="font-bold items-center text-center">Filter By:</div>
                        <SelectTag
                            data={filtertypes}
                            name="type"
                            setFormData={setFilterData}
                            formdata={filterdata}
                        />
                        {/* {filterdata &&
                            <>

                                <div className="font-bold items-center text-center">Choose Year:</div>
                                <SelectTag
                                    data={yeartypes}
                                    name="year"
                                    setFormData={setyearData}
                                    formdata={year}
                                />
                                {filterdata !== "Year" ?
                                    <>
                                        <div className="font-bold items-center text-center">Choose Month:</div>
                                        <SelectTag
                                            data={monthtypes}
                                            name="month"
                                            setFormData={setmonthData}
                                            formdata={month}
                                        />

                                    </> : ""
                                }
                                {(filterdata !== "Year" && filterdata !== "Month") ?
                                    <>

                                        <div className="font-bold items-center text-center">Choose Date:</div>
                                        <SelectTag
                                            data={daytypes}
                                            name="date"
                                            setFormData={setdateData}
                                            formdata={date}
                                        />
                                    </> : ""}
                            </>
                        }
 */}

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
                                                    ID
                                                </th>
                                                <th className="py-3  border-[#B9B9B9] border-2">
                                                    Message
                                                </th>
                                                <th className="py-3  border-[#B9B9B9] border-2">
                                                    Type
                                                </th>
                                                <th className="py-3 border-[#B9B9B9] border-2">Timestamp</th>
                                                <th className="py-3 border-[#B9B9B9] border-2">User ID</th>
                                                <th className="py-3 border-[#B9B9B9] border-2">User Name</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {(filterdata === "Year" ? data?.getLogsByYear : filterdata === "Month" ? data?.getLogsByMonth : filterdata === "Day" ? data?.getLogsByDay : data?.getLogs)?.map((log) => (
                                                <tr key={log.id} className="text-[#000000]">
                                                    <td
                                                        className="text-center py-3 border-[#B9B9B9] border-2 text-md">
                                                        <div>
                                                            <p>{log.id}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                                                        <div>
                                                            <p>{log.message}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                                                        <div>
                                                            <p>{log.type}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                                                        <div>
                                                            <p>{log.timestamp}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                                                        <div>
                                                            <p>{log.user_id}</p>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                                                        <div>
                                                            <p>{log.user_name}</p>
                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                            }
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

export default ActivityLog;
