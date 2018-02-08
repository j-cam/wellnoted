import React, {Component} from 'react';
import './noteForm.css';

class NoteForm extends Component {

    createNote(event) {
        event.preventDefault();
        console.log(event.target);
        const note = {
            id: null,
            title: this.title.value,
            content: this.content.value
        }
        console.log(JSON.stringify(note));
        this.props.addNote(note);
    }


    render(props) {
        return (
            <form className="note-form" ref={(input) => this.noteForm = input } onSubmit={this.createNote.bind(this)}>
               <input 
                    type="text" 
                    className="note-form__title" 
                    placeholder="Add a new note..."
                    ref={(input) => this.title = input}

                />
                <input 
                    type="text" 
                    className="note-form__content" 
                    placeholder="Add a new note..."
                    ref={(input) => this.content = input}
                />
               <button className="note-form__bttn">Add Note</button> 
            </form>
        )
    }
}
export default NoteForm;