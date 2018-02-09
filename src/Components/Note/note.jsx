import React, {Component} from 'react';
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.title = this.props.title;
        this.content = this.props.content;
        this.removeNote = this.props.removeNote;
    }

    render(props) {
        return (
            <div className="note">
                <button onClick={() => this.removeNote(this.id)}>&times;</button>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
            </div>
        )
    }
}
export default Note;