import React from 'react';
import './note-single.css';
import { Link } from "react-router-dom";


class NoteSingle extends React.Component {
    constructor(){
        super();

    }

    render(key) {
        const index = this.props.match.params.noteId;
        const details = this.props.notes[index];
        // {console.log(this.props)}

        return (
            <div className="note-single">
                <Link to="/notes" className="note-single__back">back to your notes</Link>

                <div className="note-single__body">
                    <h1>{details.title}</h1>
                    <p>{details.content}</p>
                </div>

            </div>
        );
    }
}
export default NoteSingle;