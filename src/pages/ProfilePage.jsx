import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "../assets/styles/ProfilePage.scss";
import { countries, regions, regulatoryAML, regulatorySec } from "../components/Common/data";
import ValidateInput from "../components/Common/ValidateInput";
import SelectOption from "../components/ProfilePage/SelectOption";
import SpecInput from "../components/ProfilePage/SpecInput";
import { putAction } from "../services/api-service";
import confirmEmail from "../utils/ConfirmEmail";

function ProfilePage() {
  const [districts, setDistricts] = useState([]);

  // const dispatch = useDispatch();
  // const updateProfileAction = (data) => {
  //   const action = uploadProfileAction(data);
  //   dispatch(action);
  // };

  const [data, setData] = useState({
    entityLegalName: "",
    dba: "",
    tax_id: "",
    website_url: "",
    regulatory_aml: "",
    regulatory_securities: "",
    beneficial: [
      {
        id: 0,
        value: "",
      },
    ],
    phone_number: "",
    email: "",
    country: "",
    state: "",
    city: "",
    street_address: "",
    street_address_2: "",
  });

  useEffect(() => {
    regions.map((region) => {
      if (region.title === data.country) {
        setDistricts(region.labels);
      }
      return 0;
    });
  }, [data.country]);

  const confirmBeneficial = (beneficial) => {
    for (const ben of beneficial) {
      if (ben.value === "") return false;
    }
    return true;
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setData({ ...data, [name]: value });
      event.target.className = "form-control invalid";
    } else {
      if (name === "email") {
        if (confirmEmail(value)) {
          setData({ ...data, [name]: value });
          event.target.className = "form-control valid";
        } else {
          setData({ ...data, [name]: value });
          event.target.className = "form-control invalid";
        }
      } else {
        setData({ ...data, [name]: value });
        event.target.className = "form-control valid";
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "facebook.com";
    const response = await putAction(url, data);
    localStorage.setItem("1", JSON.stringify(data));
    // updateProfileAction(data);
    console.log(response);
  };

  return (
    <div>
      <MDBContainer>
        <form className="profile-container" onSubmit={handleSubmit}>
          <p className="header">STEP 1: COMPANY INFORMATION</p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Aperiam, rerum eligendi. Exercitationem illum qui officia, repellat a magnam
            quidem. Culpa amet praesentium ullam laboriosam at laudantium, magnam aperiam?
          </p>
          <MDBRow>
            <MDBCol md="6">
              <ValidateInput placeHolder="Entity Legal Name" labelValue="Entity Legal Name" handleChangeInput={handleInput} name="entityLegalName" />
              <ValidateInput placeHolder="DBA" labelValue="DBA" handleChangeInput={handleInput} name="dba" />
              <ValidateInput placeHolder="Tax ID" labelValue="Tax ID" handleChangeInput={handleInput} name="tax_id" />
              <ValidateInput placeHolder="http://" labelValue="Website" defaultValue="http://" type="url" name="website_url" handleChangeInput={handleInput} />

              <SelectOption
                labelValue="Regulatory AML"
                name="regulatory_aml"
                data={regulatoryAML}
                off={data.AML ? true : false}
                handleChangeInput={handleInput}
              />

              <br />
              <SelectOption
                labelValue="Regulatory Securities"
                name="regulatory_securities"
                data={regulatorySec}
                off={data.securities ? true : false}
                handleChangeInput={handleInput}
              />

              <br />
              <SpecInput
                inputList={data.beneficial}
                setInputList={(newArray) => {
                  // setInputList(inputList);
                  setData({ ...data, beneficial: newArray });
                }}
                placeHolder="Beneficial"
                labelValue="Beneficial"
                name="beneficial"
              />
            </MDBCol>
            <MDBCol md="6">
              <label htmlFor="phone-number" className="grey-text">
                Company Phone number
              </label>
              <PhoneInput country={"vn"} name="phone_number" id="phone-number" onChange={(phone) => setData({ ...data, phone_number: phone })} />

              <br />
              <ValidateInput
                placeHolder="Company E-mail"
                labelValue="Company E-mail"
                type="email"
                name="email"
                handleChangeInput={(event) => handleInput(event)}
              />

              <br />
              <strong>
                <h2>ADDRESS</h2>
              </strong>

              <br />
              <SelectOption labelValue="Country" name="country" data={countries} off={data.country ? true : false} handleChangeInput={handleInput} />

              <br />
              <SelectOption
                labelValue="Region"
                name="state"
                data={districts}
                off={data.region ? true : false}
                disabled={data.country ? false : true}
                handleChangeInput={handleInput}
              />

              <br />
              <ValidateInput name="city" placeHolder="Ha Noi" labelValue="City" type="text" handleChangeInput={(event) => handleInput(event)} />
              <ValidateInput
                name="street_address"
                placeHolder="Street, ..."
                labelValue="Address Line 1 (required)"
                type="text"
                handleChangeInput={(event) => handleInput(event)}
              />
              <ValidateInput
                name="street_address_2"
                placeHolder="Street, ..."
                labelValue="Address Line 2"
                type="text"
                required={false}
                handleChangeInput={(event) => handleInput(event)}
              />
              <MDBBtn
                className="submit-button"
                type="submit"
                disabled={
                  data.entityLegalName &&
                  data.dba &&
                  data.tax_id &&
                  data.website_url &&
                  data.regulatory_aml &&
                  data.regulatory_securities &&
                  confirmBeneficial(data.beneficial) &&
                  data.phone_number &&
                  confirmEmail(data.email) &&
                  data.country &&
                  data.state &&
                  data.city &&
                  data.street_address
                    ? false
                    : true
                }
              >
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
