import React from "react";

export default function Filter(props) {
    function localClickHandler() {
        props.clickHandler(props.filter);
    }

    return (
        <button name={props.filter} onClick={localClickHandler}>
            {props.filter}
        </button>
    );
}
