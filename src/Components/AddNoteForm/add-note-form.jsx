import React from 'react';
import './add-note-form.css';

class AddNoteForm extends React.Component {

    createNote(event) {
        event.preventDefault();
        const note = {
            title: this.title.value,
            content: this.content.value
        }
        this.props.addNote(note);
    }

    render() {

        return (
            <form className="note-form" onSubmit={this.createNote.bind(this)}>

                <input
                    type="text"
                    className="note-form__title"
                    placeholder="enter note title..."
                    ref={(input) => this.title = input}

                />
                <textarea
                    type="text"
                    className="note-form__content"
                    placeholder="enter note content...."
                    ref={(input) => this.content = input}
                ></textarea>
                <button type="submit">Add Note</button>

            </form>
        )
    }
}
export default AddNoteForm;