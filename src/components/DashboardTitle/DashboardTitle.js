import './dashboardTitle.css'
import PropTypes from 'prop-types'

/**
 * A small welcome section with the name that changes dynamically depending on the user
 * @Component
 * @param {*} props
 * @returns { HTMLElement }
 */

export default function DashboardTitle(props) {
  return (
    <div className="dashboardTitle">
      <h1 className="user">
        Bonjour <span>{props.userName}</span>
      </h1>
      <h2 className="userText">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

DashboardTitle.propTypes = {
  userName: PropTypes.string,
}
