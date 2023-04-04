import axios from "axios";
import React from "react";
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from "react-redux";
import {history} from '../../index';
import { getProfileApi } from "../../redux/reducers/userReducer";

export default function LoginFacebook() {

  const dispatch = useDispatch();

    const responseFacebook = (response) => {
        //console.log(response);
        axios({
            url:'https://shop.cyberlearn.vn/api/Users/facebooklogin',
            method:'POST',
            data: {
                facebookToken: response.accessToken
            }
        }).then(res => {

            // Save in localstorage
            localStorage.setItem('accessToken', res.data.content.accessToken);

            // Dispatch action getProfile after logging in successfully
            dispatch(getProfileApi());

            // Move to home after logging in successfully
            history.push("/home");
        });
    }

  return (
    <div>
      <FacebookLogin
        appId="433695835497368"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}
