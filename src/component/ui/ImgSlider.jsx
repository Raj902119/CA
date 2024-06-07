import React, { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './ImgSlider.css' // Import the CSS file for styling

const images = [
  { url: 'assets/img5.jpeg', header: 'Team Building Workshop' },
  { url: 'assets/img4.jpeg', header: 'Leadership Conference' },
  { url: 'assets/img5.jpeg', header: 'Office Retreat' },
  { url: 'assets/img4.jpeg', header: 'Employee Recognition Ceremony' },
  { url: 'assets/img5.jpeg', header: 'Team Building Activity' },
  { url: 'assets/img4.jpeg', header: 'Leadership Training' },
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
        height={750}
        images={images}
        showBullets={true}
        showNavs={true}
        onStartSlide={onSlideChange}
      />
      <div className='text-overlay'>
        <h1>{images[currentIndex].header}</h1>
      </div>
    </div>
  )
}

export default ImgSlider
