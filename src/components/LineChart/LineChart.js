import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import CustomTooltip from './CustomTooltip'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/**
 * A line chart showing user's average session, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function RenderLineChart(props) {
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.session)
  }, [props.session])

  // custom xAxis to match figma model
  let daysArray = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  let days = daysArray.map((day, index) => {
    return <span key={index}>{day}</span>
  })

  return (
    <>
      <div className="days">{days}</div>
      <LineChart width={258} height={263} data={data} margin={0}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          type="category"
          hide={true}
        />
        <YAxis
          hide={true}
          domain={['dataMin -40', 'dataMax +30']}
          tickLine={false}
          type="number"
        />
        <Legend
          align="left"
          verticalAlign="top"
          iconSize="0"
          wrapperStyle={{
            padding: '20px 0 10px 20px',
            opacity: '50%',
            lineHeight: '24px',
            fontSize: '17px',
            width: '200px',
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            strokeWidth: 0,
          }}
        />
        <Line
          padding={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          name=" "
          type="natural"
          dataKey="sessionLength"
          stroke="#FFF"
          dot={false}
          activeDot={{ r: 3 }}
          strokeWidth="2px"
          opacity={0.9}
        />
      </LineChart>
    </>
  )
}

RenderLineChart.propTypes = {
  session: PropTypes.array,
}
