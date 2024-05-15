import React, { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props) => {
  //   State and methods
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    console.log("showalert working.....")
    setAlert(message, type);
    setTimeout(() => {
      setAlert('');
    }, 5000);
  };

  return <alertContext.Provider value={{ alert, showAlert }}>{props.children}</alertContext.Provider>;
};

export default AlertState;
