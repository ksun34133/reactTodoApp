import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../functionBased/Header";
import Navbar from "../functionBased/Navbar";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import About from "../functionBased/pages/About";
import NotMatch from "../functionBased/pages/NotMatch";

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem("todoItems");
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodoContainer = () => {
  const [todoItems, setTodoItems] = useState(getInitialTodos());

  useEffect(() => {
    console.log("test run");

    const temp = localStorage.getItem("todoItems");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodoItems(loadedTodos);
    }
  }, []);

  const maxTodoId = (arr) => {
    let max = arr.reduce(
      (maxId, todo) => (maxId > todo.id ? maxId : todo.id),
      0
    );
    return max + 1;
  };

  const handleChange = (id) => {
    setTodoItems((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoItems([
      ...todoItems.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: maxTodoId(todoItems),
      title: title,
      completed: false,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const updateTodoItem = (newTitle, id) => {
    setTodoItems(
      todoItems.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodoList
                todoItems={todoItems}
                handleChangeProps={handleChange}
                deleteTodoProps={deleteTodo}
                updateTodoItem={updateTodoItem}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
