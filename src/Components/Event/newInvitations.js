/* eslint-disable no-unused-vars */
import * as XLSX from "xlsx";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import { v4 } from "uuid";

export default function Invitations({
  setUserData,
  userdata,
  setFormData,
  formdata,
  setExtraUsers,
  extrausers,
  current,
  setCurrent,
  event,
}) {
  function arrayRemove(arr, value) {
    if (arr.length === 1) {
      return "empty";
    } else {
      return arr.filter(function (ele) {
        return ele !== value;
      });
    }
  }
  // console.log(event.id);
  function readAppendFile(f) {
    // console.log(f);
    // var name = f.name;
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
      var data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      // console.log("Data>>>" + data); // shows that excel data is read
      //   console.log(convertToJson(data));
      //   data = convertToJson(data);
      //   console.log(data);
      const check = checkCSV(convertToJson(data));
      if (check) setExtraUsers([...extrausers, ...convertToJson(data)]);
      else {
        toast.error("Check your data");
      }
      // shows data in json format
    };
    reader.readAsBinaryString(f);
  }
  function checkCSV(data) {
    for (var i = 0; i < data.length; i++) {
      if (
        data[i].name === undefined ||
        data[i].email === undefined ||
        data[i].phone === undefined ||
        data[i].id === undefined
      ) {
        return false;
      }
      return true;
    }
  }
  function convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        if (obj[headers[j]] === "id") {
          obj[headers[j]] = currentline[j];
        } else {
          obj[headers[j]] = currentline[j];
          obj["id"] = v4();
        }
      }

      result.push(obj);
    }

    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }

  function handleBack() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const INVITE_MUTATION = gql`
    mutation inviteUsers(
      $eventId: ID!
      $users: [InviteUser]
      $departments: [String]
    ) {
      inviteUsers(eventId: $eventId, users: $users, departments: $departments)
    }
  `;

  const EVENT_MUTATION = gql`
    mutation UpdateEventStatus($updateEventStatusId: ID!, $status: String!) {
      updateEventStatus(id: $updateEventStatusId, status: $status)
    }
  `;

  const [update, ldg] = useMutation(EVENT_MUTATION, {
    onError: (err) => {
      console.log(err);
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onCompleted: (data) => {
      console.log(data);
      // setStatus(true);
      // setEventId(data.createEvent.id);
      // setVenueId(data.requestVenue.event_id);
      toast.success(`Event Request Complete!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setFormData({});
    },
    variables: {
      updateEventStatusId: event.id,
      status: "complete",
    },
  });

  const [invites, loading] = useMutation(INVITE_MUTATION, {
    onError: (err) => {
      console.log(err);
      toast.error("Error: Invites Not Sent!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onCompleted: (data) => {
      console.log(data);
      // setStatus(true);
      // setEventId(data.createEvent.id);
      // setVenueId(data.requestVenue.event_id);
      toast.success(`Invites Sent successfully!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      update();
      setFormData({});
    },
    variables: formdata,
  });

  const handleInvites = async (e) => {
    e.preventDefault();
    setFormData({
      ...formdata,
      event_id: event.id,
      users:
        typeof formdata.users != "string"
          ? JSON.stringify(formdata.users)
          : formdata.users,
    });
    console.log(formdata);
    invites();
    // // console.log(event.id);
  };

  return (
    <div className="w-full h-full py-5 mt-5 bg-white px-10">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <p className="text-center my-10 text-lg font-bold">
        Fill out the Following Details
      </p>

      <div>
        <h3 className="mx-auto text-center mb-5">Add Users to Invite List</h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="w-[full] p-4 outline-none"
              style={{
                color: "#818181",
                background: "#F6F5F6",
                border: "2px solid grey",
                borderRadius: "8px",
              }}
              placeholder="Name"
              name="name"
              onChange={(e) => {
                setUserData({ ...userdata, name: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              className="w-[full] p-4 outline-none"
              style={{
                color: "#818181",
                background: "#F6F5F6",
                border: "2px solid grey",
                borderRadius: "8px",
              }}
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setUserData({ ...userdata, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex flex-col gap-4">
            <input
              type="tel"
              className="w-[full] p-4 outline-none"
              style={{
                color: "#818181",
                background: "#F6F5F6",
                border: "2px solid grey",
                borderRadius: "8px",
              }}
              placeholder="Phone"
              name="phone"
              onChange={(e) => {
                setUserData({ ...userdata, phone: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="w-[full] p-4 outline-none text-center rounded-[8px] bg-black text-white cursor-pointer"
              onClick={() => {
                if (userdata.name && userdata.email && userdata.phone) {
                  setExtraUsers([...extrausers, userdata]);
                  setFormData({
                    ...formdata,
                    users: extrausers,
                  });
                }
                // console.log(extrausers);
              }}
            >
              Submit
            </div>
          </div>
        </div>
        <div className=" mt-4 flex flex-col justify-center text-center object-center mx-auto place-content-center">
          Upload file for invite list<br></br>
          <input
            type="file"
            className="mt-8 block w-full text-sm text-slate-500 place-content-center ml-[35%]
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-blue-50 file:text-blue-700
hover:file:bg-violet-100"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel "
            onChange={(e) => {
              // setUserFile(e.target.files[0]);
              // console.log(readFile(e.target.files[0]));
              readAppendFile(e.target.files[0]);
              // setExtraUsers([
              //   ...extrausers,
              //   readFile(e.target.files[0]),
              // ]);
              // // console.log(e.target.files[0]);
            }}
          />
          {/* <div className="mt-8">
            <Button variant="outlined" color="primary">
              Add to Event List
            </Button>
          </div> */}
        </div>
        <hr className="mt-5"></hr>
        <table className="w-full mt-5 ">
          <thead>
            <tr
              className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
              style={{ background: "rgba(0, 0, 0, 0.05)" }}
            >
              <th className="py-3 border-[#B9B9B9] border-2 ">Name</th>
              <th className="py-3  border-[#B9B9B9] border-2">Email</th>
              <th className="py-3  border-[#B9B9B9] border-2">Phone</th>
              <th className="py-3 border-[#B9B9B9] border-2">Modify</th>
            </tr>
          </thead>
          <tbody
            className=" max-h-[40vh] overflow-scroll"
            style={{ maxHeight: "30vh", overflowY: "scroll" }}
          >
            {extrausers &&
              extrausers.map((user, idx) => {
                return (
                  <tr className="text-[#000000] odd:bg-white even:bg-slate-100">
                    <td
                      className="text-center py-3 border-[#B9B9B9] border-2 
          text-md"
                    >
                      <div>
                        <p>{user.name}</p>
                      </div>
                    </td>
                    <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                      <div>
                        <p>{user.email}</p>
                      </div>
                    </td>
                    <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                      <div>
                        <p>{user.phone}</p>
                      </div>
                    </td>
                    <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                      <div>
                        <p
                          className="text-[#874439] font-bold cursor-pointer hover:underline transition"
                          onClick={() => {
                            const resp = arrayRemove(extrausers, user);
                            if (resp !== "empty") {
                              setExtraUsers(resp);
                              // setFormData({
                              //   ...formdata,
                              //   departmentInvited: resp,
                              // });
                            } else {
                              // setFormData((formdata) => {
                              //   const newData = { ...formdata };
                              //   delete newData.departmentInvited;
                              //   return newData;
                              // });
                              setExtraUsers([]);
                            }
                          }}
                        >
                          Delete
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row mt-12 pb-10 justify-between">
        <div className="font-bold py-3 cursor-pointer" onClick={handleBack}>
          Go back
        </div>
        <div
          className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer"
          onClick={handleInvites}
        >
          Send Invites
        </div>
      </div>
      {/* <div className="flex flex-row mt-12 pb-10 justify-between">
        <div
          className="font-bold py-3 cursor-pointer"
          onClick={handleBack}
        >
          Go back
        </div>
        <div
          className=" bg-green-700 text-white px-10 py-3 rounded-lg cursor-pointer"
          onClick={handleNext}
        >
          Next
        </div>
      </div> */}
    </div>
  );
}
