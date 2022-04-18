import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

import "../../style/components/block/Header.scss";
import "../../style/components/atoms/Cop.scss"

function Header(){
  const navigate = useNavigate();
  let signOut = () => {
    if(window.confirm('サインアウトしますか？')) {
      auth.signOut();
      navigate('/menu_app_v2');
     } 
  }

  return(
    <div className="Header">
    <header className="site-header">
     <div className="wrapper site-header__wrapper">
       <a href="#" className="brand">
         <h1>献立メモアプリ</h1>
       </a>
       <nav className="nav">
         <ul className="nav__wrapper">
           <li className="nav__item">
             <a href="#">使い方</a>
           </li>
           <li className="nav__item">
             <a href="#">お問い合わせ</a>
           </li>
           <li className="nav__item">
             <a href='#'>
               <button className='signOut' onClick={signOut}>
               サインアウト
              </button>
             </a>
           </li>
         </ul>
       </nav>
     <div className="cp_cont">
       <div className="cp_offcm01">
         <input type="checkbox" id="cp_toggle01"></input>
         <label htmlFor="cp_toggle01"><span></span></label>
         <div className="cp_menu">
         <ul>
           <li><a href="#">使い方</a></li>
           <li><a href="#">お問い合わせ</a></li>
           <li>
               <button className="signOut" onClick={signOut}>
               サインアウト
              </button>
           </li>
         </ul>
         </div>
       </div>
      </div>
     </div>
   </header>
  </div>
  )
}

export default Header