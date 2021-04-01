import React from "react";
import "../../assets/styles/ProfilePage.scss";
import ValidateInput from "./ValidateInput";

function SpecInput({ inputList, setInputList }) {
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
  return (
    <div className="beneficial-container">
      {inputList.map((input) => {
        return (
          <div className="beneficial-input" key={input.id}>
            <ValidateInput
              placeholder="Beneficial"
              labelValue="Beneficial"
              type="text"
              required={true}
              valueDefault={input.value}
              handleChangeInput={(e) => {
                const newInput = {
                  id: input.id,
                  value: e.target.value,
                };
                const newInputList = [...inputList];
                newInputList.splice(input.id, 1, newInput);
                setInputList(newInputList);
              }}
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

export default SpecInput;
