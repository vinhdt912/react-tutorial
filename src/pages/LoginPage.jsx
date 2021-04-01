import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBBtn, MDBCol, MDBContainer, MDBInput } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";
import "../assets/styles/LoginPage.scss";
import { post } from "../services/api-service";

const URL = "https://api.dev1.bitwage.com/user/auth/login";
const myStorage = window.localStorage;

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const actionLogin = (user) => {
    const action = login(user);
    dispatch(action);
  };

  // Check validate email & password
  const handleInputEmail = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(e.target.value);
    setConfirmEmail(re.test(String(e.target.value).toLowerCase()));
  };
  const handleInputPassWord = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) setConfirmPassWord(false);
    else setConfirmPassWord(true);
  };

  // Submit Form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const action = await post(URL, {
      username: email,
      password: password,
      remember_me: remember,
      product: "company",
    });
    switch (action.type) {
      case "SUCCESS": {
        const data = {
          username: email,
          password: password,
          remember_me: remember,
          product: "company",
          id: action.payload.uuid,
          phone_number: action.payload.phone_number,
        };
        setToken(true);
        actionLogin(data);
        myStorage.setItem(`${data.username}`, JSON.stringify(action.payload));
        console.log(action.payload);
      }
      case "ERROR": {
        setError(action.payload);
      }
    }
    setLoading(false);
  };
  return (
    <MDBContainer className="login-container">
      <MDBCol md="6">
        <form onSubmit={(e) => handleSubmit(e)}>
          <p className="login-title">Sign in</p>
          <MDBInput
            onChange={(e) => handleInputEmail(e)}
            type="email"
            label="Email"
            icon="envelope"
            disabled={loading ? true : false}
            required
          />
          <p
            className={
              email === ""
                ? "email-confirm"
                : confirmEmail
                ? "email-confirm"
                : "email-error"
            }
          >
            Invalid email
          </p>

          <MDBInput
            onChange={(e) => handleInputPassWord(e)}
            type="password"
            label="Password"
            icon="lock"
            disabled={loading ? true : false}
            required
          />
          <p
            className={
              password === ""
                ? "email-confirm"
                : confirmPassword
                ? "email-confirm"
                : "email-error"
            }
          >
            Password is not 8 characters
          </p>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultUnchecked"
              onChange={(e) => setRemember(e.target.value)}
              defaultChecked={false}
            />
            <label className="custom-control-label" htmlFor="defaultUnchecked">
              Remember
            </label>
          </div>
          <MDBBtn
            className="login-submit"
            color="indigo"
            type="submit"
            disabled={
              confirmPassword && confirmEmail ? (loading ? true : false) : true
            }
          >
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
          </MDBBtn>
          <p className="login-error">{error}</p>
        </form>
      </MDBCol>
    </MDBContainer>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;
