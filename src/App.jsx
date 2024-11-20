import { useState } from 'react'
import { BrowserRouter, Navigate, replace, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Courts from './pages/Courts'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Navigate replace to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/courts' element={<Courts/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
