import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './context/layout/Navbar';
import Home from './context/pages/Home';
import Contact from './context/pages/Contact';
import About from './context/pages/About';
import SideBar from './context/layout/SideBar';

function App() {
  return (
    <Router>
      <Navbar />
      <div id='FIXME' className='flex flex-row'>
        <SideBar />
        <main className='flex-auto mx-auto'>
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
      </div>
    </Router>
  );
}

export default App;
