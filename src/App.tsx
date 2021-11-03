import React from "react";

import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="initial">
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default App;
