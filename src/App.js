import React, { Component } from 'react';
import './App.css';
import Note from './Components/Note/note';

class App extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render(props) {
    return (

        <Note />

    );
  }

}
 

export default App;
