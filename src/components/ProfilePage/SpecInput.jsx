import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ValidateInput from "../Common/ValidateInput";
import "../../assets/styles/SpecInput.scss";

function SpecInput({
  inputList,
  setInputList,
  className,
  placeHolder,
  labelValue,
  type,
  name,
}) {

  const addNewInput = (array) => {
    const newArray = [...array];
    newArray.push({
      id: array.length,
      value: "",
    });
    setInputList(newArray);
  };
  const removeOldInput = (array) => {
    const newArray = [...array];
    newArray.pop();
    setInputList(newArray);
  };
  const handleChangeSpecInput = (e, input) => {
    const { value } = e.target;
    const newInput = {
      id: input.id,
      value: value,
    };
    const newInputList = [...inputList];
    newInputList.splice(input.id, 1, newInput);
    setInputList(newInputList);
    if (!value) e.target.className = "form-control invalid";
    else {
      e.target.className = "form-control valid";
    }
  };

  return (
    <div className="special-input-container">
      {inputList.map((input) => {
        return (
          <div className="special-input" key={input.id}>
            <ValidateInput
              name={name + input.id}
              className={className}
              placeHolder={placeHolder}
              labelValue={labelValue}
              type={type}
              defaultValue={input.value}
              handleChangeInput={(e) => handleChangeSpecInput(e, input)}
            />
            <i
              className="fas fa-plus-circle button-add-input"
              onClick={() => addNewInput(inputList)}
            ></i>
            {inputList.length > 1 && input.id === inputList.length - 1 && (
              <i
                className="fas fa-minus-circle button-remove-input"
                onClick={() => removeOldInput(inputList)}
              ></i>
            )}
          </div>
        );
      })}
    </div>
  );
}
SpecInput.defaultProps = {
  inputList: [],
  className: "form-control",
  setInputList: propTypes.func,
  placeHolder: "placeHolder",
  labelValue: "labelValue",
  type: "text",
};

export default SpecInput;
