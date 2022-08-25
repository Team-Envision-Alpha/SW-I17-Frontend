import {  React } from "react";

const DetailTable = () => {
  // console.log(events);
  return (
    <>
      <section className="font-IBM-Sans ">
        <div>
          <table className=" border-gray-600 text-center  text-md  border-2 bg-white">
            <thead>
              <tr
                className="text-md font-semibold   text-gray-900   text-md   border-[#B9B9B9]  text-center border-3"
                style={{ background: "rgba(0, 0, 0, 0.05)" }}
              >
                <th className="border-2 border-gray-400 text-center p-3 text-md  "></th>
                <th className="border-2 border-gray-400 text-center p-3 text-md ">
                  Breakfast
                </th>
                <th className="border-2 border-gray-400 text-center p-3 text-md ">
                  Lunch
                </th>
                <th className="border-2 border-gray-400 text-center p-3 text-md ">
                  Dinner
                </th>
              </tr>
              <tr className="border-2 border-gray-400 text-center p-2 text-md ">
                <td className="border-2 border-gray-400 text-center p-3 text-md   font-bold">
                  DAY 1
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  Provided
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  Not Provided
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  Provided
                </td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 text-center p-3 text-md   font-bold">
                  DAY 2
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  Not Provided
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  provided
                </td>
                <td className="border-2 border-gray-400 text-center p-3 text-md  ">
                  Not Provided
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </>
  );
};

export default DetailTable;
