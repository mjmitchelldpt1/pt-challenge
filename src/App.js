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
import Profile from './context/pages/Profile'
import ForgotPassword from './context/pages/ForgotPassword'
import Register from './context/pages/Register'

function App() {
  return (
    <Router>
      <Navbar />
      <div id='FIXME' className='flex flex-row'>
        <SideBar />
        <main className='main'>
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
            <Route path='/profile' element={<Profile />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/register' element={<Register />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
