import React from 'react';
import Note from './Note/note';

class Notes extends React.Component {

  render() {
    return (

      <div className="note-list">
        {
          Object.keys(this.props.notes).map(key =>
              <Note
                key={key}
                index={key}
                note={this.props.notes[key]}
                {...this.props}
              />
          )
        }
      </div>

    );
  }
}

export default Notes;