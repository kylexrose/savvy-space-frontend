import React, {useEffect} from 'react'
import Nav from './Nav'
import RightContent from './RightContent'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UIForm(props) {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [])
    
    return (
        <div className="body">
            <Nav />
            {props.children}
            <RightContent/>
        </div>
    )
}

export default UIForm
