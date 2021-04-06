import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBBtn, MDBCol, MDBContainer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/userAction";
import "../assets/styles/LoginPage.scss";
import ValidateInput from "../components/Common/ValidateInput";
import { postAction } from "../services/api-service";
import confirmEmail from "../utils/ConfirmEmail";

const URL = "https://api.dev1.bitwage.com/user/auth/login";

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const actionLogin = (user) => {
    const action = loginAction(user);
    dispatch(action);
  };

  // Check validate email & password
  const handleChangeEmail = (e) => {
    confirmEmail(e.target.value) && setEmail(e.target.value);
    email
      ? (e.target.className = "form-control is-valid")
      : (e.target.className = "form-control is-invalid");
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
    const response = await postAction(URL, {
      username: email,
      password: password,
      remember_me: remember,
      product: "company",
    });
    if (typeof response === "string") {
      setError(response);
    } else {
      setToken(true);
      actionLogin(response);
      localStorage.setItem(
        `${response.username}, ${response.password}`,
        JSON.stringify(response)
      );
    }
    setLoading(false);
  };
  return (
    <MDBContainer className="login-container">
      <MDBCol md="6">
        <form noValidate onSubmit={(e) => handleSubmit(e)}>
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
