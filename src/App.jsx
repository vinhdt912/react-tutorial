import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [token, setToken] = useState();
  if (token) {
    return <LoginPage setToken={setToken} />;
  }
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
