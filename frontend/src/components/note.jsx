import { Link } from "react-router-dom";
import axios from "axios";

export default function Note({ content, topicName, posted, id, currentTopic}) {
    
function handleDelete(event) {
    return axios.delete("http://localhost:3000/notes/"+ event.target.id).then(() => {
        window.location.reload();
    }).catch((error) => {
        console.error(error);
        return null;
    })
}

 return (                
    <li className="Note-card">
        <div>
            <div className="note-topic"> {topicName || currentTopic} </div>
            <div className="note-content">
                <p> { content } </p>
                <p> Posted on: { posted }</p>
                <Link to={`new/?noteId=${id}&content=${content}&topicname=${topicName}`}>Edit</Link>
                <button className="delete" id={id} onClick={ handleDelete }>Delete</button>
            </div>
        </div>
    </li>
    )
}