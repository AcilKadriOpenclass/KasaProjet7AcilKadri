import '../styles/Home.scss'
import bannerImage from '../assets/Image source 1.png'
import logements from '../logements.json'
import Card from './Card'

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Paysage côtier" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="locations-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home