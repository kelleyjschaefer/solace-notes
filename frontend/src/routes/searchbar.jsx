import { Form } from "react-router-dom";

export default function Searchbar(props) {
    return (
        <div className="Searchbar">
            <Form method="post" onSubmit={ 
                    (e) =>{ 
                        e.preventDefault();
                        props.setSearch(e.target.topic.value);
                    }
                }>
                <p>
                    <label>
                        <input type="text" name="topic" placeholder="Note content..." className="search-input" />
                    </label>
                    <button type="submit" className="search-button">SEARCH</button>
                </p>
            </Form>
        </div>
    )
}