import { Calendar } from "react-date-range";
import { useState, useEffect } from "react";
import Select from "../Select";
// import TimePicker from "react-time-picker";

import TimeKeeper from "react-timekeeper";
import _ from "lodash";

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
  data,
  current,
  setCurrent,
}) {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [time, setTime] = useState("00:00am");
  const [times, setTimes] = useState({});
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
  // const time = [
  //   "9:00 AM-10:00 AM",
  //   "10:00 AM-11:00 AM",
  //   "11:00 AM-12:00 PM",
  //   "12:00 PM-1:00 PM",
  //   "1:00 PM-2:00 PM",
  //   "2:00 PM-3:00 PM",
  //   "3:00 PM-4:00 PM",
  //   "4:00 PM-5:00 PM",
  //   "5:00 PM-6:00 PM",
  //   "6:00 PM-7:00 PM",
  //   "7:00 PM-8:00 PM",
  //   "8:00 PM-9:00 PM",
  //   "9:00 PM-10:00 PM",
  //   "10:00 PM-11:00 PM",
  //   "11:00 PM-12:00 AM",
  // ];
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
    var start = new Date(formdata.fromdate);
    var end = new Date(formdata.todate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  // console.log(time);

  useEffect(() => {
    setFormData({ ...formdata, times });
  }, [times]);

  function checkTime() {
    // console.log(formdata);
    if (formdata.times && Object.keys(formdata.times).length == daysCount()) {
      var check = false;
      Object.keys(formdata.times).map((key) => {
        // console.log(formdata.times[key]);
        // console.log(formdata.times);
        if (Object.keys(formdata.times[key]).length != 2) {
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
    if (formdata.fromdate && formdata.todate && checkTime()) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] rounded-2xl overflow-y-hidden my-10 transition">
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
                    fromdate: e.toLocaleString().split(",")[0],
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
                    todate: e.toLocaleString().split(",")[0],
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
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 w-full my-4">
          <h4>Venue</h4>
          {data ? (
            <Select
              dataobj={data.getAllVenues}
              name="venue"
              setFormData={setFormData}
              formdata={formdata}
            />
          ) : null}
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
