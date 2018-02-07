import React, {Component} from 'react';
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.body = this.props.content;
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