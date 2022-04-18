import { useState } from "react";
import Notes from "../../components/Notes";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

  const host = "http://localhost:5000"

  const notesInitial =   []


     const [notes,setNotes] = useState(notesInitial)

     // Get All notes

     const getAllNotes = async() => {
       
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
        },
      
      });

      const datajson = await response.json();
      setNotes(datajson);
     }

   
     
   // ADD NOTE
   const addNote  = async(title,description,tag) => {

     const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST', 
    
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
      },
      body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
      });
    

    const note = await response.json();        
    setNotes(notes.concat(note))
  

  }
   

    
     // Edit Notes
     const editNote = async(id, title, description, tag) => {
        //Todo Api Call


        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
          },
          body: JSON.stringify({title,description,tag})
        });

        const json =  response.json(); 
        

        let newNotes = JSON.parse(JSON.stringify(notes))
     

        // this is logic for edit client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title
            newNotes[index].description = description;
            newNotes[index].tag = tag
            break;
          }
         
        }
     
        setNotes(newNotes)

    }

     // Delete Noted
     const deleteNote = async(id) => {

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
        },
       
      });

        const json =  response.json(); 

        const newNote = notes.filter((note) => {return note._id !== id});
        setNotes(newNote);
     }
     
    
    return (
        <NoteContext.Provider value={{notes, getAllNotes, addNote,editNote,deleteNote}}>
           {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;