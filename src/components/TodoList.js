import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const listItems = this.props.todoItems.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={this.props.handleChangeProps}
        deleteTodoProps={this.props.deleteTodoProps}
        updateTodoItem={this.props.updateTodoItem}
      />
    ));

    return <ul>{listItems}</ul>;
  }
}

export default TodoList;
