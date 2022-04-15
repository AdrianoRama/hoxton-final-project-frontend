import React from 'react'

export default function CreateBoard() {
  return (
    <div>
         <div className = 'add-category-modal'>
            <form action="" className = "add-category-form">
                <h1>New Board</h1>
                <input type="text" placeholder = 'Name' />
                <button type = 'submit' className = "submit-btn">Create</button>
            </form>
        </div>
    </div>
  )
}
