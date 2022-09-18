import './customTooltip.css'

/**
 * A customised tooltip with recharts (for line chart only).
 * more info at https://recharts.org/en-US/examples/CustomContentOfTooltip
 */

export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipLength">
        <p className="labelLenght">{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}
