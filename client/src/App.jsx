import { Routes, Route } from 'react-router-dom'
import Landing from './views/landing/landing.component';
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Create from './views/create/create.component'

import './views/home/home.style.css';

function App() {
  

  return (
    
      <div>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/detail/?name' element={<Detail/>}/>
        <Route path='/form' element={<Create/>}/>
      </Routes>
      </div>
  )
}

export default App