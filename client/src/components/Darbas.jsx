import React from "react";
import { toggleDarbas, updateDarbas } from "../redux/actions";
import { deleteDarbas } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Darbas = ({ todo }) => {
  const dispatch = useDispatch();
  const { user } = useOutletContext();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);
  const [userName, setUserName] = useState(user.name);

  const onFormSubmit = (e) => {
    setEditing((prevState) => !prevState);

    dispatch(updateDarbas(todo._id, text, userName));
  };

  const toggle = () => {
    // dispatch(updateDarbas(todo._id, todo.data, user.name));
    dispatch(toggleDarbas(todo._id));
  };

  return (
    <>
      <li
        className="task"
        onClick={toggle}
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          color: todo?.done ? "#bdc3c7" : "#34495e",
          backgroundColor: todo?.done ? "#34495e" : "#0ac924",
        }}
        data-testid="todo-test"
      >
        <span style={{ display: editing ? "none" : "" }}>{todo?.data}</span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <span className="icon" onClick={() => dispatch(deleteDarbas(todo._id))}>
          <i className="fas fa-trash" />
        </span>
        <span
          className="icon"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <i className="fas fa-pen" />
        </span>
        <span className="icon">{todo.username}</span>
      </li>
    </>
  );
};

export default Darbas;
