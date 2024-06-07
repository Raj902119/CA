import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './ImgSlider.css' // Import the CSS file for styling

const images = [
  { url: 'assets/img1.jpeg' },
  { url: 'assets/img2.jpeg' },
  { url: 'assets/img3.jpeg' },
  { url: 'assets/img4.jpeg' },
  { url: 'assets/img1.jpeg' },
  { url: './assets/img2.jpeg' },
  { url: './assets/img3.jpeg' },
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
