import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './index.css'

/**
 * Temporary index page for ease of navigation
 * @returns { HTMLElement }
 */

export default function Index() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="index">
        <Link to="/user/12">User 12</Link>
        <Link to="/user/18">User 18</Link>
      </section>
    </>
  )
}
