import Memo from "./Memo"
import "../../style/components/block/PanelItem.scss" 

function PanelItem(props){
  return(
   <div className="PanelItem">
    <h3 className="Panel_title">{props.title}</h3>
    <Memo />
   </div>
  )
}

export default PanelItem