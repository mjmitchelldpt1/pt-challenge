import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar shadow-lg bg-gray-900 text-white h-16 '>
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2 text-lg font-bold content-center'>
        
          <Link to='/' className='mx-1'>PT 30 Day Challenge</Link>
        
        </div>

        <div className='flex-1'>
          <div className='flex justify-end font-bold'>
            <Link to='/' className='navbar-button'>Home</Link>
            <Link to='/about' className='navbar-button'>About</Link>
            <Link to='/contact' className='navbar-button'>Contact</Link>
            <Link to='/login' className='navbar-button'>Login</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
