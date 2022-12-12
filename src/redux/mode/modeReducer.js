const initialState = {
    mode: 'light'
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
        return {
            mode: state.mode === "light" ? "dark" : "light"
        }

    default:
      return state;
  }
};

export default modeReducer;
