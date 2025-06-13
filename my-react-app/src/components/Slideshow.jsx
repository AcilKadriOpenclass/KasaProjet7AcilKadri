import { useState } from 'react'
import '../styles/Slideshow.scss'
import leftArrow from '../assets/arrow-left.svg'
import rightArrow from '../assets/arrow-right.svg'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = pictures.length

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + length) % length)
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Précédent"
            className="arrow left"
            onClick={prevSlide}
          />
          <img
            src={rightArrow}
            alt="Suivant"
            className="arrow right"
            onClick={nextSlide}
          />
          <span className="counter">
            {currentIndex + 1}/{length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow