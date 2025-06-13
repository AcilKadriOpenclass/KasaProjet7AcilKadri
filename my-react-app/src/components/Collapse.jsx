import { useState } from 'react'
import '../styles/Collapse.scss'
import arrow from '../assets/arrow.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img
          src={arrow}
          alt="Flèche"
          className={`arrow ${isOpen ? 'up' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  )
}

export default Collapse