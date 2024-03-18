import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/notes").then((response) => {
      setAllNotes(response.data);
    }).catch((error) => {
      console.error(error);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <ul>
        { allNotes.map((note, index) => {
          return (
            <li key={index} className="Note-card">
              <div>
                <p> { note.content } </p>
                <h2> { note.topic.topicname }</h2>
                <p> Posted on: { note.posted }</p>
              </div>
            </li>
          )
        })}
      </ul>
      </header>
    </div>
  );
}

export default App;
