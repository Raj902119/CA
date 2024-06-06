import React from 'react'

const Wwd = () => {

  const button = ["Overview","Services","Research & Development","Industry"];
  return (
    <div className='contact-container'>
    <div className='contact-titles'>
    {button.map((item,index) => (
        <button key={index} className='contact-btn'>
            {item}
        </button>
    ))}
    </div>
    <div className='contact-discription'>
    Discription
    </div>
    </div>
  )
}

export default Wwd