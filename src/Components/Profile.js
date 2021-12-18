import React from 'react'
import UIForm from './Layout/UIForm'

function Profile() {
    return (
        <UIForm>
            <div className="mainContent">
                <h1 className="pageTitle">My Profile</h1>
                <div className="profileInfo">
                    <p>Name: <span>{'name'}</span></p>
                    <p>Birthday: <span>{'birthday'}</span></p>
                    <p>Email: <span>{'email'}</span></p>
                </div>
                <div className="profileControls">
                    <button>Reset Password</button>
                    <button>Change Email</button>
                </div>
            </div>
        </UIForm>
    )
}

export default Profile
