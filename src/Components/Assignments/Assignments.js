import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import Axios from '../../Utils/Axios'
import UIForm from '../Layout/UIForm'

function Assignments() {
    const [assignmentList, setAssignmentList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.user);
    const {course_id} = useParams();  

    useEffect(() => {
        async function getAssignments(){
            try{
                const assignmentList = await Axios.post("assigned-work/get-student-assignments-by-course", {student_id : user.student_id, course_id})
                setAssignmentList(assignmentList.data.studentAssignments);
            }catch(e){
                //needs error handling
                console.log(e.message)
            }}
        getAssignments();
    }, [])

    useEffect(() => {
        if(assignmentList.length){
            setIsLoaded(true)
        }
        
    }, [assignmentList])

    function renderAssignmentList(){
        return(
            assignmentList.map(assignment =>{
                return(
                    <div className="assignmentBox" key={assignment.assignment_id}>
                        <p className="assignmentBold">{assignment.assignment_name}  |  <span className="pointReference">{`${assignment.grade ? assignment.grade : "-"} / ${assignment.total_points}pts`}</span>  |  Due: {'01/10/20'}</p>
                        <p className="assignmentDescription">{assignment.details}</p>
                        <button>Upload</button>
                    </div>
                )
            })
        )}

    return (
        <UIForm>

        <div className="mainContent">
            <h1 className="pageTitle">Assignments</h1>
            {!isLoaded ? "" : renderAssignmentList()}
        </div>
        </UIForm>
    )
}

export default Assignments
