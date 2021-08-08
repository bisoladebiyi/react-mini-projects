import React, { useEffect } from 'react'

const Alerts = ({text, close, color }) => {
    useEffect(()=> {
        setTimeout(()=> {
            close()
        }, 2000)

    },[close])
    return (
        <div className="alert" style={color==="red"?{background: "#FFE6E6", color: "#D32626"} : color==="green" ? {background: "#A5E1AD", color: "#368B85"} : {background: "#F6AE99", color: "#E1701A"}}>
            <p>{text}</p>
        </div>
    )
}

export default Alerts
