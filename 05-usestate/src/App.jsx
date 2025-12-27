import React, { useState } from 'react'

const App = () => {

  const  [a, setA] = useState(10);
  const [user, setUser] = useState('Tejas');
  const [name, setName] = useState({user:"Tejas", age : 19})

  function changeuser() {
    setUser('Anil')
  }
  function changenum() {
    setA(20)
  }

  const btnclicked = () => {
    const newUser = { ...name }
    newUser.user = "Anuj"
    newUser.age = 20
    setName(newUser)
  }

  return (
    <>
      <h1>The value of a is {a}</h1>
      <button onClick={changenum}>click</button>

      <h1>The user is  {user}</h1>
      <button onClick={changeuser}>click to change user </button>

      <h1>My name : {name.user} and my age is : {name.age}</h1>
      <button onClick={btnclicked}>Change user</button>

    </>
  )
}

export default App
