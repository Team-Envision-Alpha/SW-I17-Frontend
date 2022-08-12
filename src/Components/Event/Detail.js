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
  return (
    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10">
      <div className="w-full h-full py-5 mt-5 bg-white px-10">
        <p className="text-center my-10 text-lg font-bold">
          Fill out the Following Details
        </p>
        <div className="flex flex-col gap-4 mb-5">
          <h4>Event Name</h4>
          <input
            type="text"
            className="w-full p-4 outline-none"
            style={{
              color: "#818181",
              background: "#F6F5F6",
              border: "2px solid grey",
              borderRadius: "8px",
            }}
            value={formdata.name ? formdata.name : ""}
            placeholder="Text here"
            name="name"
            onChange={(e) => {
              setFormData({
                ...formdata,
                name: e.target.value,
                organiser: user.id,
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <h4>Event Description</h4>
          <textarea
            type="text"
            className="w-full p-4 outline-none"
            style={{
              color: "#818181",
              background: "#F6F5F6",
              border: "2px solid grey",
              borderRadius: "8px",
            }}
            placeholder="Text here"
            value={formdata.description ? formdata.description : ""}
            rows={6}
            name="description"
            onChange={(e) => {
              setFormData({ ...formdata, description: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h4>Organiser ID</h4>
          <input
            type="text"
            className="w-full p-4 outline-none"
            style={{
              color: "#818181",
              background: "#F6F5F6",
              border: "2px solid grey",
              borderRadius: "8px",
            }}
            value={user.id}
            name="organiser"
            placeholder="Text here"
            readOnly
            // onLoad={(e) => {
            //   setFormData({ ...formdata,  });
            // }}
          />
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
