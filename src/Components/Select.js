/* eslint-disable no-unused-vars */

import Select from "react-select";
import React from "react";
export default function select({
  data,
  setFormData,
  formdata,
  name,
  dataobj,
  value,
}) {
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
  if (data) {
    var formoptions = data.map((data) => {
      return {
        label: data,
        value: data,
      };
    });
  } else {
    formoptions = dataobj.map((data) => {
      return {
        label: `${data.name} - ${data.city} (${data.state})`,
        value: data.id,
      };
    });
  }

  function getName(name, formdata) {
    console.log(name,formdata,dataobj)
    if (dataobj) {
      return formoptions.find((o) => o.value === formdata[name]);
    } else {
      return {label:formdata[name], value:formdata[name]};
    }
  }

  return (
    <Select
      classNamePrefix="select"
      isSearchable="true"
      isClearable="true"
      name={name}
      styles={customStyles}
      options={formoptions}
      value={getName(name, formdata)}
      onChange={(e) => {
        if (e.value) {
          setFormData({ ...formdata, [name]: e.value });
        } else {
          setFormData({ ...formdata, [name]: "" });
        }
      }}
    />
  );
}
