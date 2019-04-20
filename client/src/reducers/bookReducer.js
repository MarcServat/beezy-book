
export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_BOOKS":
      console.log('fetchbooks', state, action.payload)
      return {...action.payload};
    case "EDIT_BOOK":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_BOOK":
      return { ...Object.values(state).reduce((acc, book) => {
          if(book.id !== action.payload) acc[book.id] = book;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
