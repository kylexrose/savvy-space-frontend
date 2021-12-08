import React from 'react'

function RightContent() {
    return (
        <div class="rightContent">
            <h3>Events</h3>
            <div class="events">
                <h4>Today</h4>
                <h4>Tomorrow</h4>
                <h4>This Week</h4>
                <h4>Next Week</h4>
            </div>
            <h3>Notes</h3>
            <div class="noteBlock">
                <textarea class="noteInput" rows="15"></textarea>
            </div>
        </div>
    )
}

export default RightContent
