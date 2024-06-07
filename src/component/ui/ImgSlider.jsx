import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './ImgSlider.css' // Import the CSS file for styling

const images = [
  { url: 'assets/img5.jpeg' },
  { url: 'assets/img4.jpeg' },
  { url: 'assets/img5.jpeg' },
  { url: 'assets/img4.jpeg' },
  { url: 'assets/img5.jpeg' },
  { url: 'assets/img4.jpeg' },
]

export const ImgSlider = () => {
  return (
    <div className='img-slider-container'>
      <SimpleImageSlider
        width={'100%'}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}
