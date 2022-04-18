import React from 'react';
import { useNavigate, Link } from "react-router-dom";

import "../../style/components/block/Contact.scss"
import Header from './Header';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit(){
    this.setState({isSubmitted:true})
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form  
        className="contactForm"
        onSubmit={()=>{this.handleSubmit()}} >
          <p>お名前</p>
          <input 
           type="text" 
           name="name"
           placeholder="Your Name"
           className="name"
          />
          <p>メールアドレス（必須）</p>
          <input 
           type="email" 
           name="email"
           placeholder="Your Email"
           className="email"
          />
          <p>お問い合わせ内容（必須）</p>
          <textarea 
           rows="5" 
           placeholder="Messages..."
           />
          <button 
            type='submit'
            value='Submit'
            className="contactSubmit"
           >
             Submit
          </button>
        </form>
      );
    }

    return (
    <div>
     <Header/>
   <div className='Contact' id="contact">
          <h1 className="title">Contact</h1>
          {contactForm}
          <div>
          <span className="link"><Link to={'/home'}>最初に戻る</Link></span>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;