import React, {useState, useEffect} from 'react'
import UIForm from './Layout/UIForm'
import {useParams, useNavigate} from 'react-router-dom'
import Axios from '../Utils/Axios'

function CourseOverview() {
    const [courseInfo, setCourseInfo] = useState({course_name: "", overview: ""})
    const {course_id} = useParams();
    const navigate = useNavigate();

    

    useEffect(async() => {
        if(!course_id){
            navigate('/courses')
        }else{
        try{
            const courseInfo = await Axios.post('/courses/find-course', {course_id});
            setCourseInfo(courseInfo.data.foundCourse)
        }catch(e){
            console.log({error: e.message})
        }}
    }, [])

    return (
        <UIForm>
        <div className="mainContent">
            <h1 className="pageTitle">{courseInfo.course_name}</h1>
            <p className="summaryText">{courseInfo.overview}</p>
        </div>
        </UIForm>
    )
}

export default CourseOverview
