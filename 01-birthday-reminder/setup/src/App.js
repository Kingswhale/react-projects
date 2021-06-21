import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  const handleClick = () => {
    console.log('testing the click')
  }
  return (
    <main>
      <section className='container'>
        <h3>We have 0 birthdays today</h3>
        <List people={people} setPeople={setPeople} />
        <button type='button' onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
