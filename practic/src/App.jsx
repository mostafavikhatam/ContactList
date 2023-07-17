import "../public/style.css"
import {Routes , Route} from "react-router-dom"

import Home from "./Components/Home"
import Create from "./Components/Create"
import Update from "./Components/Update"
import Read from "./Components/Read"
import NotFounded from "./Components/NotFounded"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update/:userId" element={<Update/>}/>
      <Route path="/read/:userId" element ={<Read/>}/>
      <Route path="*" element={<NotFounded/>}/>
    </Routes>
  )
}

export default App
