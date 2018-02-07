import React, {Component} from 'react';
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.title = "Note Title",
        this.body = "Note body..."
    }

    render(props) {
        return (
            <div className="note">
                <h1>{this.title}</h1>
                <p>{this.body}</p>
            </div>
        )
    }
}
export default Note;