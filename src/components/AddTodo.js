import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      status: "pending",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddingNewItem({
      id: this.state.id,
      title: this.state.title,
      status: this.state.status,
    });

    this.setState({
      id: "",
      title: "",
      status: "pending",
    });
  }

  render() {
    return (
      <div>
        <h3>Add new Todo item</h3>
        <form name="frmAddTodo" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="number"
              name="id"
              value={this.state.id}
              className="form-control"
              placeholder="Enter Id"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={this.state.title}
              className="form-control"
              placeholder="Enter Title"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.handleInputChange}
            >
              <option value="done">Done</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <button type="submit" className="form-control btn btn-primary">
            Add Todo Item
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
