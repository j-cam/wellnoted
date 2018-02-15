import React from 'react';
import './note.css';
import { Link } from 'react-router-dom';


class Note extends React.Component {
    constructor(){
        super();
    }

    render(key) {

        const details = this.props.details;
        const index = this.props.index;
        const noteId = this.props.index;
        return (
            <div className="note">
                <div className="note__header">
                    <span>note</span>
                    <button className="note__delete" onClick={() => this.props.deleteNote(index)}>&times;</button>
                </div>
                <div className="note__body">

                    <h1><Link to={`/notes/${noteId}`}>{details.title}</Link></h1>
                    <p>{details.content}</p>

                </div>
            </div>
        );
    }
}
export default Note;