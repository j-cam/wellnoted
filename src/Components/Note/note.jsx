import React from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import MetaDate from '../MetaDate/meta-date.js';

class Note extends React.Component {

    renderEdited(wasEdited) {
      if(wasEdited) {
        return (
          <MetaDate className="note__date--edited" date={wasEdited}/>
        )
      }
    }

    render() {

        const note = this.props.note;
        const id = this.props.index;
        const wasEdited = note.edited;

        return (
            <div key={uuid()} className="note">
                <div className="note__header">
                  <MetaDate className="note__date" date={note.timestamp} />
                <button className="note__delete" onClick={(e) => this.props.deleteNote(id)}>&times;</button>
                </div>
                <div className="note__body">
                    <h1><Link to={`/notes/${id}`}>{note.title}</Link></h1>
                    <p>{note.content}</p>
                    {
                      wasEdited ?
                        <small>
                          <em>
                            edited: <MetaDate className="note__date--edited" date={wasEdited}/>
                          </em>
                        </small>
                        : null
                    }
                </div>
            </div>
        );
    }
}
export default Note;