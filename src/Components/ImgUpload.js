import React from "react";

const ImgUpload = () => {
  return (
    <>
      <div>
        <form action="/" className="flex gap-10 my-20">
          <input type="file" name="file" id="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default ImgUpload;
