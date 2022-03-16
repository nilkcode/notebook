import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

  const notesInitial =   [
        {
          "_id": "620f25be6aeb6b640728a8e0",
          "user": "620f0be6c8eea6caabcb4a97",
          "title": "My Title 2 updated",
          "description": "Please study dealy as per better developer",
          "tag": " Updated Developer ",
          "date": "2022-02-18T04:51:10.065Z",
          "__v": 0
        },
        {
          "_id": "621d8cc3e05f318b43b14e64",
          "user": "620f0be6c8eea6caabcb4a97",
          "title": "My Title 2",
          "description": "Please study dealy as per better developer",
          "tag": "Developer",
          "date": "2022-03-01T03:02:27.663Z",
          "__v": 0
        },
        {
            "_id": "620f25be6aeb6b640728a8e0",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2 updated",
            "description": "Please study dealy as per better developer",
            "tag": " Updated Developer ",
            "date": "2022-02-18T04:51:10.065Z",
            "__v": 0
          },
          {
            "_id": "621d8cc3e05f318b43b14e64",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2",
            "description": "Please study dealy as per better developer",
            "tag": "Developer",
            "date": "2022-03-01T03:02:27.663Z",
            "__v": 0
          },
          {
            "_id": "620f25be6aeb6b640728a8e0",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2 updated",
            "description": "Please study dealy as per better developer",
            "tag": " Updated Developer ",
            "date": "2022-02-18T04:51:10.065Z",
            "__v": 0
          },
          {
            "_id": "621d8cc3e05f318b43b14e64",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2",
            "description": "Please study dealy as per better developer",
            "tag": "Developer",
            "date": "2022-03-01T03:02:27.663Z",
            "__v": 0
          },
          {
            "_id": "620f25be6aeb6b640728a8e0",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2 updated",
            "description": "Please study dealy as per better developer",
            "tag": " Updated Developer ",
            "date": "2022-02-18T04:51:10.065Z",
            "__v": 0
          },
          {
            "_id": "621d8cc3e05f318b43b14e64",
            "user": "620f0be6c8eea6caabcb4a97",
            "title": "My Title 2",
            "description": "Please study dealy as per better developer",
            "tag": "Developer",
            "date": "2022-03-01T03:02:27.663Z",
            "__v": 0
          },
      ]
   
     const [notes, setNotes] = useState(notesInitial)

     
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;