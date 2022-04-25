import React from 'react'
import './_sideBar.scss'
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth.action'

const SideBar = ({sideBarOpen,setSideBarOpen}) => {
  const dispatch=useDispatch()
  const handleLogout=()=>{
    console.log("logout")
    dispatch(logout())
  }
  return (
    <div className='sidebar' >
        <ul className={sideBarOpen ? 'sidebar open' : 'sidebar'}>
          <li className='sidebar__items'>
            <MdHome onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>Home</span>
          </li>
          <li className='sidebar__items'>
            <MdSubscriptions onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>Subscriptions</span>
          </li>
          <li className='sidebar__items'>
            <MdThumbUp onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>Like Videos</span>
          </li>
          <li className='sidebar__items'>
            <MdLibraryBooks onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>Library</span>
          </li>
          <li className='sidebar__items'>
            <MdHistory onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>History</span>
          </li>
          <hr/>
          <li className='sidebar__items' onClick={handleLogout}>
            <MdExitToApp onClick={()=>setSideBarOpen(false)} size={25}/>
            <span>Log Out</span>
          </li>
          <hr/>
        </ul>
    </div>
  )
}

export default SideBar