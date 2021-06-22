import React from 'react'
import './index.css'

const List = ({ people, setPeople }) => {
  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                className='btn'
                type='button'
                onClick={() => handleRemove(id)}
                className='btn'
              >
                Remove
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
