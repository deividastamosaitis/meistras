import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer position="top-center" />
    </React.StrictMode>
  </Provider>
);
