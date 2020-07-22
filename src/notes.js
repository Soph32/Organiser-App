import React, {useState} from 'react';
import './App.css';

function Notes() {
    const [notes, setNotes] = useState("");

    const updateNotes = (text) => {
        setNotes(text);
    };

    return (
        <div className="notes">
            <h2>Notes</h2>
            <NotesForm updateNotes={updateNotes}/>
        </div>
    )
}

function NotesForm({updateNotes}) {
    return (
        <div>
            <form>
                <textarea onChange={event => updateNotes(event.target.value)}></textarea>
            </form>
        </div>
    )
}

export default Notes;