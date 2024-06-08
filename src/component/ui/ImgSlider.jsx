import React, { useState, useEffect } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './ImgSlider.css' // Import the CSS file for styling

const images = [
  {
    url: 'assets/img5.jpeg',
    header: 'Team Building Workshop',
    text: 'Team Building Workshop',
  },
  {
    url: 'assets/img4.jpeg',
    header: 'Leadership Conference',
    text: 'Team Building Workshop',
  },
  {
    url: 'assets/img5.jpeg',
    header: 'Office Retreat',
    text: 'Team Building Workshop',
  },
  {
    url: 'assets/img4.jpeg',
    header: 'Employee Recognition Ceremony',
    text: 'Team Building Workshop',
  },
  {
    url: 'assets/img5.jpeg',
    header: 'Team Building Activity',
    text: 'Team Building Workshop',
  },
  {
    url: 'assets/img4.jpeg',
    header: 'Leadership Training',
    text: 'Team Building Workshop',
  },
]

export const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3200) // Change slide every 5 seconds

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  const onSlideChange = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
    }
  }

  return (
    <div className='img-slider-container'>
      <SimpleImageSlider
        width={'100%'}
        height={750}
        images={images}
        showBullets={true}
        showNavs={true}
        startIndex={currentIndex}
        onStartSlide={onSlideChange}
      />
      <div className='text-overlay drop-shadow-lg'>
        <h1 className='drop-shadow-lg'>{images[currentIndex].header}</h1>
        <div className={`transition-opacity duration-500 opacity-100`}>
          <p className='transition-opacity duration-500 drop-shadow-lg'>
            {images[currentIndex].text}
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition-opacity duration-500'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImgSlider
