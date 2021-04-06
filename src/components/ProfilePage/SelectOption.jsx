import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function SelectOption({
  labelValue,
  required,
  name,
  className,
  disabled,
  data,
  off,
  handleChangeInput,
}) {
  return (
    <div>
      <label htmlFor={name} className="grey-text">
        {labelValue}
      </label>
      <select
        onChange={handleChangeInput}
        id={name}
        name={name}
        className={className}
        disabled={disabled}
        required={required}
      >
        <option disabled={off}>Choose your option</option>
        {data.map((value) => (
          <option key={value.id}>{value.label}</option>
        ))}
      </select>
    </div>
  );
}

SelectOption.defaultProps = {
  className: "browser-default custom-select",
  placeHolder: "placeholder",
  labelValue: "label",
  required: true,
  handleChangeInput: propTypes.func,
  name: "",
  disabled: false,
  data: [],
  off: false,
};

export default SelectOption;
