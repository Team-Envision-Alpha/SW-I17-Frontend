import { useState, React } from "react";

const DetailTable = () => {
// console.log(events);
return (
  <>
    <section className="font-IBM-Sans ">
        
        <div>
            <table className=" border-gray-600 border-2">
              <thead>
              <tr
                  className="text-md font-semibold   text-gray-900  border-[#B9B9B9]  text-center border-3"
                  style={{ background: "rgba(0, 0, 0, 0.05)" }}
                >
                 <th className="border-2 border-gray-400 "></th>
                 <th className="border-2 border-gray-400">breakfast</th>
                 <th className="border-2 border-gray-400">lunch</th>
                 <th className="border-2 border-gray-400">Dinner</th>   
                </tr>
                <tr className="border-2 border-gray-400">
                    <td className="border-2 border-gray-400 pb-4">DAY 1</td>
                    <td className="border-2 border-gray-400 pb-4">Provided</td>
                    <td className="border-2 border-gray-400 pb-4">Not Provided</td>
                    <td className="border-2 border-gray-400 pb-4">Provided</td>
                    
                </tr>
                <tr>
                    <td className="border-2 border-gray-400 pb-4">DAY 2</td>
                    <td className="border-2 border-gray-400 pb-4">Not Provided</td>
                    <td className="border-2 border-gray-400 pb-4">provided</td>
                    <td className="border-2 border-gray-400 pb-4">Not Provided</td>
                </tr>
              </thead>
              </table>
              </div>
        
    </section>
  </>
);
};

export default DetailTable;