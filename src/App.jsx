import React from 'react'
import Home from './pages/home'
import Place from './pages/place'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Modal } from './components/modal/modal'

const App = () => {
  return (
     <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/place' element={<Place/>} />
        </Routes>
      </Router>
    </div>
    );
  }

 export default App