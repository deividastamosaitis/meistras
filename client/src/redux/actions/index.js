import customFetch from "../../utils/customFetch";

import {
  ADDNEW_DARBAS,
  ADDNEW_SUTARTIS,
  GETALL_DARBAS,
  GETALL_SUTARTYS,
  TOGGLE_DARBAS,
  UPDATE_DARBAS,
  DELETE_DARBAS,
  TOGGLE_TAB,
} from "./type";

export const addNewDarbas = (data) => async (dispatch) => {
  try {
    const res = await customFetch.post(`/darbai`, { data });

    dispatch({ type: ADDNEW_DARBAS, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

export const getAllDarbai = () => async (dispatch) => {
  try {
    const res = await customFetch.get(`/darbai`);

    dispatch({ type: GETALL_DARBAS, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};
export const getAllSutartys = () => async (dispatch) => {
  try {
    const res = await customFetch.get(`/sutartys`);

    dispatch({ type: GETALL_SUTARTYS, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const toggleDarbas = (id) => async (dispatch) => {
  try {
    const res = await customFetch.get(`/darbai/${id}`);

    dispatch({ type: TOGGLE_DARBAS, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const updateDarbas = (id, data, username) => async (dispatch) => {
  try {
    const res = await customFetch.patch(`/darbai/${id}`, { data, username });

    dispatch({ type: UPDATE_DARBAS, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};

export const deleteDarbas = (id) => async (dispatch) => {
  try {
    const res = await customFetch.delete(`/darbai/${id}`);

    dispatch({ type: DELETE_DARBAS, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo API ", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};

export const addNewSutartis = (data) => async (dispatch) => {
  try {
    const res = await customFetch.post(`/sutartys`, { data });

    dispatch({ type: ADDNEW_SUTARTIS, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};
