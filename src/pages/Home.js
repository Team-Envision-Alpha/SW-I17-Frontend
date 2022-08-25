import Segment from "../Components/Dashboard/Segment";
import Modal from "../Components/Detailmodal";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  console.log(user);
  return (
    <div>
      <Modal setIsOpen={setShow} isOpen={show} />
      <Segment
        color={"#231f30"}
        name={"Invited Events"}
        textcolor="white"
        setShow={setShow}
        user={user}
      />
    </div>
  );
}
