import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-full border-2 solid bg-yellow-400 w-full'>
      <nav className='border-black border-2 bg-red-500 h-[103px] flex items-center justify-around'>
     <div className='flex'>
      <NavLink to='menu' className={'no-underline h-full p-5'}> 
        
        Menu

      </NavLink>
      <NavLink to='dine' className={'no-underline h-full p-5'}>
        Dine

      </NavLink>
     </div>
     <div>
      <NavLink to>

      </NavLink>

     </div>

      </nav>
    
        
        
    <Outlet/>
    </div>
    
    
   
  )
}

export default Dashboard