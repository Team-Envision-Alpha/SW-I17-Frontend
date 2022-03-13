import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import FacebookLogin from "react-facebook-login";

export default function FB() {
  return (
    <div>
      <h1 className="text-center">FB</h1>
      <FacebookLogin
        appId="647567206327849"
        autoLoad={false}
        fields="name,email,picture"
        scope="pages_show_list,read_page_mailboxes,pages_messaging,pages_read_engagement, pages_manage_metadata,pages_manage_posts,pages_read_engagement, public_profile"
        callback={(response)=>{
          console.log(response)
        }}
      />
    </div>
  );
}
