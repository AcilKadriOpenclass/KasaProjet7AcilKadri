import { Link } from 'react-router-dom';
import '../styles/HeaderFooter.scss';
import logo from '../assets/LOGO.png';

function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" />
                </Link>
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header;