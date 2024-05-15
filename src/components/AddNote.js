import React, { useContext, useState } from "react";
import alertContext from "../context/alerts/alertContext";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const { showAlert } = useContext(alertContext);
  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  

  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
    showAlert( {message:"Note added successfully", type:"success"} )
  };

  return (
    <div className="container my-5">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="titleHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length < 5 || note.description.length < 5}>
          Add a note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
