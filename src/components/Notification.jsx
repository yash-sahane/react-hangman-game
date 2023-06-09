import React from 'react'

const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification && 'show'}`}>
            <p>You have already entered this character</p>
        </div>
    )
}

export default Notification