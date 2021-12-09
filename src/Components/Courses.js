import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Courses() {
    const user = useSelector(state => state);
    console.log(user)
    // const getCourseList;
    return (
        <div className="mainContent">
            <h1 className="pageTitle">My Courses</h1>
            <div className="courseList">
                <div className="courseBox">
                    <p className="courseTitle">Intro to Psychology<br/>
                    PSY201</p>
                </div>  
                <div className="courseBox">
                    <p className="courseTitle">Composition<br/>
                    COMP203</p>
                </div>  
                <Link className="courseBox" to="/course-overview">
                    <p className="courseTitle">Intermediate Spanish<br/>
                    SPN204</p>
                </Link>
            </div>
        </div>
    )
}

export default Courses
