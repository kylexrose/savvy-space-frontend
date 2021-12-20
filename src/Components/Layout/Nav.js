import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

function Nav() {
    const {course_id} = useParams();
    const [isInCourse, setIsInCourse] = useState(false)

    useEffect(() => {
        if(course_id){
            setIsInCourse(true)
        }
    }, [course_id])
    
    return (
        <div className="leftNav">
            {isInCourse ? <>
            <Link className="leftNavLink" to={`/course-overview/${course_id}`}>Course Overview</Link>
            <Link className="leftNavLink" to={`/course-overview/${course_id}/assignments`}>Assignments</Link>
            </> 
            : 
            ""}
            <Link className="leftNavLink" to="/profile">Profile</Link>
            <Link className="leftNavLink" to="/courses">Courses</Link>
            <Link className="leftNavLink" to="/grades">Grades</Link>
        </div>
    )
}

export default Nav
