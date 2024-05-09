import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewDarbas } from "../redux/actions";

const DarbaiForma = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewDarbas(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={text}
        placeholder="Įveskite tekstą"
        className="input"
        onChange={onInputChange}
      />
    </form>
  );
};

export default DarbaiForma;
