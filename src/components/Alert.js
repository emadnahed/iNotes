import React, { useContext } from "react";
import alertContext from "../context/alerts/alertContext";

// Types of alerts: primary, secondary, success, danger, warning, info, light, dark

const Alert = () => {
  const { alert } = useContext(alertContext);
  // const word = alert.type[0].toUpperCase() + alert.type[1,-1]
  let alertType;
  function name(params) {
    if(params === 'success'){
      return 'Success: ';}
     else if (params === 'danger') {
      alertType = 'Error: '}
      else if (params === 'info') {
        alertType = 'Information: '}
      else if (params === 'warning') {
          alertType = 'Important: '}
      return alertType
  }

  return (
    <div className={`alert alert-${alert.type}`} role="alert">
      <strong>{name(alert.type)} </strong> {alert.message}
    </div>
  );
};

export default Alert;
