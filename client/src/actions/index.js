import beezyAPI from "../apis/beezy";
import history from "../history";

export const createBook = formValues => async (dispatch) => {
  const response = await beezyAPI.post("/books", { ...formValues});

  dispatch({ type: "CREATE_BOOK", payload: response.data });
  history.push("/");
};

export const fetchBook = id => async dispatch => {
  const response = await beezyAPI.get(`/books/${id}`);

  dispatch({ type: "FETCH_BOOK", payload: response.data });
};

export const fetchBooks = () => async (dispatch) => {
  const response = await beezyAPI.get("/books");

  dispatch({ type: "FETCH_BOOKS", payload: response.data });
};

export const editBook = (id, payload) => async dispatch => {
  const response = await beezyAPI.patch(`/books/${id}`, payload);

  dispatch({ type: "EDIT_BOOK", payload: response.data });
  history.push("/");
};

export const deleteBook = id => async dispatch => {
  const response = await beezyAPI.delete(`/books/${id}`);

  dispatch({ type: "DELETE_BOOK", payload: parseInt(id) });
  history.push("/");
};

// :::::::::::::::::::::::::: GENRE ::::::::::::::::::::::::::::: //

export const createGenre = formValues => async (dispatch) => {
  const response = await beezyAPI.post("/genres", { ...formValues});

  dispatch({ type: "CREATE_GENRE", payload: response.data });
  history.push("/");
};

export const fetchGenre = id => async dispatch => {
  const response = await beezyAPI.get(`/genres/${id}`);

  dispatch({ type: "FETCH_GENRE", payload: response.data });
};

export const fetchGenres = () => async (dispatch) => {
  const response = await beezyAPI.get("/genres");

  dispatch({ type: "FETCH_GENRES", payload: response.data });
};

export const editGenre = (id, payload) => async dispatch => {

  const genresResponse = await beezyAPI.patch(`/genres/${id}`, payload);

  dispatch({ type: "EDIT_GENRE", payload: genresResponse.data });
  history.push("/");
};

export const deleteGenre = id => async dispatch => {
  const response = await beezyAPI.delete(`/genres/${id}`);

  dispatch({ type: "DELETE_GENRE", payload: parseInt(id) });
  history.push("/");
};
