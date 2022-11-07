import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SideBar from './layout/SideBar';
import Login from './pages/Login';
import Timer from './pages/Timer';
import Calendar from './pages/Calendar';
import Workout from './pages/Workout';
import WorkoutLog from './pages/WorkoutLog';
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Navbar />
      <div id='FIXME' className='flex flex-row'>
        <SideBar />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='/workoutlog' element={<WorkoutLog />} />
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
