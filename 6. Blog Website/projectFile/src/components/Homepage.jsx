import React from "react";

import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import { AiFillGoogleCircle } from "react-icons/ai";

import "./Homepage.css";

function Homepage() {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();

  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="homepage">
          <div className="login">
            <div className="hi-icon">
              <img src="./images/Hi.gif" alt="" />
            </div>
            <div className="title">
              Welcome to
              <br />
              the <span>Blog Website</span>
            </div>
            <p className="description">
              Login to be informed about new news and <br />
              follow your favorite news
            </p>
            <GoogleLogin
              clientId="962637210865-174lnm5uf4l1qos6p35rn5dtkqg7ni9d.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiFillGoogleCircle className="text" /> Login with Google
                </button>
              )}
              onSuccess={login}
              onFailure={login}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Homepage;
