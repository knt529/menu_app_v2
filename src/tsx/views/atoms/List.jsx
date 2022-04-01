import React from "react";
import "../../style/components/atoms/List.scss"

class List extends React.Component {
  render() {
    const { memos, deleteMemo } = this.props;
    const list = memos.map(memo => {
      return (
        <div className="memo">
         <li id="menuMon">
           {memo.content}{" "}
           <button onClick={() => deleteMemo(memo.id)} className="delete">
           <i className="fa-solid fa-trash-can"></i>
           </button>
         </li>
        </div>
      );
    });
    return (
      <div  className="list">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;