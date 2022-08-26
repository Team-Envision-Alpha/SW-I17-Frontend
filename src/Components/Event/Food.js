/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-extend-native */
/* eslint-disable no-unused-vars */

import Select from "../Select.js";
// import { DateRangePicker } from "react-date-range";
import * as React from "react";
import { useState, useEffect } from "react";
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

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

import * as XLSX from "xlsx";
import _ from "lodash";

import breakfast from "../../Assets/Images/Event/breakfast.svg";
import lunch from "../../Assets/Images/Event/lunch.svg";
import dinner from "../../Assets/Images/Event/dinner.svg";

import { gql, useMutation, useQuery } from "@apollo/client";
import "react-toastify/dist/ReactToastify.css";

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
  onSubmit,
  fooddata,
  setFoodData,
}) {
  const VENUE_QUERY = gql`
    query getVenue($id: ID!) {
      getVenue(id: $id) {
        id
        name
        canteen_menu
      }
    }
  `;
  const animatedComponents = makeAnimated();

  const { loading, err, data } = useQuery(VENUE_QUERY, {
    variables: {
      id: formdata.venue,
    },
  });
  const [menu, setMenu] = useState();

  function convertToArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].value);
    }
    return newArr;
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      color: state.isSelected ? "white" : "blue",
      padding: 10,
    }),
    control: (provided) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "100%",
      background: "#f6f5f6",
      padding: "0.6rem",
      marginTop: "0.1rem",
      border: "2px solid #808080",
      borderRadius: "8px",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  useEffect(() => {
    if (data) {
      setMenu(JSON.parse(data.getVenue.canteen_menu));
    }
  }, [data]);

  console.log(menu);

  function daysCount() {
    var start = new Date(formdata.from_date);
    var end = new Date(formdata.to_date);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  // console.log(daysCount());
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
  function convertToArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].value);
    }
    return newArr;
  }
  function editFood(str, index, value) {
    var newFood = { ...formdata.food };
    var target = { ...newFood[str] };
    target[index] = value;
    // console.log(target);
    newFood[str] = target;
    return newFood;
  }
  // function arrayRemove(arr, value) {
  //   return arr.filter(function (ele) {
  //     return ele !== value;
  //   });
  // }

  function editMenu(str, i, index, value) {
    var newMenu = { ...formdata.food_req };
    var target = { ...newMenu[str] };
    // if (value) {
    //   if (target[i]) {
    //     target[i] = [...target[i], menu[str][index]];
    //   } else {
    //     target[i] = [menu[str][index]];
    //   }
    // } else {
    //   arrayRemove(target[i], menu[str][index]);
    // }
    if (value) {
      if (target[i]) {
        target[i].push(menu[str][index]);
      } else {
        target[i] = [menu[str][index]];
      }
    } else {
      target[i] = arrayRemove(target[i], menu[str][index]);
    }
    // target[i][index] = value;
    newMenu[str] = target;
    return newMenu;
  }

  function handleFoodDate(str, index, value) {
    var newFood = { ...formdata.food };
    var target = { ...newFood[str] };
    target[index] = convertToArray(value);
    newFood[str] = target;
    setFormData({
      ...formdata,
      food_req: {
        ...formdata.food_req,
        [str]: {
          ...formdata.food_req[str],
          [index]: [...formdata.food_req[str][index], ...convertToArray(value)],
        },
      },
    });
    return newFood[str];
  }
  // console.log(formdata);
  console.log(fooddata);
  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10">
      <div className="w-full h-full py-5 mt-5 bg-white px-10">
        <p className="text-center my-10 text-lg font-bold">
          Fill out the Following Details
        </p>
        Food Details
        {_.times(daysCount(), (i) => {
          console.log(i);
          return (
            <div
              className="flex flex-col w-full gap-y-4 my-5 shadow-lg hover:shadow-xl transition"
              key={i}
            >
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
                <AccordionDetails>
                  <div className="flex flex-row justify-between">
                    <div className=" gap-y-4 flex flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-5">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Breakfast</span>
                      </div>
                      <img src={breakfast} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        {menu?.breakfast?.map((item, index) => {
                          return (
                            <div key={index}>
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  setFormData({
                                    ...formdata,
                                    food_req: editMenu(
                                      "breakfast",
                                      i,
                                      index,
                                      e.target.checked
                                    ),
                                  });

                                  // console.log(e.target.checked);
                                }}
                              ></input>{" "}
                              {item}
                            </div>
                          );
                        })}

                        <CreatableSelect
                          className="w-full outline-none"
                          styles={customStyles}
                          closeMenuOnSelect={false}
                          isMulti
                          components={animatedComponents}
                          value={formdata.food}
                          onChange={(e) => {
                            setFoodData({
                              ...fooddata,
                              breakfast: handleFoodDate("breakfast", i, e),
                            });
                          }}
                        />
                      </Typography>
                    </div>

                    <div className="flex gap-y-4 flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-5">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Lunch</span>
                      </div>
                      <img src={lunch} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        {menu?.lunch?.map((item, index) => {
                          return (
                            <div key={index}>
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  setFormData({
                                    ...formdata,
                                    food_req: editMenu(
                                      "lunch",
                                      i,
                                      index,
                                      e.target.checked
                                    ),
                                  });

                                  // console.log(e.target.checked);
                                }}
                              ></input>{" "}
                              {item}
                            </div>
                          );
                        })}
                        <h4 className="capitalize">Lunch</h4>
                        <CreatableSelect
                          className="w-full outline-none"
                          styles={customStyles}
                          closeMenuOnSelect={false}
                          isMulti
                          components={animatedComponents}
                          value={formdata.food}
                          onChange={(e) => {
                            setFoodData({
                              ...fooddata,
                              lunch: handleFoodDate("lunch", i, e),
                            });
                          }}
                        />
                      </Typography>
                    </div>

                    <div className="flex gap-y-4 flex-col w-[30%] hover:shadow-lg transition rounded-sm hover:border-[0.1px] border-[#00000020] p-5">
                      <div className="flex flex-row justify-between">
                        <span className="text-xl font-bold">Dinner</span>
                      </div>
                      <img src={dinner} className="w-[40%] mx-auto"></img>
                      <Typography className="text-justify">
                        {menu?.dinner?.map((item, index) => {
                          return (
                            <div key={index}>
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  setFormData({
                                    ...formdata,
                                    food_req: editMenu(
                                      "dinner",
                                      i,
                                      index,
                                      e.target.checked
                                    ),
                                  });

                                  // console.log(e.target.checked);
                                }}
                              ></input>{" "}
                              {item}
                            </div>
                          );
                        })}
                        <h4 className="capitalize">Dinner</h4>
                        <CreatableSelect
                          className="w-full outline-none"
                          styles={customStyles}
                          closeMenuOnSelect={false}
                          isMulti
                          components={animatedComponents}
                          value={formdata.food}
                          onChange={(e) => {
                            setFoodData({
                              ...fooddata,
                              dinner: handleFoodDate("dinner", i, e),
                            });
                          }}
                        />
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
            onClick={onSubmit}
          >
            Request Event
          </div>
        </div>
      </div>
    </div>
  );
}
