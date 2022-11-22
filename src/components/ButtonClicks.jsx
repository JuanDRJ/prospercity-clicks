import '../stylesheets/buttonClicks.css'

function ButtonClicks(props) {
  return (
    <button 
      className={"button-clicks " + props.action}
      onClick={props.manejarClick}
      >
      {props.action}
    </button>
  )
}

export default ButtonClicks
