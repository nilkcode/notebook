import React,{useContext,useEffect} from "react";
import noteContext from "../context/notes/noteContext";

import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";




const Notes = () => {
    const context = useContext(noteContext);

    const {notes,getAllNotes} = context;

    useEffect(()=>{
      getAllNotes();
    },[])
    

  return (

      <>
    
       <AddNotes/> 
      <div className='row'>
      <h3 className='my-4'>You Notes</h3>
        {notes.map((note)=> {
          
            return <NoteItem key={note._id} note={note}/>
        })}
      </div>  

     </>
  )
}

export default Notes
