import React, { useState } from "react";

function ValidateInput({
  placeholder,
  labelValue,
  type,
  required,
  handleChangeInput,
  valueDefault,
}) {
  //   ? "form-control is-valid" : "form-control is-invalid"

  return (
    <div>
      <label htmlFor={labelValue} className="grey-text">
        {labelValue}
      </label>
      <input
        className="form-control"
        onChange={handleChangeInput}
        type={type}
        id={labelValue}
        placeholder={placeholder}
        required={required}
        defaultValue={valueDefault}
      />
      <br />
    </div>
  );
}

export default ValidateInput;
