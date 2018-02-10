import React, {Component} from 'react';
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.title = this.props.title;
        this.content = this.props.content;
        this.removeNote = this.props.removeNote;
        this.toggleEditing = this.toggleEditing.bind(this);

        this.state = {
            isEditing: false
        }
    }

    toggleEditing() {
        this.setState({
            isEditing: !this.state.isEditing
        })
        console.log(this.isEditing);
    }

    renderEditing() {
        return (
            <div className="note">
            <h1>HI I'M EDITING</h1>
                <button onClick={() => this.toggleEditing()}>
                    Save
                </button>
                <button onClick={() => this.toggleEditing()}>
                    Cancel
                </button>
            </div>
        )
    }
    renderNote() {
        return (
            <div className="note" onClick={() => this.toggleEditing()}>
                <div className="note__body">
                    <button onClick={() => this.removeNote(this.id)}>&times;</button>
                    <h1>
                        {this.title}
                    </h1>
                    <p>{this.content}</p>
                </div>
            </div>
        );
    }

    render(props) {

        if(this.state.isEditing) {
            return (
                <div>{this.renderEditing()}</div>
            )
        }
        return (
            <div>{this.renderNote()}</div>
        )
    }
}
export default Note;