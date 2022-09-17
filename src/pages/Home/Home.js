// Components
import RenderBarChart from '../../components/BarChart/BarChart'
import DashboardTitle from '../../components/DashboardTitle/DashboardTitle'
import Header from '../../components/Header/Header'
import RenderLineChart from '../../components/LineChart/LineChart'
import NavLeft from '../../components/NavLeft/NavLeft'
import RenderRadialBarChart from '../../components/RadialBarChart/RadialBarChart'
import RenderRadarChart from '../../components/RadarChart/RadarChart'
import MacronutrientsBox from '../../components/MacronutrientsBox/MacronutrientsBox'

// Icons for cards/boxes
import caloriesIcon from './Icons/calories-icon.svg'
import proteinIcon from './Icons/protein-icon.svg'
import carbsIcon from './Icons/carbs-icon.svg'
import fatIcon from './Icons/fat-icon.svg'

// Datas
import GetUsersData from '../../data/Data'
import {
  GetUsersActivity,
  GetUsersAverageSession,
  GetUsersPerformances,
} from '../../data/Data'

// Css
import './home.css'

/**
 * function Home build the main page
 * @returns { HTMLElement }
 */

export default function Home() {
  // GetUsersData includes the user id, user information (first name, last name and age),
  // the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
  const usersData = GetUsersData()

  // GetUsersActivity retrieves a user's activity day by day with kilograms and calories.
  const usersActivity = GetUsersActivity()

  // GetUsersAverageSession retrieves the average sessions of a user per day. The week starts on Monday.
  const usersAverageSession = GetUsersAverageSession()

  // GetUsersPerformances retrieves a user's performance (energy, endurance, etc.).
  const usersPerformances = GetUsersPerformances()

  return (
    <>
      <header>
        <Header />
      </header>
      <section className="dashboard">
        <NavLeft />
        <div className="dashboardContent">
          <DashboardTitle userName={usersData?.userInfos.firstName} />
          <div className="dashboardChartsAndBoxes">
            <div className="dashboardCharts">
              <div className="barChart">
                <RenderBarChart activity={usersActivity} />
              </div>
              <div className="bottomSmallCharts">
                <div className="lineChart">
                  <div className="background">
                    <RenderLineChart session={usersAverageSession} />
                  </div>
                </div>
                <div className="radarChart">
                  <RenderRadarChart performance={usersPerformances} />
                </div>
                <div className="radialBarChart">
                  <RenderRadialBarChart
                    // Backend have 2 differents names for similar data
                    // score check both and multiply them by 100 to have percents on 100
                    score={(usersData?.todayScore || usersData?.score) * 100}
                  />
                </div>
              </div>
            </div>
            <div className="macronutrientsBoxes">
              <MacronutrientsBox
                image={caloriesIcon}
                macroCount={usersData?.keyData.calorieCount}
                macroName="Calories"
              />
              <MacronutrientsBox
                image={proteinIcon}
                macroCount={usersData?.keyData.proteinCount}
                macroName="Protéines"
              />
              <MacronutrientsBox
                image={carbsIcon}
                macroCount={usersData?.keyData.carbohydrateCount}
                macroName="Glucides"
              />
              <MacronutrientsBox
                image={fatIcon}
                macroCount={usersData?.keyData.lipidCount}
                macroName="Lipides"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
