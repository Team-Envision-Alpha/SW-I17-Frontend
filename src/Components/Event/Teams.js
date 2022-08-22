/* eslint-disable no-unused-vars */

import Select from "../Select.js";
// import { DateRangePicker } from "react-date-range";

import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
// import states from "../Assets/Data/States.json";

import * as XLSX from "xlsx";

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
  teams,
}) {
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
  function arrayRemove(arr, value) {
    if (arr.length === 1) {
      return "empty";
    } else {
      return arr.filter(function (ele) {
        return ele !== value;
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

  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10">
      <div className="w-full h-full py-5 mt-5 bg-white px-10">
        <p className="text-center my-10 text-lg font-bold">
          Fill out the Following Details
        </p>
        <div className="flex flex-col justify-center">
          <h3 className="mx-auto text-center mb-5">
            Select Teams for Invite List
          </h3>
          <div className="flex justify-evenly">
            <div
              onClick={() => {
                setFormData({ ...formdata, departmentInvited: teams });
              }}
            >
              <Button variant="outlined" color="success">
                Select All
                <span className="ml-3">
                  <BsCheckLg />
                </span>
              </Button>
            </div>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setFormData((formdata) => {
                  const newData = { ...formdata };
                  delete newData.departmentInvited;
                  return newData;
                });
              }}
            >
              Clear All
              <span className="ml-3">
                <BsXLg />
              </span>
            </Button>
          </div>

          <div className="flex justify-center flex-row flex-wrap mt-4">
            {teams.map((team, idx) => {
              return (
                <div className="mr-4 transition mt-3">
                  {formdata.departmentInvited &&
                  formdata.departmentInvited.includes(team) ? (
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => {
                        const resp = arrayRemove(
                          formdata.departmentInvited,
                          team
                        );
                        if (resp !== "empty") {
                          setFormData({
                            ...formdata,
                            departmentInvited: resp,
                          });
                        } else {
                          setFormData((formdata) => {
                            const newData = { ...formdata };
                            delete newData.departmentInvited;
                            return newData;
                          });
                        }
                      }}
                    >
                      {team}
                      <span className="ml-3">
                        <BsXLg />
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (formdata.departmentInvited) {
                          setFormData({
                            ...formdata,
                            departmentInvited: [
                              ...formdata.departmentInvited,
                              team,
                            ],
                          });
                        } else {
                          setFormData({
                            ...formdata,
                            departmentInvited: [team],
                          });
                        }
                      }}
                    >
                      {team}
                      <span className="ml-3">
                        <BsPlusLg />
                      </span>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row mt-12 pb-10 justify-between">
          <div className="font-bold py-3 cursor-pointer" onClick={handleBack}>
            Go back
          </div>
          <div
            className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer"
            onClick={handleNext}
          >
            Next
          </div>
        </div>{" "}
        <div className="flex flex-row mt-12 pb-10 justify-between">
          <div className="font-bold py-3 cursor-pointer" onClick={handleBack}>
            Go back
          </div>
          <div
            className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer"
            onClick={handleNext}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
