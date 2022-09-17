import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * A bar chart showing user activity, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function RenderBarChart(props) {
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.activity)
  }, [props.activity])

  // The loop changes the dates in numbers to match with the figma model
  for (let i = 0; i < data?.length; i++) {
    data[i].day = [1, 2, 3, 4, 5, 6, 7]
  }

  return (
    <ResponsiveContainer width="100%" height={272}>
      <BarChart data={data} barCategoryGap="27" barGap="8">
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day" tickMargin="15" tickLine={false} />
        <YAxis
          orientation="right"
          axisLine={false}
          tickMargin="30"
          domain={[0, 400]}
          ticks={[0, 200, 400]}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          width="277"
          iconType="circle"
          align="right"
          verticalAlign="top"
          iconSize="8"
          wrapperStyle={{
            padding: '0 0 50px 0',
          }}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
          barSize={7}
          type="date"
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
          barSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

RenderBarChart.propTypes = {
  activity: PropTypes.array,
}
