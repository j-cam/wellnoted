import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// import { DB_CONFIG } from './Config/config';
// import firebase from 'firebase/app';
// import 'firebase/database';
import './App.css';

import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
import Notes from './Components/Notes';

import Header from './Components/Common/Header/header';
import Note from './Components/Note/note';
import NoteSingle from './Components/NoteSingle/note-single';
import AddNoteForm from './Components/AddNoteForm/add-note-form';

// Dev Only  Stuff
import sampleNotes from './sample-notes';

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
    // console.log(notes[key]);
    delete notes[key];
    this.setState({ notes });
  }




  render() {

    return (
      <div className="app">

        <Router>
        <main>
        <Switch>
            <Route exact path="/"
              render={ (props) => [
                <Dashboard />
              ]}
            />

            <Route exact path="/notes"
              render={ (props) => [
                  <Notes deleteNote={this.deleteNote} notes={this.state.notes} />,
                  <AddNoteForm addNote={this.addNote} />
              ]}
            />
            {/*
              TODO: NoteSingle needs a key
              - Look up best practice for one off keys
              - Can I use noteId somehow ?
            */}
            <Route path="/notes/:noteId"
              render={ (props) => [
                <NoteSingle notes={this.state.notes} {...props} />
              ]}
            />

            <Route path="*"
              render={ (props) => [
                <NotFound />
              ]}
            />

          </Switch>
          </main>
        </Router>
      </div>
    )
  }

}


export default App;
