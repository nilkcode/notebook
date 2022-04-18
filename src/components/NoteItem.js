import React,{useContext} from 'react';
import noteContext from "../context/notes/noteContext";


const NoteItem = (props) => {

  const context = useContext(noteContext);

  const{deleteNote}  = context;

  const{note,updateNote}  = props;

 

   return (
    <>
     
      <div className='col-md-4'>
        <div className="card my-2" >
          <div className="card-body ">
              <h5 className="card-title"> {note.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text"> {note.description}.</p>
              <div className='d-flex justify-content-end'>
              <a href="#" className="card-link card-link-btn bg-danger" title='Delete User' onClick={()=>{deleteNote(note._id)}}><i className="fa-solid fa-trash-can"></i></a>
              <a href="#" className="card-link card-link-btn bg-success" title='Edit User' onClick={()=> {updateNote(note)}}  ><i className="fa-solid fa-user-pen"></i></a>
              </div>
        
          </div>
          </div>
      </div>
    
    </>
  )
}

export default NoteItem
