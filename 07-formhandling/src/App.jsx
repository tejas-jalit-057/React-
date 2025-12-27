import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('');

  const submitHandler = (e)=> {
    e.preventDefault();
    console.log('form submitted by : ', title)
    setTitle('')
  }
  
  return (
    <>
      <form 
        onSubmit={(e) => {
          submitHandler(e) 
        }}
      >
      
        <input
          type="text"
          placeholder='Enter your name : '
          value={title}
          onChange={(e) => {
            
            setTitle(e.target.value)
          }}
        />
        
        <button>Submit</button>

      </form>
    </>
  )
}

export default App
