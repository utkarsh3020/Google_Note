import React,{ useState } from 'react'
import Count from './components/Count';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Note from './components/Note';

import "./style.css"

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    })
  }
  return (
    <div className='App'>
      <Navbar />
      <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes in Database`} />
      <CreateNote onAdd={addNote} />{
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
