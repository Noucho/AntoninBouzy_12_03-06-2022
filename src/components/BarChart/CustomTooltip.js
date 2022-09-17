import './customTooltip.css'

/**
 * A customised tooltip with recharts (for bar chart only).
 * more info at https://recharts.org/en-US/examples/CustomContentOfTooltip
 */

export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipActivity">
        <p className="labelActivity">{`${payload[0].value} kg`}</p>
        <p className="labelActivity">{`${payload[1].value} kCal`}</p>
      </div>
    )
  }
  return null
}
