import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "./todoslice";
function header() {
  const itemsDispatch = useDispatch();
  const addtodos = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      itemsDispatch(
        addtodo({ id: nanoid(1), title: e.target.value, completed: true })
      );
      e.target.value = " ";
    }
  };
  return (
    <header className="header">
      <h1>Todo App </h1>
      <form>
        <input
          className="new-todo"
          placeholder="what needs to be todo"
          autoFocus
          onKeyDown={addtodos}
        />
      </form>
    </header>
  );
}

export default header;
