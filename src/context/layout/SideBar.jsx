import { FaHome, FaCalendarDay, FaDumbbell, FaClock  } from 'react-icons/fa'

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
    <div className='fixed top-16 left-0 h-screen w-16 m-0
    flex flex-col bg-gray-900 text-white shadow-lg'>

      <SideBarIcon text={'Home'} icon={ <FaHome size='32'/>}  />
      <SideBarIcon text={'Workout'} icon={ <FaDumbbell size='32'/>} />
      <SideBarIcon text={'Calendar'} icon={<FaCalendarDay size='32'/>} />
      <SideBarIcon text={'Timer'} icon={<FaClock size='32'/>} />
      
    </div>
  )
}

export default SideBar
