import React from 'react'

function Button (props) {
    return (
        <div className="centerdiv">
            <button className="buttonstyle">{props.message}</button>
        </div>
    )  
}

export default Button;