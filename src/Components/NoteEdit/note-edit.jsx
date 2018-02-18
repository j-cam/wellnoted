import React from 'react';
import './note-edit.css';
import {Link} from "react-router-dom";
import Note from '../Note/note';
import MetaDate from '../MetaDate/meta-date';
import uuid from 'uuid';

class NoteEdit extends React.Component {
    constructor() {
      super()
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event, key){
      console.log('change is comin');
      console.log(event.target.value);
      console.log(event.target.name);
      const note = this.props.notes[this.props.index];
      const updatedNote = {
          ...note, [event.target.name]: event.target.value
      };
      this.props.updateNote(key, updatedNote);
    }

    render() {

        const note = this.props.notes[this.props.index];

        return (

          <div key={this.props.index} className="note-edit">

                <div className="note-single">
                    <Link to="/notes" className="note-single__back">back to your notes</Link>
                    <div className="note-single__body">
                        <h1>
                        <input
                          type="text"
                          className="note-form__title"
                          placeholder="enter note title..."
                          name="title"
                          value={note.title}
                          onChange={(e) => this.handleChange(e, this.props.index)}
                        />
                        </h1>
                        <MetaDate className="note__date" date={note.timestamp}/>
                        <p>
                        <textarea
                          type="text"
                          className="note-form__content"
                          placeholder="enter note content...."
                          name="content"
                          value={note.content}
                          onChange={(e) => this.handleChange(e, this.props.index)}
                        ></textarea>
                        </p>
                    </div>
                </div>
                <Note {...this.props} />
          </div>
        );
    }
}
export default NoteEdit;