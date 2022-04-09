import Memo from "./Memo"
import "../../style/components/block/PanelItem.scss" 
import TaskManagement from "../database/MonMenuData"


function PanelItem(props){
  return(
   <div className="PanelItem">
    <h3 className="Panel_title">{props.title}</h3>
    {props.content}
   </div>
  )
}

export default PanelItem