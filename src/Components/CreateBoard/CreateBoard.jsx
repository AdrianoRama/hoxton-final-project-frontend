import React from 'react'
import { useStore } from '../../Store'
import './CreateBoard.css'
export default function CreateBoard({ setBoard }) {
  const createCollection = useStore(store => store.createCollection)
  const userFoundCollections = useStore(store => store.userFoundCollections)
  const setUserFoundCollectionFunc = useStore(store => store.setUserFoundCollectionFunc)

  function addCollection(name) {
    createCollection(name).then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        const copy = JSON.parse(JSON.stringify(userFoundCollections))
        copy.push(data)
        setUserFoundCollectionFunc(copy)
      }
    })
  }

  return (
    <div className='modal-container' onClick={(e) => {

      setBoard(false)
    }}>
      <div className='add-category-modal' onClick={e => {
        e.stopPropagation()
      }}>
        <form action="" className="add-category-form" onSubmit={(e) => {
          e.preventDefault()
          //@ts-ignore
          const collectionName = e.target.collectionName.value
          addCollection(collectionName)
          setBoard(false)
        }}>
          <h1>New Board</h1>
          <label htmlFor="name-input">Name</label>
          <input type="text" id='name-input' name='collectionName' />

          <button type='submit' className="submit-btn">Create</button>

        </form>
      </div>
    </div>
  )
}
