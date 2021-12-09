import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import bigLogo from '../Local/SSBig.png'
import { logInActionCreator } from '../Redux/userState';
import {useNavigate} from 'react-router-dom';



function Login(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(
            logInActionCreator({username, password})
        )
        navigate('/courses')
    }

    return (
        <div className="loginBody">
            <div className="loginLeftSide">
                <img className="titleImg" src={bigLogo} alt="logo"/>
            </div>
            <div className="loginRightSide">
                <h1 className="loginTitle">Savvy Space</h1>
                <form className="loginInputs">
                    <label htmlFor="username" className="loginInput">Username</label>
                    <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="password" className="loginInput">Password</label>
                    <input id="password" name="password" type="text" onChange={e => setPassword(e.target.value)}/>
                    <br/>
                    <button className="loginButton" onClick={onSubmit}>Log On</button>
                </form>
            </div>    
                
        </div>
    )
}

export default Login
