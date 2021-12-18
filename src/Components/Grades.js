import React from 'react'
import UIForm from './Layout/UIForm'

function Grades() {
    return (
        <UIForm>
            <div className="mainContent">
                <h1 className="pageTitle">My Grades</h1>
                <div className="courseList">
                    <div className="courseBox">
                        <p>Intro to Psychology<br/>
                        PSY201<br/>
                        <b>Grade:</b> 98.2%</p>
                    </div>
                    <div className="courseBox">
                        <p>Composition<br/>
                        COMP203<br/>
                        <b>Grade:</b> 95.9%</p>
                    </div>
                    <div className="courseBox">
                        <p>Intermediate Spanish<br/>
                        SPN204<br/>
                        <b>Grade:</b> 79.0%</p>
                    </div>
                </div>
            </div>
        </UIForm>
    )
}

export default Grades
