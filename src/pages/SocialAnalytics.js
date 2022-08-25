import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import Navbar from "../Components/Navbar";
// import bg from "../Assets/Images/Group.svg";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const SocialAnalytics = ({ title, aspect }) => {
  return (
    <>
      <div >
        {/* <Navbar /> */}
        <div>
          <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10">
            <div>
              <p className="text-[3vh] font-IBM-Sans text-center font-bold ">
                Social Media Analytics
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-28">
                <div className="w-[20vw] flex justify-center items-center mx-auto">
                  <CircularProgressbar
                    value={40}
                    text={"40%"}
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "orange",
                      pathColor: "orange",
                      trailColor: "#EBEBEB",
                    })}
                  />
                </div>
                <div className="text-[3vh] text-center font-IBM-Sans font-bold">
                  Followers Increased from last month
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <ResponsiveContainer width="100%" aspect={aspect}>
                  <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#FFA500"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FFA500"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="chartGrid"
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Total"
                      stroke="#FFA500"
                      fillOpacity={1}
                      fill="url(#total)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="text-[3vh] text-center font-IBM-Sans font-bold">
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialAnalytics;
