import React from "react";

export default function Alert(props){

    // const CapitaliseF = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1)

    // }
    return(
        props.alert && <div className="container my-2">
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {props.alert.msg}</strong>
           
        </div>

        </div>
    )
}