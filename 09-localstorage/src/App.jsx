import React from 'react'

const App = () => {


  // sessionStorage.clear()
  // localStorage.clear()

  // localStorage.setItem('user', 'Tejas')
  // localStorage.setItem('age', '18')
  
  // sessionStorage.setItem('user', 'Tejas')
  // sessionStorage.setItem('age','19')
  

  // const username = localStorage.getItem('user')
  // console.log(username)

  // const age = sessionStorage.getItem('age')
  // console.log(age)

  // localStorage.removeItem('user')
  // sessionStorage.removeItem('age')
  // --------------------------------------------------------------
  

  const user = {
    username: 'Tejas Jalit',
    age:'19',
    city:'Amravati'
  }

  // localStorage.setItem('user', user)
  // localStorage.setItem('user', JSON.stringify(user))  ---> in the form of string 

  // const username = localStorage.getItem('user')
  // console.log((username))

  // const username = JSON.parse(localStorage.getItem('user'))   ---> in the form of object
  // console.log(username)


  return (
    <div>
      App
    </div>
  )
}

export default App
