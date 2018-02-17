import React from 'react';
import './note-single.css';
import { Link } from "react-router-dom";


class NoteSingle extends React.Component {

    render(key) {

      const note = this.props.note;
      const id = this.props.index; // needed later for editable
      const creationDate = typeof note.timestamp !== 'undefined' && note.timestamp.length !== 0;


        return (
            <div className="note-single">
                <Link to="/notes" className="note-single__back">back to your notes</Link>

                <div className="note-single__body">
                    <h1>{note.title}</h1>
                    <span className="note__date">
                      {
                        creationDate
                        ? [this.props.formatDate(note.timestamp), " at ", this.props.formatTime(note.timestamp)]
                        : ''
                      }
                    </span>
                    <p>{note.content}</p>
                </div>

            </div>
        );
    }
}
export default NoteSingle;