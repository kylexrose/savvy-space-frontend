import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { saveNotesActionCreator } from '../../Redux/noteState';

function RightContent() {
    const reduxNotes = useSelector(state => state.notes)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [notes, setNotes] = useState(reduxNotes)

    function handleNotesChange(e){
        setNotes(e.target.value)
    }

    function handleDispatch(){
        dispatch(saveNotesActionCreator(user.user_id, notes))
    }

    return (
        <div className="rightContent">
            <h3>Events</h3>
            <div className="events">
                <h4>Today</h4>
                <h4>Tomorrow</h4>
                <h4>This Week</h4>
                <h4>Next Week</h4>
            </div>
            <h3>Notes</h3>
            <div className="noteBlock">
                <textarea 
                className="noteInput" 
                rows="15" 
                value = {notes ?? ""}
                onChange={handleNotesChange}
                onBlur={handleDispatch}/>
            </div>
        </div>
    )
}

export default RightContent
