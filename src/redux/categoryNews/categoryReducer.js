const initialState = {
    category: 'all'
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
        return {
            category: action.payload
        }

    default:
      return state;
  }
};

export default categoryReducer;