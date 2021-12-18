import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import UIForm from './Layout/UIForm'
import Axios from '../Utils/Axios'


function Courses() {
    const user = useSelector(state => state.user);
    const [courseList, setCourseList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getCourseList();
    }, [])

    useEffect(() => {
        setIsLoaded(true)
    }, [courseList])

    const getCourseList = async () => {
        try{
            const courses = await Axios.post('/enrollments/find-courses-by-student-id', {student_id: user.student_id})
            setCourseList(courses.data.courseList);
        }catch(e){
            console.log(e)
        }
    }

    function renderCourseList(){
        return(
        courseList.map(course =>{
            return(
                <Link className="courseBox"
                    key= {course.course_id}
                    to = "/course-overview"
                    state = {{course}}>
                    <p className="courseTitle">{course.course_name}<br/>
                    {course.course_code}</p>
                </Link>
            )
        })
        )}

    // const getCourseList;
    return (
        <UIForm>
            <div className="mainContent">
                <h1 className="pageTitle">My Courses</h1>
                <div className="courseList">
                {!isLoaded ? "" : renderCourseList()}
                </div>
            </div>
        </UIForm>
    )
}

export default Courses
