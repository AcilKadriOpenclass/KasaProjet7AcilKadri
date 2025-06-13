import '../styles/Footer.scss'
import logo from '../assets/logo-footer.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer