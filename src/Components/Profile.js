import React, {useState, useEffect} from 'react'
import UIForm from './Layout/UIForm'
import {useSelector} from 'react-redux'
import Axios from '../Utils/Axios'

function Profile() {
    const user = useSelector(state => state.user)
    const [studentInfo, setStudentInfo] = useState([])
    const [birthday, setBirthday] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        getStudentInfo();
    }, [])

    useEffect(() => {
        setIsLoaded(true)
    }, [studentInfo])

    async function getStudentInfo(){
        try{
            const studentInfo = await Axios.post('/students/find-student-by-id', {student_id : user.student_id})
            setStudentInfo(studentInfo.data.foundStudent)
            setBirthday(studentInfo.data.foundStudent.birthday.slice(0,10))
        }catch(e){
            //needs error handling
            console.log(e.message)
        }
    }
    return (
        <UIForm>
            <div className="mainContent">
                <h1 className="pageTitle">My Profile</h1>
                {!isLoaded ? "" :
                <div className="profileInfo">
                    <p>Name: <span>{`${studentInfo.first_name} ${studentInfo.last_name}`}</span></p>
                    <p>Birthday: <span>{birthday}</span></p>
                    <p>Email: <span>{user.email}</span></p>
                </div>}
                <div className="profileControls">
                    {/* <button>Reset Password</button>
                    <button>Change Email</button> */}
                </div>
            </div>
        </UIForm>
    )
}

export default Profile
