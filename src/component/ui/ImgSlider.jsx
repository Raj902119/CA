import React, { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './ImgSlider.css' // Import the CSS file for styling

const images = [
  {
    url: 'assets/hero1 (1).jpg',
    header: 'Team Building Workshop',
    text: 'Enhance teamwork and collaboration with fun activities.',
  },
  {
    url: 'assets/hero1 (2).jpg',
    header: 'Leadership Conference',
    text: 'Empower leaders with insights and strategies for success.',
  },
  {
    url: 'assets/img5.jpeg',
    header: 'Office Retreat',
    text: 'Relax and recharge with your colleagues in a serene environment.',
  },
  {
    url: 'assets/img4.jpeg',
    header: 'Employee Recognition Ceremony',
    text: 'Celebrate the achievements and contributions of our team.',
  },
  {
    url: 'assets/img5.jpeg',
    header: 'Team Building Activity',
    text: 'Participate in engaging exercises to strengthen team bonds.',
  },
  {
    url: 'assets/img4.jpeg',
    header: 'Leadership Training',
    text: 'Develop essential leadership skills for personal and professional growth.',
  },
]

export const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSlideChange = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
    }
  }

  return (
    <div className='img-slider-container'>
      <SimpleImageSlider
        width={'100%'}
        height={680}
        images={images}
        showBullets={true}
        showNavs={true}
        onStartSlide={onSlideChange}
        autoPlay={true}
      />
      <div className='text-overlay drop-shadow-lg'>
        <h1 className='drop-shadow-lg'>{images[currentIndex].header}</h1>
        <div className={`transition-opacity duration-500 opacity-100`}>
          <p className='transition-opacity duration-500 drop-shadow-lg'>
            {images[currentIndex].text}
          </p>
          <button className='sbtn  hover:bg-blue-700 text-white font-bold py-3 px-5  mt-1 transition-opacity duration-500'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImgSlider
