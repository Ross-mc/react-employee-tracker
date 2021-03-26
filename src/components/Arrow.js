import React from "react";

const Arrow = ({direction, arrowClickHandler}) => {
    return (
        <i className={direction === "straight" ? "fas fa-grip-lines" : `fas fa-angle-${direction}`} onClick={arrowClickHandler}></i>
    )
}

export default Arrow