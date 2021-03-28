import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arrow = ({ icon, arrowClickHandler }) => {
  return (
    <button onClick={arrowClickHandler} style={{background: "none", border: "none", width: "15px", height: "15px"}}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Arrow;
