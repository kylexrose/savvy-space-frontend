import React from 'react'
import UIForm from './Layout/UIForm'
import {useLocation} from 'react-router-dom'


function CourseOverview() {
    const location = useLocation();
    const {course} = location.state;
    console.log(course)
    return (
        <UIForm>
        <div className="mainContent">
            <h1 className="pageTitle">{course.course_name}</h1>
            <p className="summaryText">{course.overview}</p>
        </div>
        </UIForm>
    )
}

export default CourseOverview
