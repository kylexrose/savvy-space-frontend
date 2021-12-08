import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function Nav() {
    return (
        <div className="leftNav">

                {/* <div className="stepBack">&larr;</div>
                <Link className="leftNavLink" to="/coursesOverview">Courses</Link>
                <Link className="leftNavLink" to="/assignments">Assignments</Link> */}

            <Link className="leftNavLink" to="/profile">Profile</Link>
            <Link className="leftNavLink" to="/courses">Courses</Link>
            <Link className="leftNavLink" to="grades">Grades</Link>
        </div>
    )
}

export default Nav
