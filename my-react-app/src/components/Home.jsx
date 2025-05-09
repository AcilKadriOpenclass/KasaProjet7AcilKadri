import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import bannerImage from '../assets/Image source 1.png';

function Home() {

  const locations = [
    { id: '1', title: 'Appartement cosy au centre de Paris', cover: '#FF6060' },
    { id: '2', title: 'Studio lumineux à Montmartre', cover: '#FF6060' },
    { id: '3', title: 'Loft spacieux dans le Marais', cover: '#FF6060' },
    { id: '4', title: 'Appartement avec vue sur la Tour Eiffel', cover: '#FF6060' },
    { id: '5', title: 'Studio moderne à Belleville', cover: '#FF6060' },
    { id: '6', title: 'Maison charmante à Montparnasse', cover: '#FF6060' },
  ];

  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Paysage côtier" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="locations-grid">
        {locations.map((location) => (
          <Link to={`/logement/${location.id}`} key={location.id}>
            <div className="location-card" style={{ backgroundColor: location.cover }}>
              <div className="card-gradient"></div>
              <h2>{location.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;