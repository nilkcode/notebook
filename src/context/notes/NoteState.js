import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

  const host = "http://localhost:5000"

  const notesInitial =   []


     const [notes,setNotes] = useState(notesInitial)

     // Get All notes

     const getAllNotes = async() => {
       
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
        },
      
      });

      const datajson = await response.json();
      console.log(datajson)
      setNotes(datajson);
     }



   
     // Add Notes
     const addNote = async(title ,description,tag) => {
       
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
        },
        body: JSON.stringify({title, description,tag})
      });

     const  note = {
          //Todo Api Call
            "_id": "621d8cc3kkwhhe05f318b43b140",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2 Addded in notes",
            "description": "Please study dealy as per better developer[Added notes]",
            "tag": "Developer",
            "date": "2022-03-01T03:02:27.663Z",
            "__v": 0
        };
        
        setNotes(notes.concat(note))
        console.log("adding a new note")
     }

    
     // Edit Notes
     const editNote = async(id,title,description, tag) => {
        //Todo Api Call


        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZjBiZTZjOGVlYTZjYWFiY2I0YTk3In0sImlhdCI6MTY0NTE1NjA5N30.X6nEPojbZFndikXg2RoqRkgLbz_lUvTWXpzvt3N0AGQ'
          },
          body: JSON.stringify({title,description,tag})
        });
        const json =  response.json(); 
        

        // this is logic for edit client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title
            element.description = description;
            element.tag = tag
          }
          
        }

    }

     // Delete Noted
     const deleteNote = (id) => {
       //Todo Api Call
        console.log("Deleting note with id" + id);
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