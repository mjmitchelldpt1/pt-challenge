import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./context/layout/Navbar"
import Home from './context/pages/Home';
import Contact from './context/pages/Contact';
import About from './context/pages/About'

function App() {
  
  return (
    <Router>
     <Navbar />
     <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route
          path='/'
          element={
            <>
            <Home />
            </>
          }
          />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      </main>
    </Router>
  );
}

export default App;
