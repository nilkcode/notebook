import React,{useState,useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";


const AddNotes = () => {


  const context = useContext(noteContext);
  const {addNote} = context;
   
  const[note, setNote] = useState({title:"",description:"",tag:""})

  const handleClick = (e) => {
   
     e.preventDefault();
     addNote(note.title, note.description, note.tag);
     setNote({title:"",description:"",tag:"default"})
   };

  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="container my-3 ">
        <h3>Add Your Note</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="title"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="title"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              placeholder="description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              placeholder="tag"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
        

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled ={note.title.length < 5 || note.description.length  <  5 }
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
