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
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";

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
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div></div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <CircularProgressbar
                value={70}
                text={"70%"}
                strokeWidth={5}
                styles={buildStyles({
                  textColor: "orange",
                  pathColor: "orange",
                  // trailColor: "orange",
                })}
              />
            </div>
            <div>
              <div className="text-[3vh] font-IBM-Sans font-bold">{title}</div>
              <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="gray" />
                  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialAnalytics;
