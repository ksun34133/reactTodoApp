import React, { Component } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const listItems = props.todoItems.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleChangeProps={props.handleChangeProps}
      deleteTodoProps={props.deleteTodoProps}
      updateTodoItem={props.updateTodoItem}
    />
  ));

  return <ul>{listItems}</ul>;
};

export default TodoList;
