
export default (state = [], action) => {
  console.log('reduce init', state)
  switch (action.type) {
    case "CREATE_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_BOOKS":
      console.log('reducers', action.payload)
      return [...state, ...action.payload ];
    case "EDIT_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_BOOK":
      // TODO have a look
      // return { ...state, ...state.books.reduce((acc, book) => book.id === action.payload ? acc : [...acc, ...book], [])};
    default:
      return state;
  }
};
