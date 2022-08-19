/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FacebookLogin from 'react-facebook-login';


export default function Login() {
    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <div>
            <h1>Facebook Login</h1>
            <FacebookLogin
                appId="2075260336175600"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,email,pages_read_engagement,pages_manage_posts, pages_read_user_content,publish_video"
                onClick={(componentClicked) => {
                    console.log(componentClicked);
                }}
                callback={responseFacebook} />
        </div>
    );
}