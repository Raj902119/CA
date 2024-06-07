import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Award.css' // Import the custom CSS

// Import your images
import aword1 from '../images/Vishwa-Maitri-Sangha.png'
import aword2 from '../images/maharashtra-rajya-marathi-patrakar-sangha.png'
import aword3 from '../images/Suryadatta.png'

const Award = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='award-container '>
      <div className='award-header'>
        <h2 className='font-raleway'>Awards</h2>
      </div>
      <div className='slider-container'>
        <Slider {...settings}>
          <div className='slider-item'>
            <div className='award-row'>
              <div className='award-image'>
                <img src={aword1} className='aimg' alt='Image 1' />
              </div>
              <div className='award-content'>
                <p>
                  2018-19: Facilitated for BNI EXCELLENCE tenure green pin
                  holder.
                </p>
                <button className='read-more-button'>Read More</button>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <div className='award-row'>
              <div className='award-image'>
                <img src={aword2} className='aimg' alt='Image 2' />
              </div>
              <div className='award-content'>
                <p>
                  Awarded by Shree Parmerkar Institute for research, innovation
                  and technology.
                </p>
                <button className='read-more-button'>Read More</button>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <div className='award-row'>
              <div className='award-image'>
                <img src={aword3} className='aimg' alt='Image 3' />
              </div>
              <div className='award-content'>
                <p>
                  Vishwa Maitri Sangha BharatVarsh recognized contribution in
                  Education Sector Rashtra Gaurav Sanman on the Occasion of
                  Azadi Ka Amrit Mahotsav (2022)
                </p>
                <button className='read-more-button'>Read More</button>
              </div>
            </div>
          </div>
          {/* Add more items as needed */}
        </Slider>
      </div>
    </div>
  )
}

export default Award
