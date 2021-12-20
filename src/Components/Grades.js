import React, {useState, useEffect} from 'react'
import Axios from '../Utils/Axios';
import UIForm from './Layout/UIForm'
import {useSelector} from 'react-redux'

function Grades() {
    const user = useSelector(state => state.user);
    const [courseList, setCourseList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getCourseList();
    }, [])

    useEffect(() => {
        setIsLoaded(true)
    }, [courseList])

    const getCourseList = async () => {
        try{
            let courseListWithGrade = [];
            const courses = await Axios.post('/enrollments/find-courses-by-student-id', {student_id: user.student_id})
            const {courseList} = courses.data;
            for(let i = 0; i < courseList.length; i++){
                const course = await Axios.post('enrollments/get-course-grade', {student_id: courseList[i].student_id, course_id : courseList[i].course_id})
                courseListWithGrade.push({gradeInCourse: course.data.gradeInCourse, courseName: courseList[i].course_name, courseCode : courseList[i].course_code})
            }
            setCourseList(courseListWithGrade)

        }catch(e){
            console.log(e)
        }
    }

    function renderCourseGrades(){
        return (
            courseList.map(course => {
            return(
            <div className="courseBox"
            key={course.courseCode}>
                <p>{course.courseName}<br/>
                {course.courseCode}<br/>
                <b>Grade:</b> {course.gradeInCourse}%</p>
            </div>
        )
        })
        )}

    return (
        <UIForm>
            <div className="mainContent">
                <h1 className="pageTitle">My Grades</h1>
                <div className="courseList">
                    {!isLoaded ? "" : renderCourseGrades()}
                </div>
            </div>
        </UIForm>
    )
}

export default Grades
