import React from 'react';
import Note from './Note/note';

class Notes extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (

      <div className="note-list">
        {
          Object.keys(this.props.notes).map(key =>
              <Note
                key={key}
                index={key}
                details={this.props.notes[key]}
                deleteNote={this.props.deleteNote}
              />
          )
        }
      </div>

    );
  }
}

export default Notes;