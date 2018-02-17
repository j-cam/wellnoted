import React from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import Date from '../Date/date';


class Note extends React.Component {

    render(key) {

        const note = this.props.note;
        const id = this.props.index;
        const creationDate = typeof note.timestamp !== 'undefined' && note.timestamp.length !== 0;


        return (
            <div className="note">
                <div className="note__header">
                    <span className="note__date">
                      <Date timestamp={note.timestamp} />
                    </span>
                    <button className="note__delete" onClick={() => this.props.deleteNote(id)}>&times;</button>
                </div>
                <div className="note__body">

                    <h1><Link to={`/notes/${id}`}>{note.title}</Link></h1>
                    <p>{note.content}</p>

                </div>
            </div>
        );
    }
}
export default Note;