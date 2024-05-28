import React from "react";
import './button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
                button
                ${props.opration ? "operation" : ""}
                ${props.double ? "double" : ""}
                ${props.triple ? "triple" : ""}
            `}
        >
            {props.label}
        </button>
    );
}
   
