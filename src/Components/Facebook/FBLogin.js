import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";

import FacebookLogin from "react-facebook-login";

export default function FB({ setIsLoggedIn }) {
  const fbuserid = localStorage.getItem("fbuserid");
  const fbaccesstoken = localStorage.getItem("fbaccesstoken");
  const fbpageid = localStorage.getItem("fbpageid");

  const [update, setupdate] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/${fbuserid}/accounts?fields=name,access_token&access_token=${fbaccesstoken}`
      )
      .then((response) => {
        if (Array.isArray(response.data.data) && response.data.data.length) {
          // Setuseraccesstoken(response.data.data[0].access_token);
          console.log(response);
          localStorage.setItem(
            "fbaccesstoken",
            response.data.data[0].access_token
          );
          localStorage.setItem("fbpageid", response.data.data[0].id);
          console.log(fbpageid);
        } else {
          alert("No page found linked to this account");
          window.location.reload();
        }
      });
    // eslint-disable-next-line
  }, [update]);

  return (
    <div>
      <h1 className="text-center">FB</h1>
      <FacebookLogin
        appId="647567206327849"
        autoLoad={false}
        fields="name,email,picture"
        scope="pages_show_list,read_page_mailboxes,pages_messaging,pages_read_engagement, pages_manage_metadata,pages_manage_posts,pages_read_engagement, public_profile"
        callback={(response) => {
          console.log(response);
          localStorage.setItem("fbaccesstoken", response.accessToken);
          localStorage.setItem("fbuserid", response.userID);
          localStorage.setItem("fbuser", response);
          setupdate(!update);
          if (response.userID) {
            console.log("Logged in as ");
            setIsLoggedIn(true);
          }
        }}
      />
    </div>
  );
}
