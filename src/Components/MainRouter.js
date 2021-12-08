import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import Courses from './Courses'
import Grades from './Grades'
import Assignments from './Assignments/Assignments'
import CourseOverview from './CourseOverview'
import RightContent from './RightContent'
import Nav from './Nav'
import Header from './Header'

function MainRouter(props) {
    return (
        <Router>
            <Header/>
            <div className="body">
                <Nav/>
                <Routes>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/grades" element={<Grades/>}/>
                    <Route path="/course-overview" element={<CourseOverview/>}/>
                    <Route path="/assignments" element={<Assignments/>}/>
                </Routes>
                <RightContent/>
            </div>
            
        </Router>
        
    )
}

export default MainRouter
