import React from 'react'

const Notification = ({noti}) => {
    if(noti==null)
    {
        return null
    }
    return <div className="notification">{noti} </div>

}

export default Notification
