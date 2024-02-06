  import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Root() {
  return (
    <>
       
        <div className="w-100 h-100 flex justify-center items-center">
          <Link to={'/'}>Home</Link>
        </div>
        
        <div >
          <Outlet/>
        </div>
    
    </>
 
    
  )
}

export default Root

