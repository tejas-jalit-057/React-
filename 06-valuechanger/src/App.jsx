import React from 'react'
import  { useState } from 'react'


const App = () => {

  const [first, setFirst] = useState(0)

  function increasenum() {
    setFirst(first+1)
  }
  function decreasenum() {
    setFirst(first-1)
  }
  const increasenumby5 = ()=> {
    setFirst(first+5)
  }
  function decreasenumby5(){
    setFirst(first-5)
  }
  return (
    <>
      <h1>{first}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
      <button onClick={increasenumby5}>Increase by 5</button>
      <button onClick={decreasenumby5}>Decrease by 5</button>

    </>
  )
}

export default App
