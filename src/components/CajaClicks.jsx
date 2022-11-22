import '../stylesheets/cajaClicks.css'

function CajaClicks(props) {
  return (
    <div className="clicks-box">
      <h1>{props.valor}</h1>
    </div>
  )
}

export default CajaClicks
