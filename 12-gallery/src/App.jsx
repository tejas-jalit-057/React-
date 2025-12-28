import { useState } from "react"
import  axios from "axios"
import { div } from "framer-motion/client"

const App = () => {

    const [userdata, setUserdata] = useState([])


  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')  
    // console.log(response.data)
    setUserdata(response.data)
    console.log(response.data)
  }

  let printuserdata = "No Data Available"

  if (userdata.length>0) {
    printuserdata = userdata.map(function (elem,idx) {
      
      return <div>
        <img className="h-50 flex rounded"  src={elem.download_url} alt="" />
      </div>
    })
  } 


  return (
    <div>
      <button
        onClick={getdata}
        className='m-3  bg-green-600 px-15 py-3 rounded-2xl text-4xl'>Get data</button>
      
      <div  className="flex flex-wrap gap-6   m-5">
        {printuserdata}
      </div>
    </div>
  )
}

export default App
