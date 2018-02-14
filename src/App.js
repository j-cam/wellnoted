import React, { Component } from 'react';
// import { DB_CONFIG } from './Config/config';
// import firebase from 'firebase/app';
// import 'firebase/database';
import NotFound from './Components/NotFound';
import sampleNotes from './sample-notes';
import './App.css';
import Header from './Components/Common/Header/header';
import Note from './Components/Note/note';
import AddNoteForm from './Components/AddNoteForm/add-note-form';


class App extends Component {

  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      account: {
        user: "Coolio DeVille",
        id: '007'
      },
      notes: {},
    }
  }

  componentWillMount() {
        // check if there is any order in localStorage
        const localStorageRef = localStorage.getItem(`notes-${this.state.account.id}`);


        if(localStorageRef) {
          // update our App component's state
          this.setState({
            notes: JSON.parse(localStorageRef)
          });
        }
        else {
          localStorage.setItem(`notes-${this.state.account.id}`, {});
        }
  }


  componentWillUpdate(nextProps, nextState) {
    // console.log(nextState);
    localStorage.setItem(`notes-${this.state.account.id}`, JSON.stringify(nextState.notes));
  }

  loadSamples() {
    this.setState({
      notes: sampleNotes
    });
  };

  addNote(note) {

    const notes = {...this.state.notes};
    const timestamp = Date.now();
    note.timestamp = timestamp;

    notes[`note${timestamp}`] = note;
    this.setState({ notes });
  }
  deleteNote(key) {
    const notes = {...this.state.notes};
    console.log(notes[key]);
    delete notes[key];
    this.setState({ notes });
  }


  render() {
    return (
      <div className="app">
        <button className="load-notes" onClick={this.loadSamples}>Load Notes</button>

        <Header title={this.state.account.user} />
        <div className="note-list">
          {
            Object.keys(this.state.notes).map(key =>
                <Note
                  key={key}
                  index={key}
                  notes={this.state.notes}
                  details={this.state.notes[key]}
                  deleteNote={this.deleteNote}
                />
            )
          }
        </div>
        <AddNoteForm addNote={this.addNote} />
      </div>
    )
  }

}


export default App;
