import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Searchbar from "./searchbar";
import Topics from "./topics";
import Note from "../components/note";
import React, { useState } from 'react';
import errorHandler from "../components/error";

export default function Dashboard() {
    const [notesList, setNotes] = useState([]);
    const [searchTerm, setSearch] = useState("");
    const [topicFilter, setFilter] = useState(0);
    const [currentTopic, setTopic] = useState("");

    React.useEffect(() => {
        let URL = "http://localhost:3000/notes/search/" + searchTerm;
        if (searchTerm.length === 0){
            URL = "http://localhost:3000/notes";
        }
        axios.get(URL).then((response) => {
            setNotes(response.data);
        }).catch((error) => {
            errorHandler(error);
            return null;
        })
    }, [searchTerm]);

    React.useEffect(() => {
        let URL = "http://localhost:3000/notes/search/topic/" + topicFilter;
        if (!topicFilter) {
            URL = "http://localhost:3000/notes";
        }
        axios.get(URL).then((response) => {
            if (!topicFilter) {
                setNotes(response.data);
            } else {
                setNotes(response.data[0]);
            }
        }).catch((error) => {
            errorHandler(error);
            return null
        })
    }, [topicFilter])

    React.useEffect(() => {
        axios.get("http://localhost:3000/notes").then((response) => {
            setNotes(response.data);
            console.log(response.data);
        }).catch((error) => {
            errorHandler(error);
            return null;
        })
    }, []);

    return (
    <div className="App">
            <div className="New-note">
                <Searchbar setSearch={setSearch} />
                <Link to="new">
                    <div className="new-note-button">New Note</div>
                </Link>
            </div>
            <Outlet />
        <Topics setFilter={setFilter} setTopic={setTopic}/>
        <div className="Dashboard">
            <ul className="Notes-grid">
            { notesList.map((note, index) => {
                return (
                    <div key={index}>
                        <Note content={note.content} topicName={note.topic?.topicname} posted={note.posted} id={note.id} currentTopic={currentTopic}/>
                    </div>
                )
            })}
            </ul>
        </div>
    </div>
    )
}