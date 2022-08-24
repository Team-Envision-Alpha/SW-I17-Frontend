import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
import Button from "@mui/material/Button";

export default function Invitations({
  setUserData,
  userdata,
  setFormData,
  formdata,
  setExtraUsers,
  extrausers,
  toast,
  teams,
  current,
  setCurrent,
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
  function handleNext() {
    if (current < 1) {
      setCurrent(current + 1);
    }
  }
  function handleBack() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
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
              setFormData({ ...formdata, departments: teams });
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
                delete newData.departments;
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
                {formdata.departments && formdata.departments.includes(team) ? (
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      const resp = arrayRemove(formdata.departments, team);
                      if (resp !== "empty") {
                        setFormData({
                          ...formdata,
                          departments: resp,
                        });
                      } else {
                        setFormData((formdata) => {
                          const newData = { ...formdata };
                          delete newData.departments;
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
                      if (formdata.departments) {
                        setFormData({
                          ...formdata,
                          departments: [...formdata.departments, team],
                        });
                      } else {
                        setFormData({
                          ...formdata,
                          departments: [team],
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
