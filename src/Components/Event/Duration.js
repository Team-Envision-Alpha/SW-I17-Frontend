/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extend-native */
/* eslint-disable no-unused-vars */

import { Calendar } from "react-date-range";
import { useState, useEffect } from "react";
import Select from "../Select";
// import TimePicker from "react-time-picker";
import { gql, useMutation, useQuery } from "@apollo/client";

import TimeKeeper from "react-timekeeper";
import _ from "lodash";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import VenueModal from "./VenueModal";

export default function Details({
  setFormData,
  formdata,
  setExtraUsers,
  extrausers,
  setUserData,
  userdata,
  setUserFile,
  userfile,
  user,
  current,
  setCurrent,
}) {
  const VENUE_QUERY = gql`
    query {
      getVenues {
        id
        name
        city
        email
        phone
        state
        address
        capacity
        website
      }
    }
  `;

  const { loading, err, data } = useQuery(VENUE_QUERY);
  // console.log(venues);

  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [time, setTime] = useState("00:00am");
  const [times, setTimes] = useState({});
  const [show, setShow] = useState(false);
  const [venueshow, setVenueshow] = useState("");
  // const [times, setTimes] = useState([]);
  const disabled_dates = [
    new Date(2022, 3, 10),
    new Date(2022, 3, 11),
    new Date(2022, 4, 10),
  ];
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date.toDateString().split(",")[0];
  };

  function handleNext() {
    if (current < 3) {
      setCurrent(current + 1);
    }
  }
  function handleBack() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }
  function daysCount() {
    var start = new Date(formdata.from_date);
    var end = new Date(formdata.to_date);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  // console.log(time);

  useEffect(() => {
    setFormData({ ...formdata, time: times });
  }, [times]);

  function checkTime() {
    // console.log(formdata);
    if (
      formdata.time &&
      Object.keys(formdata.time).length === daysCount() &&
      formdata.venue
    ) {
      var check = false;
      Object.keys(formdata.time).map((key) => {
        // console.log(formdata.times[key]);
        // console.log(formdata.times);
        if (Object.keys(formdata.time[key]).length !== 2) {
          check = false;
        } else {
          check = true;
        }
      });
    }
    return check;
  }
  function checkData() {
    console.log(formdata);
    if (formdata.from_date && formdata.to_date && checkTime()) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] rounded-2xl overflow-y-hidden my-10 transition">
      <VenueModal
        show={show}
        setShow={setShow}
        maindata={formdata}
        setMainData={setFormData}
        data={data}
        setVenueShow={setVenueshow}
      />
      <div className="w-full h-full py-5 mt-5 bg-white px-10">
        <p className="text-center my-10 text-lg font-bold">
          Fill out the Following Details
        </p>
        <div className="flex flex-col gap-4">
          <h4>Select Date Range</h4>
          <div className="w-full -mt-2 flex flex-row flex-wrap justify-around object-contain my-auto bg-[#d6d4d410] backdrop-blur-md">
            <div>
              <p>From Date</p>
              <Calendar
                date={startdate}
                minDate={new Date()}
                disabledDates={disabled_dates}
                onChange={(e) => {
                  setStartDate(e);
                  setFormData({
                    ...formdata,
                    from_date: e.toLocaleString().split(",")[0],
                  });
                }}
              />
            </div>
            <div>
              <p>To Date</p>
              <Calendar
                date={enddate}
                minDate={startdate}
                disabledDates={disabled_dates}
                onChange={(e) => {
                  setEndDate(e);
                  setFormData({
                    ...formdata,
                    to_date: e.toLocaleString().split(",")[0],
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-5">
          {_.times(daysCount(), (i) => {
            return (
              <div className="flex flex-row justify-around" key={i}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      Day {i + 1} - {new Date(formdata.from_date).addDays(i)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="flex md:flex-row flex-col p-3 gap-x-2">
                    <TimeKeeper
                      time={
                        _.get(times, `${i}.from`)
                          ? _.get(times, `${i}.from`)
                          : "00:00am"
                      }
                      switchToMinuteOnHourSelect={true}
                      onChange={(data) => {
                        setTimes({
                          ...times,
                          [i]: {
                            ...times[i],
                            from: data.formatted24,
                          },
                        });
                        // setTimes({
                        //   ...times,
                        //   [i]: {
                        //     ...times[i],
                        //     from: data.formatted24,
                        //   },
                        // });
                      }}
                    />
                    <TimeKeeper
                      time={
                        _.get(times, `${i}.to`)
                          ? _.get(times, `${i}.to`)
                          : "00:00am"
                      }
                      disabledTimeRange={{
                        from: "0:00",
                        to: _.get(times, `${i}.from`),
                      }}
                      switchToMinuteOnHourSelect={true}
                      onChange={(data) => {
                        setTimes({
                          ...times,
                          [i]: {
                            ...times[i],
                            to: data.formatted24,
                          },
                        });
                        // setTimes({
                        //   ...times,
                        //   [i]: {
                        //     ...times[i],
                        //     from: data.formatted24,
                        //   },
                        // });
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 w-full my-4">
          <h4>Venue</h4>
        </div>
        {/* </div> */}
        {/* <div className="flex flex-col gap-4 my-4">
          <h4>Time</h4>
          <Select
            data={time}
            name="time"
            setFormData={setFormData}
            formdata={formdata}
          />
        </div> */}
        <p className=" flex flex-row justify-center mb-6">
          <button
            className=" cursor-pointer transition hover:border-[#1877f2] border hover:bg-white hover:text-[#1877f2] bg-[#1877f2] p-3 rounded-lg text-white"
            onClick={() => {
              setShow(!show);
            }}
          >
            Click here to select a venue
          </button>
        </p>
        <div className="flex flex-col gap-4 mb-5">
          {/* <h4>Expected Count</h4> */}
          <input
            type="text"
            className="w-full p-4 outline-none"
            style={{
              color: "#818181",
              background: "#F6F5F6",
              border: "2px solid grey",
              borderRadius: "8px",
            }}
            value={formdata.venue ? venueshow : "Select a Venue to Continue"}
            placeholder="Text here"
            name="caption"
            disabled
          />
        </div>
        <div className="flex flex-row mt-12 pb-10 justify-between">
          <div className="font-bold py-3 cursor-pointer" onClick={handleBack}>
            Go back
          </div>
          {checkData() ? (
            <div
              className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer"
              onClick={handleNext}
            >
              Next
            </div>
          ) : (
            <div className=" bg-red-400 text-white px-10 py-3 rounded-lg">
              Please Fill All Fields
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
