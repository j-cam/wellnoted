import React, {Component} from 'react';
import './noteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteBody: 'something'
        }
        this.createNote = this.createNote.bind(this);
    }


    // updating newNoteBody is what shows the new value in the text input
    handleChange(e) {
        this.setState({
            newNoteBody: e.target.value
        });
    }

    createNote(e) {
        e.preventDefault();
        const note = {
            id: `note-${Date.now()}`,
            title: `Title for ${this.state.newNoteBody}`,
            content: this.state.newNoteBody
        }
        this.props.addNote(note);
    }


    render(props) {
        return (
            <div className="note-form">
               <input 
                    type="text" 
                    className="note-form__input-text" 
                    placeholder="Add a new note..."
                    value={ this.state.newNoteBody }

                    onChange={ (e) => this.handleChange(e) }
                />
               <button className="note-form__bttn"
                onClick={this.createNote}>Add Note</button> 
            </div>
        )
    }
}
export default NoteForm;