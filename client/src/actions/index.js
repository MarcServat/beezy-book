import books from "../apis/books";
import history from "../history";

export const createBook = formValues => async (dispatch, getState) => {
  const response = await books.post("/books", { ...formValues});

  dispatch({ type: "CREATE_BOOK", payload: response.data });
  history.push("/");
};

export const fetchBook = id => async dispatch => {
  const response = await books.get(`/books/${id}`);

  dispatch({ type: "FETCH_BOOK", payload: response.data });
};

export const fetchBooks = () => async (dispatch, getState) => {
  const response = await books.get("/books");
  console.log('action', getState())
  dispatch({ type: "FETCH_BOOKS", payload: response.data });
};

export const editBook = (id, payload) => async dispatch => {
  const response = await books.patch(`/books/${id}`, payload);

  dispatch({ type: "EDIT_BOOK", payload: response.data });
  history.push("/");
};

export const deleteBook = id => async dispatch => {
  const response = await books.delete(`/books/${id}`);

  dispatch({ type: "DELETE_BOOK", payload: parseInt(id) });
  history.push("/");
};
