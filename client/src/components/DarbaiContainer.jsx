import React from "react";
import { deleteDarbas, getAllDarbai } from "../redux/actions";
import { ALL_DARBAS, DONE_DARBAS, ACTIVE_DARBAS } from "../redux/actions/type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Darbas from "./Darbas";
import Tabs from "./Tabs";

const DarbaiContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllDarbai());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_DARBAS) {
      return todos;
    } else if (currentTab === ACTIVE_DARBAS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_DARBAS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteDarbas(_id));
      }
    });
  };
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />

        {todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodos} className="button clear">
            Ištrinti visus baigtus darbus
          </button>
        ) : null}
      </div>

      <ul>
        {getTodos().map((todo) => (
          <Darbas key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default DarbaiContainer;
