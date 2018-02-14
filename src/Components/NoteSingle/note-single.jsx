import React from 'react';
import './note-single.css';



class NoteSingle extends React.Component {
    constructor(){
        super();

    }

    render(key) {
        const index = this.props.match.params.noteId;
        const details = this.props.notes[index];
        {console.log(this.props)}

        return (
            <div key={key} className="note">
                <div className="note__header">
                    <span>note</span>
                </div>
                <div className="note__body">
                    <h1>{details.title}</h1>
                    <p>{details.content}</p>
                </div>
            </div>
        );
    }
}
export default NoteSingle;