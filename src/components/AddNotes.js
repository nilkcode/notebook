import React,{useState,useContext} from "react";
import noteContext from "../context/notes/noteContext";


const AddNotes = () => {


  const context = useContext(noteContext);
  const { addNote } = context;
   
  const[note, setNote] = useState({title:"", description:"",tag:""})

  const handleClick = (e) => {
   
     e.preventDefault();
     addNote(note);
   };

  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="container my-3 w-75">
        <h3>Add Your Note</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="title"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="titile"
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="description"
              onChange={onChange}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
