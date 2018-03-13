import React, { Component } from 'react';
import './app.css';
import base from '../Config/config';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import uuid from 'uuid';

import Navigation from '../Components/Common/Navigation/navigation';
import NotFound from '../Components/NotFound';
import Dashboard from '../Components/Dashboard';
import Notes from '../Components/Notes';
import NoteSingle from '../Components/NoteSingle/note-single';
import NoteEdit from '../Components/NoteEdit/note-edit';
import Header from '../Components/Common/Header/header';
import AddNoteForm from '../Components/AddNoteForm/add-note-form';
// Dev Testing Stuff
import sampleNotes from '../utils/data/sample-notes';

class App extends Component {

  constructor() {
    super();
    this.loadSamples = this.loadSamples.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    // ========== LIVE STORAGE
    // this.app = firebase.initializeApp(DB_CONFIG);
    // this.database = this.app.database().ref('007/notes');
    // ========== LIVE STORAGE
    this.state = {
      account: {
        user: "Coolio DeVille",
        id: '007'
      },
      notes: {},
    }
  }

  componentWillMount() {
    // this.database.on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });
    // ========== LOCAL STORAGE TESTING
    // check if there is any order in localStorage
    // const localStorageRef = localStorage.getItem(`notes-${this.state.account.id}`);
    // if (localStorageRef) {
    //   // update our App component's state
    //   this.setState({
    //     notes: JSON.parse(localStorageRef)
    //   });
    // }
    // else {
    //   localStorage.setItem(`notes-${this.state.account.id}`, {});
    // }
    // ========== LOCAL STORAGE TESTING

    // ========== LIVE STORAGE

    // const previousNotes = this.state.notes;
    // DataSnapshot
    // this.database.on('child_added', snap => {
    //   previousNotes.push({
    //     id: snap.key,
    //     noteContent: snap.val().noteContent,
    //   })
    // })

    // this.database.on('child_removed', snap => {
    //   for(var i=0; i < previousNotes.length; i++){
    //     if(previousNotes[i].id === snap.key){
    //       previousNotes.splice(i, 1);
    //     }
    //   }
    // })
    // ========== LIVE STORAGE
    // this.setState({
    //   notes: previousNotes
    // })
  }
  componentDidMount(){
    this.ref = base.syncState(`${this.state.account.id}/notes`,{
      context: this,
      state:'notes'
    });
  }
  componentWillUnmount(){
    // Prvent memory leaking
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    // ========== LOCAL STORAGE TESTING
    // localStorage.setItem(`notes-${this.state.account.id}`, JSON.stringify(nextState.notes));
    // ========== LOCAL STORAGE TESTING


  }

  loadSamples() {
    this.setState({
      notes: sampleNotes
    });

  };

  addNote(note) {
    const notes = { ...this.state.notes };
    const timestamp = Date.now();
    note.timestamp = timestamp;
    notes[`note${timestamp}`] = note;
    // ========== LOCAL STORAGE TESTING

    // ========== LIVE STORAGE
    // this.base.push().set({ noteContent: note});
    // ========== LIVE STORAGE
    this.setState({ notes });
  }

  updateNote(key, updatedNote) {
    const notes = { ...this.state.notes };
    const timestamp = Date.now();
    updatedNote.edited = timestamp;

    notes[key] = updatedNote;
    this.setState({ notes });
  }

  deleteNote(key) {
    // const notes = { ...this.state.notes };
    console.log(notes[key]);
    // delete notes[key];
    // this.setState({ notes });
    // this.database.child(key).remove();
  }


  // activateNoteEdit = (id) => {
  //   this.setState({
  //     notes: this.state.notes.map(note => {
  //       if(note.id === id) {
  //         note.editing = true;
  //       }

  //       return note;
  //     })
  //   });
  // }

  // editNote = (id, task) => {
  //   this.setState({
  //     notes: this.state.notes.map(note => {
  //       if(note.id === id) {
  //         note.editing = false;
  //         note.task = task;
  //       }
  //       return note;
  //     })
  //   });
  // }

  // Note: Console.log arrow function example
  //  render={ (props) => console.log(props) || [<CompOne/>, <CompTwo/> }

  render() {
    return (
      <div className="app">
        <Router>
          <main>
            <Navigation />
            <Header username="Sideshow Bob" />
            <Switch>
              <Route exact path="/"
                  render={
                    (props) => [
                      <Dashboard key={uuid()} />
                    ]
                  }
              />
              <Route exact path="/dashboard"
                  render={
                    (props) => [
                      <Dashboard key={uuid()} />
                    ]
                  }
              />
              <Route exact path="/notes"
                  render={
                    (props) => [
                      <Notes
                        key={uuid()}
                        deleteNote={this.deleteNote}
                        notes={this.state.notes}
                        formatDate={this.formatDate}
                        formatTime={this.formatTime}
                      />,
                      <AddNoteForm key={uuid()} addNote={this.addNote} />,
                      <button key={uuid()} className="load-notes" onClick={(e) => this.loadSamples(e)}>
                        Load Sample Notes
                      </button>
                    ]
                  }
              />
              <Route path="/note/edit/:noteId"
                  render={
                    (props) => [
                      <NoteEdit
                        key={props.match.params.noteId}
                        index={props.match.params.noteId}
                        note={this.state.notes[props.match.params.noteId]}
                        notes={this.state.notes}
                        updateNote={this.updateNote}
                        // Dont allow note deletions on example note
                        // during editing (for now)
                        deleteNote={() => false}
                        {...props}
                      />
                    ]
                  }
              />
              <Route path="/notes/:noteId"
                  render={(props) => [
                    <NoteSingle
                      key={uuid()}
                      index={props.match.params.noteId}
                      note={this.state.notes[props.match.params.noteId]}
                      {...props}
                    />
                  ]}
              />
              <Route path="*"
                  render={
                    (props) => [
                    <NotFound key={uuid()} />
                  ]
                }
              />
            </Switch>
          </main>
        </Router>
      </div>
    )
  }
}

export default App;
