import { useParams, Navigate } from 'react-router-dom'
import logements from '../logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import '../styles/Logement.scss'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-info">
        <div className="logement-text">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={num <= parseInt(logement.rating) ? 'star filled' : 'star'}
              >★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        } />
      </div>
    </div>
  )
}

export default Logement