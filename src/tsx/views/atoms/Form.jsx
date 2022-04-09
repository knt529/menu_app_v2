import React from "react";
import "../../style/components/block/Menu.scss"
import "../../style/components/atoms/Form.scss"

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }



  render() {
    return (
      <div className="Form">
        <h2 className="menu_title"></h2>
        <form className="form" onSubmit={this.hamdleSubmit}>
          <input 
          className="inputForm" 
          value={this.state.content} 
          onChange={this.handleChange} 
          required/>

          <input 
          type="submit" 
          value="追加" 
          className="submit" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const content = event.target.value;
    this.setState({ content: content });
  };

  hamdleSubmit = event => {
    event.preventDefault();
    this.props.addMemo(this.state.content);
    this.setState({ content: "" });
  };
}

export default Form;