import React from 'react'
import image from "../Local/SSMain.png";
import {useDispatch, useSelector} from 'react-redux'
import { logOutActionCreator } from '../Redux/userState';
import {Link} from 'react-router-dom'

function Header() {
    const dispatch = useDispatch();
    let user = useSelector(state => state.user);

    const renderHeader = () =>{
        if(user){
            return (
                <div className="username">
                    <p>Welcome Back, {user.username}</p>
                    <Link className="logout" onClick={handleLogout} to="/login">Logout</Link>
                </div>
            )
        }
    }

    function handleLogout(){
        dispatch(logOutActionCreator())
    }

    return (
        <div className="header">
            <img className="headerTitleImg" src={image} alt="apple in space"/>
            {renderHeader()}
        </div>
    )
}

export default Header
