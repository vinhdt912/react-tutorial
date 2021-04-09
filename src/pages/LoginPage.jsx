import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBBtn, MDBCol, MDBContainer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/LoginPage.scss";
import ValidateInput from "../components/Common/ValidateInput";
import { loginAction } from "../redux/actions/auth";
import configStore from "../redux/configStore";
import confirmEmail from "../utils/ConfirmEmail";

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  // Check validate email & password
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    confirmEmail(e.target.value) ? (e.target.className = "form-control is-valid") : (e.target.className = "form-control is-invalid");
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setConfirmPassWord(false);
      e.target.className = "form-control is-invalid";
    } else {
      setConfirmPassWord(true);
      e.target.className = "form-control is-valid";
    }
  };

  // Submit Form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formValues = {
      username: email,
      password: password,
      product: "company",
      remember_me: remember,
    };
    dispatch(loginAction(formValues));

    // const response = await postServiceAction(apis.API_LOGIN, formValues);
    // console.log(response);

    setLoading(false);
  };

  return (
    <MDBContainer className="login-container">
      <MDBCol md="6">
        <form noValidate onSubmit={handleSubmit}>
          <p className="login-title">Sign in</p>

          <ValidateInput
            handleChangeInput={handleChangeEmail}
            labelValue="Email"
            type="email"
            id="email"
            className="form-control"
            placeHolder="email"
            disabled={loading ? true : false}
            required
          />

          <br />
          <ValidateInput
            handleChangeInput={handleChangePassword}
            labelValue="Password"
            type="password"
            id="password"
            className="form-control"
            placeHolder="password has at least 8 characters"
            disabled={loading ? true : false}
            required
          />

          <br />
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
          <MDBBtn className="login-submit" color="indigo" type="submit" disabled={confirmPassword && confirmEmail(email) ? (loading ? true : false) : true}>
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
