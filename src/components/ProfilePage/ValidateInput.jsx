import React, { useState } from "react";

function ValidateInput({
  placeholder,
  labelValue,
  type,
  required,
  handleChangeInput,
}) {
  const [valid, setValid] = useState("form-control");
  //   ? "form-control is-valid" : "form-control is-invalid"

  return (
    <div>
      <label htmlFor={labelValue} className="grey-text">
        {labelValue}
      </label>
      <input
        className={valid}
        onChange={handleChangeInput}
        type={type}
        id={labelValue}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default ValidateInput;
