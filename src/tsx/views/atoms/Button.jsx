import '../../style/components/atoms/Button.scss'

function Button(props) {
  return(
    <div>
     <button className="btn btn-radius-solid" 
      onClick={props.action} id={props.btnId}
     >{props.title}<i className="fas fa-angle-right fa-position-right"></i></button>
    </div>
  )
}

export default Button