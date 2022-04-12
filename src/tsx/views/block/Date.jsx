import { useState } from 'react'
import '../../style/components/block/Date.scss'


function Date(){
  const [date, setDate] = useState("");
  
  const doChangeDate = (e)=> {
    setDate(e.target.value)
  }
  
  return(
    <div>
     <div className="date">
      <p className='choice'>↓↓ 作成を開始する日付を選択してください</p>
      <label className="date-edit">
       <input type="date" onChange={doChangeDate}/>
      </label>
      <div className='date-content'>
      <h1>{date}~の献立</h1>
      </div>
     </div>
   </div>
  )
}

export default Date