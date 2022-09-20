import './dashboardTitle.css'
import PropTypes from 'prop-types'


/**
 * A small welcome section with the name that changes dynamically depending on the user
 * @Component
 * @param {*} props
 * @returns { HTMLElement }
 */

export default function DashboardTitle(props) {

    if (props.userName !== 'Karl' && props.userName !== 'Cecilia'){
        return (
            <div className="dashboardTitle">
                <h1 className="user">
                    Erreur dans l'importation des données
                </h1>
                <h2 className="userText">
                    Il semblerait que quelque chose ne fonctionne pas avec le serveur de données 😕
                </h2>
                <h2 className="userText">
                    Vérifiez que vous utilisez le bon User ID ! 🧐
                </h2>
            </div>
        )
    }
    else {
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

}


DashboardTitle.propTypes = {
  userName: PropTypes.string,
}
