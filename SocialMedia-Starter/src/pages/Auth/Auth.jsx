import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";

export default function Auth() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.authReducer.loding);
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loding);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    c_password: "",
    username: "",
  });
  const [confirmPass, setConfirmpass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handileSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.c_password
        ? dispatch(signUp(data))
        : setConfirmpass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const reSetForm = () => {
    setConfirmpass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      c_password: "",
      username: "",
    });
  };

  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="info-form auth-form" onSubmit={handileSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First name"
                className="info-input"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last name"
                className="info-input"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="User name"
              name="username"
              className="info-input"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="info-input"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm-Password"
                name="c_password"
                className="info-input"
                value={data.c_password}
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignself: "flex-end",
              margin: "5px",
            }}
          >
            {" "}
            * Confirm password is not same{" "}
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((previesValue) => !previesValue);
                reSetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account Sign up "}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loding}>
            {loding ? "loading..." : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
