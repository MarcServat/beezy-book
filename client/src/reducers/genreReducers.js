
export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_GENRE":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_GENRE":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_GENRES":
      return {...action.payload};
    case "EDIT_GENRE":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_GENRE":
      return { ...Object.values(state).reduce((acc, genre) => {
          if(genre.id !== action.payload) acc[genre.id] = genre;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
