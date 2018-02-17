import React from 'react';
import './note-single.css';
import { Link } from "react-router-dom";
import MetaDate from '../MetaDate/meta-date';

class NoteSingle extends React.Component {

    render() {

      const note = this.props.note;

      return (
          <div className="note-single">
              <Link to="/notes" className="note-single__back">back to your notes</Link>
              <div className="note-single__body">
                  <h1>{note.title}</h1>
                  <MetaDate className="note__date" date={note.timestamp} />
                  <p>{note.content}</p>
              </div>

          </div>
      );
    }
}
export default NoteSingle;