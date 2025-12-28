import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {

  const [num, setNum] = useState(0)

  useEffect(function () {
    console.log("useEffect is running ...")
  },[])


  return (

    <div>
      <h2>{num}</h2>
      <button onClick={() => {
        setNum(num+1)
      }
        
      }>click </button>
    </div>
  )
}

export default App
