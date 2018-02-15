import React from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import { FormattedDate, FormattedTime } from 'react-intl';
import uuid from 'uuid';

class Note extends React.Component {
    constructor(){
        super();
    }

    renderDate(timestamp) {
      return (
        <FormattedDate
          key={uuid()}
          value={new Date(timestamp)}
          year='numeric'
          month='long'
          day='2-digit'
        />
      );
    }

    renderTime(timestamp) {
      return (
        <FormattedTime
          key={uuid()}
          value={new Date(timestamp)}
        />
      );
    }

    render(key) {

        const details = this.props.details;
        const index = this.props.index;
        const noteId = this.props.index;
        console.log(details);

        const creationDate = typeof details.timestamp !== 'undefined' && details.timestamp.length !== 0;
        console.log(creationDate);
        return (
            <div className="note">
                <div className="note__header">
                    <span className="note__date">
                      {
                        creationDate
                        ? [this.renderDate(details.timestamp), " at ", this.renderTime(details.timestamp)]
                        : ''
                      }
                    </span>
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