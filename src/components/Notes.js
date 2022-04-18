import React, { useContext, useEffect ,useRef ,useState} from "react";
import noteContext from "../context/notes/noteContext";

import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = useContext(noteContext);

  const { notes, getAllNotes , editNote} = context;

  const[note, setNote] = useState({id:"" , etitle:"",edescription:"",etag:""})


  useEffect(() => {
    getAllNotes();
  }, []);


  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {debugger
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
 }

 const handleClick = (e) => {
  
   editNote(note.id,note.etitle, note.edescription,note.etag);
  refClose.current.click()


};

const onChange = (e) => {
 setNote({...note,[e.target.name]:e.target.value})
}
 
  
  return (
    <>
     <AddNotes />
            
      <button ref={ref} type="button" className="d-none btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
          <div className="form-group mb-3">
            <label htmlFor="etitle"></label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              aria-describedby="emailHelp"
              placeholder="title"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="edescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              value={note.edescription}
              placeholder="edescription"
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
              id="etag"
              name="etag"
              value={note.etag}
              placeholder="etag"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
        

         
        </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button  type="button"  disabled ={note.etitle.length < 5 || note.edescription.length  <  5 } className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

                  
     

   


    <div className="container">
      <h3 className="my-4">You Notes</h3>
      <div className="row ">
        <div className="container">
             {notes.length === 0 && "No Notes to display" }
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} updateNote={updateNote} />
        })}
      </div>
     </div>
       
    </>
  );
};

export default Notes;
