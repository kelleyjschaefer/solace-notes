import React, { useState } from 'react';
import axios from "axios";
import errorHandler from '../components/error';

export default function Topics(props) {
    const [topicsList, setTopics] = useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/topics").then((response) => {
            setTopics(response.data);
        }).catch((error) => {
            errorHandler(error);
            return null;
        })
    }, []);

 return (
    <div className="Topic-bar">
        <h2>Search by Topic</h2>
        <button className="topic-filter-reset" onClick={() => {
            props.setFilter(null);
            props.setTopic("");
        }}>Clear filter</button>
        <ul>
        { topicsList.map((topic, index) => {
                return (
                    <li key={index}><button className="topic-filter" 
                        onClick={() => { 
                            props.setFilter(topic.topicId); 
                            props.setTopic(topic.topicname); 
                        }}>{ topic.topicname }</button>
                    </li>
                )
            })}
        </ul>
    </div>
 )
}