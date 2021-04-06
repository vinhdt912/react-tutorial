import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "../../assets/styles/ValidateInput.scss";

function ValidateInput({
  placeHolder,
  labelValue,
  type,
  required,
  handleChangeInput,
  defaultValue,
  name,
  className,
  disabled,
}) {
  return (
    <div>
      <label htmlFor={name} className="grey-text">
        {labelValue}
      </label>
      <input
        defaultValue={defaultValue}
        onChange={handleChangeInput}
        type={type}
        id={name}
        name={name}
        className={className}
        placeholder={placeHolder}
        disabled={disabled}
        required={required}
      />
      <br />
    </div>
  );
}

ValidateInput.defaultProps = {
  className: "form-control",
  placeHolder: "placeholder",
  labelValue: "label",
  type: "text",
  required: true,
  handleChangeInput: propTypes.func,
  defaultValue: "",
  name: "",
  disabled: false,
};

export default ValidateInput;
