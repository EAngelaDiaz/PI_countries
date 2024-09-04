import { Routes, Route } from 'react-router-dom'
import Landing from './views/landing/landing.component';
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Create from './views/create/create.component'
import Activities from './views/activities/activities.component';
import Edit from './views/edit/edit.component';
import './views/home/home.style.css';

function App() {
  

  return (
    
      <div className='container-fluid text-bg-light p-0 m-0 bg-primary-subtle text-primary-emphasis'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/detail/?name' element={<Detail/>}/>
        <Route path='/form' element={<Create/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/activities/:id' element={<Edit/>}/>
      </Routes>
      </div>
  )
}

export default App