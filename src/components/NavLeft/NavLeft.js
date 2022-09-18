import { Link } from 'react-router-dom'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import './navLeft.css'

/**
 * A side navigation's bar with a copyright of the company
 * @Component
 * @returns { HTMLElement }
 */

export default function Header() {
  return (
    <section className="navLeft">
      <nav className="navIcons">
        <Link className="navButton" to="/rest">
          <img
            src={process.env.PUBLIC_URL + icon1}
            alt="icon rest"
            className="icon"
          />
        </Link>
        <Link className="navButton" to="/swimming">
          <img
            src={process.env.PUBLIC_URL + icon2}
            alt="icon swimming"
            className="icon"
          />
        </Link>
        <Link className="navButton" to="/bicycle">
          <img
            src={process.env.PUBLIC_URL + icon3}
            alt="icon bicycle"
            className="icon"
          />
        </Link>
        <Link className="navButton" to="/fitness">
          <img
            src={process.env.PUBLIC_URL + icon4}
            alt="icon fitness"
            className="icon"
          />
        </Link>
      </nav>
      <p className="copyright">Copyright, SportSee 2020</p>
    </section>
  )
}
