import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <body>
        <Navbar />
        <div className="cards-container">
          <Cards user = 'Tejas Jalit' age = '19' email ='tejus057@gmail.com'/>
          <Cards user = 'Samrudhi Take' age = '18' email ='samu3106@gmail.com'/>
          <Cards user='Anil Gedam' age='20' email='anilg@gmail.com' />
          
        </div>
      </body>
    </>
  )
}
export default App
