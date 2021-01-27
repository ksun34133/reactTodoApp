import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            name="title"
            className="input-text"
            placeholder="Enter title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <input type="submit" className="input-submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputTodo;
