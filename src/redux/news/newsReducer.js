const initialState = {
  loading: false,
  news: [],
  error: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_NEWS_SUCCESS":
      return {
        loading: false,
        news: action.payload,
      };

    case "FETCH_NEWS_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default newsReducer;