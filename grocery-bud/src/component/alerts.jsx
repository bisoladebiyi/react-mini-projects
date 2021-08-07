import React from 'react'

const Alerts = ({text, red, orange }) => {
    return (
        <div className="alert" style={red ? {background: "#FFE6E6", color: "#D32626"} : orange ? {background: "#F6AE99", color: "#E1701A"} : {background: "#A5E1AD", color: "#368B85"}}>
            <p>{text}</p>
        </div>
    )
}

export default Alerts
