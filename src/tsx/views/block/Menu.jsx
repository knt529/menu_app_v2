import Button from '../atoms/Button';

import '../../style/components/block/Menu.scss'

function Menu() {
  function create(){
    let menu = ['にくじゃが','から揚げ','ビビンバ','カレー','パスタ','うどん','ラーメン'];
    const randomMenu = menu[Math.floor(Math.random() * menu.length)];
    document.getElementById('menuMon').textContent = randomMenu;
  }
  
  let randomConfirm = () => {
    if(window.confirm('ランダム作成を開始しますか？')) {
      document.getElementById('random').addEventListener('click', e => {
        e.preventDefault();
        setTimeout(create, 1500);
      });
     } 
  }

  return(
   <div className="menu">
          <Button
           className="menu_item"
           title = "買い物リスト"
           />
          <Button
           className="menu_item"
           title = "カテゴリーから探す"
           />
          <Button
           className="menu_item"
           title = "ランダム作成"
           action = {randomConfirm}
           btnId ="random"
           />
   </div>
  )
}

export default Menu