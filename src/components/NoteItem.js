import React from 'react'

const NoteItem = (props) => {

   const{note}  = props;

   return (
    <>
     
     
    <div className='col-md-4'>
      <div class="card my-2" >
        <div class="card-body ">
            <h5 class="card-title"> {note.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text"> {note.description}.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default NoteItem
