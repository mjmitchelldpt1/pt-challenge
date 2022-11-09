import { FaHome, FaCalendarDay, FaDumbbell, FaClock, FaBook  } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function SideBar() {
  const SideBarIcon = ({ icon, text }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  )
  
    return (
    <div className='top-16 left-0 h-screen w-16 m-0
    flex flex-col bg-gray-900 text-white shadow-lg'>

      <Link to='/'><SideBarIcon text={'Home'} icon={ <FaHome size='32'/>}  /></Link>
      <Link to='/workout'><SideBarIcon text={'Workout'} icon={ <FaDumbbell size='32'/>} /></Link>
      <Link to='/workoutlog'><SideBarIcon text={'Workout Log'} icon={ <FaBook size='32'/>} /></Link>
      <Link to='/calendar'><SideBarIcon text={'Calendar'} icon={<FaCalendarDay size='32'/>} /></Link>
      <Link to='/timer'><SideBarIcon text={'Timer'} icon={<FaClock size='32'/>} /></Link>
    </div>
  )
}

export default SideBar
