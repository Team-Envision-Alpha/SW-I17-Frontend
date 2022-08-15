import Select from "../Select.js";
// import { DateRangePicker } from "react-date-range";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
// import states from "../Assets/Data/States.json";

import * as XLSX from "xlsx";
import _ from "lodash";

import breakfast from "../../Assets/Images/Event/breakfast.svg";
import lunch from "../../Assets/Images/Event/lunch.svg";
import dinner from "../../Assets/Images/Event/dinner.svg";

export default function Food({
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
  teams,
}) {
  function daysCount() {
    var start = new Date(formdata.fromdate);
    var end = new Date(formdata.todate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  console.log(daysCount());
  function handleNext() {
    if (current < 4) {
      setCurrent(current + 1);
    }
  }
  function handleBack() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }
  function arrayRemove(arr, value) {
    if (arr.length == 1) {
      return "empty";
    } else {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }
  }
  function readAppendFile(f) {
    // console.log(f);
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      // console.log("Data>>>" + data); // shows that excel data is read
      // console.log(convertToJson(data));
      setExtraUsers([...extrausers, ...convertToJson(data)]); // shows data in json format
    };
    reader.readAsBinaryString(f);
  }

  function convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setFormData({ ...formdata, image: e.target.result });
    };
  };
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date.toDateString().split(",")[0];
  };
  function editFood(str, index, value) {
    var newFood = { ...formdata.food };
    var target = { ...newFood[str] };
    target[index] = value;
    // console.log(target);
    newFood[str] = target;
    return newFood;
  }
  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10">
      <div className="w-full h-full py-5 mt-5 bg-white px-10">
        <p className="text-center my-10 text-lg font-bold">
          Fill out the Following Details
        </p>
        Food Details
        {_.times(daysCount(), (i) => {
          return (
            <div className="flex flex-col w-full gap-y-4 my-5 shadow-lg hover:shadow-xl transition">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Day {i + 1} - {new Date(formdata.fromdate).addDays(i)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-4">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Breakfast</span>
                        <input
                          type="checkbox"
                          className="ml-auto my-auto mt-[0.6rem] "
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              food: editFood("breakfast", i, e.target.checked),
                            });
                          }}
                        ></input>
                      </div>
                      <img src={breakfast} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Typography>
                    </div>

                    <div className="flex flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-4">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Lunch</span>
                        <input
                          type="checkbox"
                          className="ml-auto my-auto mt-[0.6rem] "
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              food: editFood("lunch", i, e.target.checked),
                            });
                          }}
                        ></input>
                      </div>
                      <img src={lunch} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Typography>
                    </div>

                    <div className="flex flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-4">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Dinner</span>
                        <input
                          type="checkbox"
                          className="ml-auto my-auto mt-[0.6rem] "
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              food: editFood("dinner", i, e.target.checked),
                            });
                          }}
                        ></input>
                      </div>
                      <img src={dinner} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Typography>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
        <div className="flex flex-row mt-12 pb-10 justify-between">
          <div className="font-bold py-3 cursor-pointer" onClick={handleBack}>
            Go back
          </div>
          <div
            className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer "
            onClick={handleNext}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
