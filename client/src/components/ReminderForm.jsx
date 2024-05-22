import React from "react";
import customFetch from "../utils/customFetch";
import { useState } from "react";

const ReminderForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendAt, setSendAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reminder = { email, subject, message, sendAt };
    await customFetch.post("/reminders/add", reminder);
    setEmail("");
    setSubject("");
    setMessage("");
    setSendAt("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="El.Pastas"
        required
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Tema"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Priminimas sau"
        required
      ></textarea>
      <input
        type="datetime-local"
        value={sendAt}
        onChange={(e) => setSendAt(e.target.value)}
        required
      />
      <button type="submit">Priminimas</button>
    </form>
  );
};

export default ReminderForm;
