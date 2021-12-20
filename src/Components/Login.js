import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import bigLogo from '../Local/SSBig.png'
import { logInActionCreator } from '../Redux/userState';
import {useNavigate} from 'react-router-dom';
import Axios from '../Utils/Axios'
import { saveNotesActionCreator } from '../Redux/noteState';



function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const user = useSelector(state => state.user);

    useEffect(() => {
        if(user !== null){
            navigate('/courses')
        }
    }, [])
    
    
    const onSubmit = async (e)=>{
        e.preventDefault()
        setErrorMessage("");
        try{
            const user = await Axios.post('/users/login', { username, password });
            const notes = await Axios.post('/student-notes/get-notes-by-user-id', {user_id : user.data.user_id})
            dispatch(
                logInActionCreator(user.data)
            )
            dispatch(
                saveNotesActionCreator(user.data.user_id, notes.data.notes)
            )
            navigate('/courses')
        }catch(err){
            console.log(err.response.status)
            if(err.response.status === 400){
                setErrorMessage("Please check Username and Password")
            }
        }
    }

    return (
        <div className="loginBody">
            <div className="loginLeftSide">
                <img className="titleImg" src={bigLogo} alt="logo"/>
            </div>
            <div className="loginRightSide">
                <h1 className="loginTitle">Savvy Space</h1>
                <form className="loginInputs">
                    <div className="errorMessage">{errorMessage}</div>
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
