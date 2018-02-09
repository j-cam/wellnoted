import React, { Component } from 'react';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import Note from './Components/Note/note';
import NoteForm from './Components/NoteForm/noteForm';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref('notes');
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.state = {
      notes: [],
    }
  }

  componentWillMount() {
    const theNotes = this.state.notes;

    // DataSnapshot: on new note add
    this.database.on('child_added', snapshot => {

      theNotes.push({
        id: snapshot.key,
        title: snapshot.val().title,
        content: snapshot.val().content
      })

      this.setState({
        notes: theNotes
      })

    })

    // DataSnapshot: on note delete
    this.database.on('child_removed', snapshot => {

      for (var i = 0; i < theNotes.length; i++) {
        if (theNotes[i].id === snapshot.key) {
          theNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: theNotes
      })
    })

  }
  // componentDidMount() {}

  addNote(note) {
    this.database.push().set({
      title: note.title,
      content: note.content
    })
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div>
      {
        this.state.notes.map((note) => {
          return (
            <Note 
              key={note.id} 
              id={note.id} 
              title={note.title} 
              content={note.content}
              removeNote={this.removeNote} 
            />
          );
        })
      }
      <NoteForm notes={this.state.notes} addNote={this.addNote} />
      </div>
    )
  }

}
 

export default App;
