import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import React, { useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import "../assets/styles/ProfilePage.scss";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SpecInput from "../components/ProfilePage/SpecInput";
import ValidateInput from "../components/ProfilePage/ValidateInput";

function ProfilePage() {
  const [phone, setPhone] = useState();
  const [inputList, setInputList] = useState([
    {
      id: 0,
      value: "",
    },
  ]);

  console.log(inputList);
  const options = [
    { value: "vn", label: "Việt Nam" },
    { value: "us", label: "Mĩ" },
    { value: "el", label: "Anh" },
  ];

  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div>
      <MDBContainer>
        <p className="header">STEP 1: COMPANY INFORMATION</p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.
          Aperiam, rerum eligendi. Exercitationem illum qui officia, repellat a
          magnam quidem. Culpa amet praesentium ullam laboriosam at laudantium,
          magnam aperiam?
        </p>
        <form onSubmit={() => console.log("Submit")}>
          <MDBRow>
            <MDBCol md="6" xl="6">
              <ValidateInput
                placeholder="Entity Legal Name"
                labelValue="Entity Legal Name"
                type="text"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <ValidateInput
                placeholder="DBA"
                labelValue="DBA"
                type="text"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <ValidateInput
                placeholder="Tax ID"
                labelValue="Tax ID"
                type="text"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <ValidateInput
                placeholder="http://"
                labelValue="Tax ID"
                valueDefault="http://"
                type="url"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <label>Regulatory AML</label>
              <Select options={options} required />
              <br />
              <label>Regulatory Securities</label>
              <Select options={options} required />
              <br />
              <SpecInput inputList={inputList} setInputList={setInputList} />
            </MDBCol>
            <MDBCol md="6">
              <label>Company Phone number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <br />
              <ValidateInput
                placeholder="Company E-mail"
                labelValue="Company E-mail"
                type="email"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <br />
              <strong>
                <h2>ADDRESS</h2>
              </strong>
              <br />
              <label>Country</label>
              <Select options={options} required />
              <br />
              <label>Region</label>
              <Select options={options} required />
              <br />
              <ValidateInput
                placeholder="Ha Noi"
                labelValue="City"
                type="text"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <ValidateInput
                placeholder="Street, ..."
                labelValue="Address Line 1 (required)"
                type="text"
                required={true}
                handleChangeInput={(e) => handleInput(e)}
              />
              <ValidateInput
                placeholder="Street, ..."
                labelValue="Address Line 2"
                type="text"
                required={false}
                handleChangeInput={(e) => handleInput(e)}
              />
              <MDBBtn className="submit-button" type="submit">
                Submit
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
}

export default ProfilePage;
