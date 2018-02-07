import React, { Component } from 'react';
import './App.css';
import Note from './Components/Note/note';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {id: 1, title: "Note One Title", content: "Note body content..."},
        {id: 2, title: "Title to Note 2", content: "Note body content..."}
      ],
    }
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
      </div>
    )
  }

}
 

export default App;
