import React, { useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import { gapi } from "gapi-script";

import "./Navbar.css";

import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";

function Navbar() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "962637210865-174lnm5uf4l1qos6p35rn5dtkqg7ni9d.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="logo">BLOG WEBSITE</div>
        {isSignedIn && (
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>
              <AiOutlineSearch />
            </button>
          </div>
        )}
        {isSignedIn && (
          <div className="info">
            <div className="profile">
              <img src={userData?.imageUrl} alt={userData?.name} />
            </div>
            <GoogleLogout
              clientId="962637210865-174lnm5uf4l1qos6p35rn5dtkqg7ni9d.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiOutlineLogout /> Logout
                </button>
              )}
              onLogoutSuccess={logout}
            />
          </div>
        )}
      </div>
      {isSignedIn ? (
        <div className="mobile-navbar">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleClick}>
            <AiOutlineSearch />
          </button>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Navbar;
