import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './context/layout/Navbar';
import Home from './context/pages/Home';
import Contact from './context/pages/Contact';
import About from './context/pages/About';
import SideBar from './context/layout/SideBar';
import Login from './context/pages/Login';
import Timer from './context/pages/Timer';
import Calendar from './context/pages/Calendar';
import Workout from './context/pages/Workout';


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
            <Route path='/login' element={<Login />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/timer' element={<Timer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
