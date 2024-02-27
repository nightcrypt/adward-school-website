import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate=useNavigate();
    const gohome=()=>{
        navigate('/');
    }
     
  return (
    <>
        <div className='header-outer'>
            <div className='header-logo'>
                <div className='header-logo-1'></div>
                <div className='header-logo-2'>ADWARD</div>
            </div>    
            <div className='header-items'>
            <div className='header-item' onClick={gohome}>HOME</div>    
            <div className='header-item' >ABOUT</div>    
            <div className='header-item'>TEACHER</div>    
            <div className='header-item'>VEHILCLE</div>    
            <div className='header-item'>CONTACT US</div>    
            <div className='header-item search-logo'>logo</div> 
            </div>      
        </div>    
    </>
  )
}

export default Header
