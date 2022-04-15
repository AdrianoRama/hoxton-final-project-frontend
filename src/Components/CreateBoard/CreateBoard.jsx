import React from 'react'
import './CreateBoard.css'
export default function CreateBoard({ setBoard }) {
  return (
    <div className='modal-container' onClick={() => {
      setBoard(false)
    }}>
      <div className='add-category-modal'>
        <form action="" className="add-category-form">
          <h1>New Board</h1>
          <label htmlFor="name-input">Name</label>
          <input type="text" id='name-input' />

          <button type='submit' className="submit-btn">Create</button>

        </form>
      </div>
    </div>
  )
}
