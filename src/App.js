import React, { Component } from 'react';
import './App.css';
import Note from './Components/Note/note';
import NoteForm from './Components/NoteForm/noteForm';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {id: 1, title: "Note One Title", content: "Note body content..."},
        {id: 2, title: "Title to Note 2", content: "Note body content..."}
      ],
    }
  }

  addNote(note) {
    console.log('Adding a new note' + note);
    const notes = this.state.notes;
    notes.push(note);
    this.setState({
      notes: notes
    })
  
  }
  
  render() {
    return (
      <div>
      {
        this.state.notes.map((note) => {
          return (
            <Note key={note.id} id={note.id} title={note.title} content={note.content} />
          );
        })
      }
      <NoteForm notes={this.state.notes} addNote={this.addNote} />
      </div>
    )
  }

}
 

export default App;
