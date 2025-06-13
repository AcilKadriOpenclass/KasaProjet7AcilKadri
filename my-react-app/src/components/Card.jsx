import { Link } from 'react-router-dom'
import '../styles/Card.scss'

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div
        className="location-card"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="card-gradient"></div>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default Card