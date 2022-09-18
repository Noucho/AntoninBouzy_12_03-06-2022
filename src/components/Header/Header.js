import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './header.css'

/**
 * A header with the company logo and a navigation bar
 * @Component
 * @returns { HTMLElement }
 */

export default function Header() {
  return (
    <>
      <div className="topNav">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + logo}
          alt="Homepage SportSee"
        />
        <nav className="nav">
          <ul>
            <Link className="navLink" to="/">
              <li>Accueil</li>
            </Link>
            <Link className="navLink" to="/profile">
              <li>Profil</li>
            </Link>
            <Link className="navLink" to="/settings">
              <li>Réglages</li>
            </Link>
            <Link className="navLink" to="/community">
              <li>Communauté</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  )
}
