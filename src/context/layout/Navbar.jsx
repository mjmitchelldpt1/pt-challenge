import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-gray-700 text-white '>
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2 text-lg font-bold content-center'>
        <FaDumbbell className='my-auto text-xl'/>
          <Link to='/' className='mx-1 bg-neutral hover:bg-gray-600'>PT 30 Day Challenge</Link>
        <FaDumbbell className='my-auto text-xl' />
        </div>

        <div className='flex-1'>
          <div className='flex justify-end font-bold'>
            <Link to='/' className='bg-neutral hover:bg-gray-600 py-2 px-3'>Home</Link>
            <Link to='/about' className='bg-neutral hover:bg-gray-600 py-2 px-3'>About</Link>
            <Link to='/contact' className='bg-neutral hover:bg-gray-600 py-2 px-3'>Contact</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
