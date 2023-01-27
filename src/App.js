import React from 'react'
import Main from './Pages/Main'
import Dashbord from './Pages/Dashbord'
import Login from './Pages/Login'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Main/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/dashbord' exact element={<Dashbord/>}/>
    </Routes>
  )
}

export default App