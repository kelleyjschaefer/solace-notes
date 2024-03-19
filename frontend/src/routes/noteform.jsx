import { Form, redirectDocument, useSearchParams } from "react-router-dom";
import axios from "axios";
import errorHandler from "../components/error";
import { Link } from "react-router-dom";

export default function NoteForm() {
    const [searchParams] = useSearchParams();
    let content = searchParams.get("content")
    let topicname
    if (searchParams.get("topicname") === undefined) {
        topicname = "";
    } else {
        topicname = searchParams.get("topicname");
    }
    const noteId = searchParams.get("noteId");
    return (
        <div className="Note-form">
            <div className="note-form-body">
            <Link to="/"><h1 className="close-button">X</h1></Link>
            <h1>New note</h1>
                <Form method="post">
                    <div className="topic-input">
                        <label>
                            Topic
                        </label>
                        <br />
                        <input type="text" name="topic" defaultValue={topicname}/>
                    </div>
                    <div className="content-input">
                        <label htmlFor="content">Content</label>
                        <br />
                        <textarea name="content" rows="10" cols="30" id="content" defaultValue={content}/>
                    </div>
                    <p className="topic-input">
                        <button type="submit" className="search-button">Save</button>
                    </p>
                    <input type="hidden" name="noteId" defaultValue={noteId} />
                </Form>
            </div>
        </div>
    )
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteId = formData.get("noteId");
    const note = { content: formData.get("content"), topic: formData.get("topic")};
    let existingTopic = null;
    if (note.topic !== "") {
        try {
            await axios.get("http://localhost:3000/topics/search/" + formData.get("topic")).then((response) => {
                existingTopic = response.data;
            });
        } catch (e) {
            errorHandler(e);
        }
        
        if (!existingTopic) {
            try {
                await axios.post("http://localhost:3000/topics/", { topicname: note.topic }).then(response => {
                    existingTopic = response.data.generatedMaps[0].topicId;
                });
            } catch (e) {
                errorHandler(e);
            }
        } else {
            existingTopic = existingTopic.topicId;
        }
    }
    if (noteId) {
        try {
            let URL = "http://localhost:3000/notes"
            return axios.put(URL, { content: note.content, topicId: existingTopic, id: noteId }).then(() => {
                return redirectDocument("/");
            });
        }
        catch (e) {
            errorHandler(e);
        }
    } else {
        try {
            let URL = "http://localhost:3000/notes"
            return axios.post(URL, { content: note.content, topicId: existingTopic }).then(() => {
                return redirectDocument("/");
            });
        }
        catch (e) {
            errorHandler(e);
        }
    }
}