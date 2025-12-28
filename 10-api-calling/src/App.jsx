import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const App = () => {

  // async function btnclicked() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  //   console.log("Data aa gaya")
  // }


  // const btnclicked = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   // console.log(response)

  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getdata = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const s = await (data.json())
  //   console.log(s)
  // }


  // using axios---------
  const getdata = async () => {
    const d = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(d.data)
  }



  const [photos , setPhotos ] = useState([])

  const getphotos = async () => {
    const ph = await axios.get('https://picsum.photos/v2/list')
    console.log(ph.data)
    console.log("data aa gaya ")
    setPhotos(ph.data)
  }



  return (
    <div>

      {/* <button onClick={btnclicked}>Get Data </button> */}
      <button onClick={getdata}>User list </button>

      <button onClick={getphotos}>Get photos list data</button>
      <div>
        {photos.map(function (elem,idx) {
          
          return <h3>Hello {idx} : {elem.author} {elem.url} </h3>
        })}
      </div>

    </div>
  )
}

export default App
