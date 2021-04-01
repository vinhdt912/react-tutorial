import React, { useState } from "react";

function App() {
  function validationForm() {
    const re = /\S+@\S+\.\S+/;
    //Kiểm tra email
    if (re.test(email)) return false;
    return true;
  }
  const [email, setEmail] = useState({});

  const changeInputValue = (event) => setEmail(event.target.value);
  return (
    <div>
      <input type="email" onChange={(event) => changeInputValue(event)} />
    </div>
  );
}

export default App;
