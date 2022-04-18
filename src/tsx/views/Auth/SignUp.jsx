import { useState, useEffect } from "react";

import { auth } from '../../../firebase';
import { useNavigate, Link } from 'react-router-dom';

import "../../style/components/atoms/LoginForm.scss"


function LoginForm(props) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      navigate('/home');
    } catch (error) {
      setError("ユーザー登録に失敗しました");
    }
  };

  const initialValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  useEffect(() => {
    console.log(formErros);
    //エラーなしでかつ送信されているなら。
    if (Object.keys(formErros).length === 0 && isSubmit) {
      console.log(formValues);
    } else {
    }
  }, [formErros]);

  //バリデーションチェック
  const validate = (values) => {
    const errors = {};
    //半角英数字のみ(空文字OK)
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    //valueが空ならerrrosの配列に入れる。
    if (!values.email) {
      errors.email = "メールアドレスを入力してください。";
    } else if (!regex.test(values.email)) {
      errors.email = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors;
  };



  return (
    <div>
    <div className='top-page'>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <a href="#" className="brand signBrand">
            <h1>献立作成アプリ</h1>
          </a>
        </div>  
      </header>
    </div>
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
       <h1>ユーザ登録</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="メールアドレス" 
           value={formValues.email}
           onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErros.email}</p>
         

          <div className="formField">
          <label>パスワード</label>
          <input name="password" type="password" placeholder="パスワード"
           value={formValues.password}
           onChange={(e) => handleChange(e)} />
          </div>
          <p className="errorMsg">{formErros.password}</p>
          
          <button className="submitButton">登録</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
          ユーザ登録済の場合は<span className="link"><Link to={'/menu_app_v2'}>こちら</Link></span>から
        </div>
        </div>
        <div>{props.content}</div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;