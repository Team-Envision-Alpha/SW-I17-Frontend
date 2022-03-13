import React from "react";
import LatestPost from "./LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
// import "../components/Posts/posts.css";
// import LatestMessage from "../components/Posts/LatestMessage";

import axios from "axios";

import { useEffect, useState } from "react";
import FbLogin from "./FBLogin";

function Post() {
  const accessid = localStorage.getItem("fbaccesstoken");

  //   const userid = useRecoilValue(uid);
  //   const history = useHistory();
  const page_id = localStorage.getItem("fbpageid");
  // const page_id = useRecoilValue(pageid);
  //   const [item, setItem] = useState("");
  //   const [comments, setcomments] = useState([]);
  //   const [isloading, setisloading] = useState(true);
  //   const [textInput, setTextInput] = React.useState("");

  const [isLoggedin, setisLoggedin] = useState(false);

  //   const [selectpostcomments, setSelectpostcomments] = useState(null);
  const [selectpostid, setSelectpostid] = useState(null);
  if (isLoggedin) {
    const fbuser = localStorage.getItem("fbuser");
  }

  // console.log(posts);

  // const a = async () => {
  //   const resp = await axios.get(
  //     `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
  //   )
  //   console.log(resp);
  //   console.log("dnbsjhv")
  // };

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
      )
      .then((response) => {
        // window.location.reload();
        console.log("Eureka Eureka");
        // setisloading(false);
        // console.log(response.data.data);
        // setPosts(response.data.data);
      })
      .catch((err) => {
        // window.location.reload();
        if (err) {
          localStorage.removeItem("fbaccesstoken");
          localStorage.removeItem("fbpageid");
          localStorage.removeItem("fbuserid");
        }
      });
  }, []);

  return !accessid || isLoggedin == false ? (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <FbLogin />
    </div>
  ) : (
    <>
      <div>
        Logged in as <img src={fbuser.picture.data.url}></img>
        {fbuser.name}
      </div>
      <LatestPost
        setisLoggedin={setisLoggedin}
        selectedpostcomments={selectpostcomments}
        setselectedpostcomments={setSelectpostcomments}
        setselectedpostid={setSelectpostid}
        selectedpostid={selectpostid}
      />
    </>
  );
}

export default Post;
