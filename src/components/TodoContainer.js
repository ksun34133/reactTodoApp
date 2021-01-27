import React, { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  state = {
    todoItems: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  maxTodoId = (arr) => {
    let max = arr.reduce(
      (maxId, todo) => (maxId > todo.id ? maxId : todo.id),
      0
    );
    return max + 1;
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    const filteredItems = this.state.todoItems.filter((todo) => todo.id !== id);
    this.setState({
      todoItems: filteredItems,
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: this.maxTodoId(this.state.todoItems),
      title: title,
      completed: false,
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo],
    });
  };

  updateTodoItem = (newTitle, id) => {
    this.setState({
      todoItems: this.state.todoItems.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todoItems={this.state.todoItems}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            updateTodoItem={this.updateTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
