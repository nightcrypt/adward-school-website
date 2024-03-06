import React from 'react'
import "./Website.css";
import Image8 from "../Images/Image8.jpg"
import Image9Right from "../Images/Image9Right.jpg"
export default function Website() {
  return (
    <div className='about'>
        <div className='About-container'>
            <h2 className='About-heading'>
                About School
            </h2>
            <p className='about-text'>There are man variations of passages of Lorem Ipsum available, but the majority hthere  are man variations of passages of Lorem Ipsum available, but the majority </p>
<div className='about-img'>
    <img src={Image8}  className='Image8' alt='sorry Hlo '/>
</div>
<div className='about-bottom'>
    <a className='button'>
        <span>Read More</span>
        <img src={Image9Right} alt=' New Sorry'/>
    </a>
</div>
        </div>
    </div>
  )
}
