import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import { FormattedDate, FormattedTime } from 'react-intl';
import uuid from 'uuid';
// import { DB_CONFIG } from './Config/config';
// import firebase from 'firebase/app';
// import 'firebase/database';
import './app.css';

import NotFound from '../Components/NotFound';
import Dashboard from '../Components/Dashboard';
import Notes from '../Components/Notes';

import Header from '../Components/Common/Header/header';
import Note from '../Components/Note/note';
import NoteSingle from '../Components/NoteSingle/note-single';
import AddNoteForm from '../Components/AddNoteForm/add-note-form';

// Dev Only  Stuff
import sampleNotes from '../utils/data/sample-notes';
import Navigation from '../Components/Common/Navigation/navigation';

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

  formatDate(timestamp) {
    return (
      <FormattedDate
        key={uuid()}
        value={new Date(timestamp)}
        year='numeric'
        month='long'
        day='2-digit'
      />
    );
  }

  formatTime(timestamp) {
    return (
      <FormattedTime
        key={uuid()}
        value={new Date(timestamp)}
      />
    );
  }

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


  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }

        return note;
      })
    });
  }
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }

        return note;
      })
    });
  }
  // Note: Console.log arrow function example
  //  render={ (props) => console.log(props) || [<CompOne/>, <CompTwo/> }

  render() {

    return (
      <div className="app">
        <Router>
        <main>
        <Navigation />
        <Header username="Sideshow Bob"/>
        <Switch>
            <Route exact path="/"
              render={ (props) => [
                <Dashboard key={uuid()}  />
              ]}
            />
            <Route exact path="/dashboard"
              render={ (props) => [
                <Dashboard key={uuid()}  />
              ]}
            />

            <Route exact path="/notes"
              render={ (props) => [
                  <Notes key={uuid()}  deleteNote={this.deleteNote} notes={this.state.notes} formatDate={this.formatDate} formatTime={this.formatTime} />,
                  <AddNoteForm key={uuid()}  addNote={this.addNote} />,
                  <button key={uuid()} className="load-notes" onClick={this.loadSamples}>Load Sample Notes</button>
              ]}
            />

            <Route path="/notes/:noteId"
              render={ (props) => [
                <NoteSingle
                  key={uuid()}
                  index={props.match.params.noteId}
                  note={this.state.notes[props.match.params.noteId]}
                  {...props}
                  formatDate={this.formatDate}
                  formatTime={this.formatTime}
                />
              ]}
            />

            <Route path="*"
              render={ (props) => [
                <NotFound key={uuid()} />
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
