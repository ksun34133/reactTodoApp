import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoList extends Component {
  state = {
    todoItems: [
      { id: "1", title: "Study Reactjs tutorials", status: "done" },
      {
        id: "2",
        title: "Start building reactjs components",
        status: "pending",
      },
      { id: "3", title: "Run react app on browser", status: "pending" },
    ],
  };

  jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  addNewToDo = (todo) => {
    this.setState({
      todoItems: [...this.state.todoItems, todo],
    });
  };

  removeToDoItem = (todo) => {
    const updatedTodoItems = this.state.todoItems.filter(
      (item) => todo.id !== item.id
    );

    this.setState({
      todoItems: updatedTodoItems,
    });
  };

  updateTodoItem = (todo) => {
    this.setState((state) => ({
      todoItems: state.todoItems.map((el) => {
        if (todo.id === el.id) {
          return {
            ...el,
            status: el.status === "done" ? "pending" : "done",
          };
        } else {
          return el;
        }
      }),
    }));
  };

  render() {
    return (
      <div className="todoList">
        <h3>Todo Items</h3>
        <AddTodo onAddingNewItem={this.addNewToDo} />
        <hr />
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td
                    style={{ color: item.status === "done" ? "green" : "red" }}
                  >
                    {this.jsUcfirst(item.status)}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info btn-sm"
                      onClick={() => this.updateTodoItem(item)}
                    >
                      <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </span>
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => this.removeToDoItem(item)}
                    >
                      <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
