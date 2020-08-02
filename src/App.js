import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({todo: doc.data().todos, id: doc.id })));
    })
  }, [])


  const addToDo = (event) => {

    // Execute whenever you hit enter key or click button

    event.preventDefault(); // Prevent from refreshing the page (forms refresh it by default)

    db.collection('todos').add({
      todos: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    })

    setInput(''); // Clearing up the input field
  }
  


  return (
    <div className="App">
      <h1>Escribe aquí tu tarea, querido usuario👇👇</h1>

      <form>
        <FormControl>
        
        <InputLabel>Add a to-do to our list</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>

        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained">Add to-do</Button>

        </FormControl>
      </form>
      
    

      <ul>
        {
          todos.map(todo =>
            <Todo todo={todo}/>
          )
        }
      </ul>
    </div>
  );
}

export default App;
