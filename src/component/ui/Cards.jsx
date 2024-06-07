import React, { useState, useEffect, useRef } from 'react'
import './cards.css' // Make sure to adjust the path if necessary

const CardSlider = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/BGKH1FJ2YkQ?si=vNtD6NTCukvhXJ0u',
      title: 'YouTube video player 1',
    },
    {
      url: 'https://www.youtube.com/embed/L-U8XJAzJak?si=O5LehgZDrmSy_cSJ',
      title: 'YouTube video player 2',
    },
    {
      url: 'https://www.youtube.com/embed/EIQOLf5KpYc?si=3mYvXOXus1dYUh0B',
      title: 'YouTube video player 3',
    },
    {
      url: 'https://www.youtube.com/embed/EIQOLf5KpYc?si=3mYvXOXus1dYUh0B',
      title: 'YouTube video player 3',
    },
    {
      url: 'https://www.youtube.com/embed/EIQOLf5KpYc?si=3mYvXOXus1dYUh0B',
      title: 'YouTube video player 3',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = videos.length
  const intervalRef = useRef(null)
  const autoScrollDelay = 3000
  const autoScrollDirection = useRef(1) // 1: right, -1: left
  const autoScrollCount = useRef(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const handleAutoScroll = () => {
    if (autoScrollCount.current === 2) {
      autoScrollDirection.current = -1 // Change direction to left after 2 scrolls to right
    } else if (autoScrollCount.current === 4) {
      autoScrollDirection.current = 1 // Change direction to right after 2 scrolls to left
      autoScrollCount.current = 0 // Reset count
    }

    if (autoScrollDirection.current === 1) {
      nextSlide()
    } else {
      prevSlide()
    }

    autoScrollCount.current++
  }

  useEffect(() => {
    intervalRef.current = setInterval(handleAutoScroll, autoScrollDelay)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <div className='slide-container'>
        <div
          className='slide-content'
          style={{
            transform: `translateX(-${currentIndex * 40}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {videos.map((video, index) => (
            <div className='card' key={index}>
              <div className='card-content-wrapper'>
                <div className='image-content'>
                  <iframe
                    width='560'
                    height='315'
                    src={video.url}
                    title={video.title}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='navBtn left' onClick={prevSlide}>
          &lt;
        </div>
        <div className='navBtn right' onClick={nextSlide}>
          &gt;
        </div>
      </div>
    </>
  )
}

export default CardSlider
